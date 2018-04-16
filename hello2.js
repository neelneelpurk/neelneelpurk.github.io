$(document).ready(function() {
    $("button").click(function(){
    	var url0 = "https://keyword-spy.herokuapp.com/keyword?q=";
        var url1 = url0 + $("input:text").val()
    	$.ajax({
    	    url: url1
    	}).then(function(data) {
	   var content = "<table>"
           content += '<tr>';
           content += '<td>' + 'Keyword' + '</td>';
           content += '<td>' + 'Price' + '</td>';
    	   content += '<td>' + 'Rating' + '</td>';
    	   content += '<td>' + 'Review' + '</td>';
	   content += '<td>' + 'Salesrank' + '</td>';
    	   content += '<td>' + 'Score' + '</td>';
           content += '</tr>'
           for(i=0; i<10; i++){
                content += '<tr>';
                content += '<td>' + data[i].keyword + '</td>';
		if(data[i].price>0){
		        content += '<td>' + data[i].price + '</td>';
	    		content += '<td>' + data[i].rating + '</td>';
			content += '<td>' + data[i].review + '</td>';
			content += '<td>' + data[i].salesrank + '</td>';
			content += '<td>' + data[i].score + '</td>';
		        content += '</tr>'
	   	}
		else{
                        content += '<td>' + "N/A" + '</td>';
			content += '<td>' + "N/A" + '</td>';
			content += '<td>' + "N/A" + '</td>';	
			content += '<td>' + "N/A" + '</td>';
			content += '<td>' + "N/A" + '</td>';	
		        content += '</tr>'
		}
	   }      
           content += "</table>"
           $('#here_table').html(content);
	});
    });
});



