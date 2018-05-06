
$(document).ready(function() {
 $("button").click(function(){
    var url0 = "https://keyword-spy.herokuapp.com/keyword?q=";
    var url1 = url0 + $("input:text").val()
    content = "<tr><th></th><th>Keyword</th><th>Price</th><th>Rating</th><th>Review</th><th>Salesrank</th><th>Score</th></tr>";
    $('#heads').html(content);
    $('#example').DataTable( {
        "destroy": true,
        'ajax': {
        "crossDomain": true,
        "url"    : url1,
        "dataSrc": ""
        },
        "columns": [
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
} );
} );
} );
