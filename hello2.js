
/* Formatting function for row details - modify as you need */
function format ( d ) {
    console.log(d.P_ASIN);
    var trs='';
    $.each($(d.P_ASIN),function(key,value){
    	trs+='<tr><td>'+value+'</td><td>'+d.P_Title[key]+'</td><td>'+d.P_SalesRank[key]+'</td><td>'+d.P_Pages[key]+'</td><td>'+d.P_Price[key]+'</td><td>'+d.P_Review[key]+'</td><td>'+d.P_Rating[key]+'</td></tr>';
    })
    // `d` is the original data object for the row
    return '<table class="table table-border table-hover">'+
           '<thead>'+
              '<th>ASIN</th>'+
            	'<th>Title</th>'+
            	'<th>Salesrank</th>'+
              '<th>No of Pages</th>'+
            	'<th>Price</th>'+
              '<th>Review</th>'+
            	'<th>Rating</th>'+  
           '</thead><tbody>' +
           	
           trs+
        '</tbody></table>';
}

$(document).ready(function() {
  $("button").click(function(){
    content = "<tr><th></th><th>Keyword</th><th>Price</th><th>Rating</th><th>Review</th><th>Salesrank</th><th>Score</th></tr>";
    $('#heads').html(content);
    var table = $('#example').DataTable({
        "destroy": true,
        "ajax": "https://keyword-spy.herokuapp.com/keyword?q="+$("input:text").val(),
        "columns": [
            {
                "class":          'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "keyword" },
            { "data": "price" },
            { "data": "rating" },
            { "data": "review" },
            { "data": "salesrank" },
            { "data": "score" }
        ],
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    });

    // Add event listener for opening and closing details
   $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );

        if ( row.child.isShown() ) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          // Open this row
          row.child( format(row.data()) ).show();
          tr.addClass('shown');
        }
    });
});
});
