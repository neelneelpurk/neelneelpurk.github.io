$(document).ready(function() {
    $("button").click(function(){
	document.getElementById("suggested_Result_box").innerHTML = ""; 
	var url1 =$("input:text").val()
        var url2 = "https://cors-anywhere.herokuapp.com/";
    	var url = url2+"https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Ddigital-text&field-keywords="+url1;
		$.get(url, function(response) {
			//console.log(response);
			var patt=/data-asin/g;
			while (patt.test(response)==true){
				var index=patt.lastIndex;
				if(response[index+2]=='B'){
					var i;
					var str="";
					for(i=2; i<12; i++){
						str+=response[index+i];
		  		    }
		  		    console.log(str);
		  		    var url1= url2 +"https://www.amazon.com/dp/"+str+"/";
		            $.get(url1, function(response1){
                        //console.log(response1);
			var content = "";
                        var title=/a-size-extra-large/g;
                        var j=0;
                        while(title.test(response1)==true){
						    var index1=title.lastIndex;
						    index1+=2;
						    //console.log(index1);
						    j=j+1;
						    var titlestr="";
		                    while(response1[index1]!="<" && j==4){
		                      	titlestr+=response1[index1];
		                       	index1=index1+1;
		                    }
		                    if(j==4){
		                        console.log(titlestr);
					content += "<tr class='table-info'><td>"+titlestr+"</td>";
					}
				        } 
				        var review=/totalReviewCount/g;
				        while(review.test(response1)==true){
						    var index1=review.lastIndex;
						    index1+=2;
						    //console.log(index1);
						    var reviewstr="";
		                    while(response1[index1]!="<"){
		                      	reviewstr+=response1[index1];
		                       	index1=index1+1;
		                    }
				    content += "<td>"+reviewstr+"</td>";
		                    console.log(reviewstr);
				        }  
				        var rat=/Length:</g;
				        while(rat.test(response1)==true){
						    var index1=rat.lastIndex;
						    index1+=4;
						    //console.log(index1);
						    var ratstr="";
		                    while(response1[index1]!="<"){
		                      	ratstr+=response1[index1];
		                       	index1=index1+1;
		                    }
				    var ratstr1 = ratstr.split(" ");
		                    console.log(ratstr1[0]);
				    content += "<td>"+ratstr1[0]+"</td>";
				        } 
				        var bsr=/Amazon Best Sellers Rank:</g;
				        while(bsr.test(response1)==true){
						    var index1=bsr.lastIndex;
						    index1+=3;
						    //console.log(index1);
						    var bsrstr="";
		                    while(response1[index1]!="("){
		                      	bsrstr+=response1[index1];
		                       	index1=index1+1;
		                    }
				    var bsrstr1 = bsrstr.trimLeft().split(" ");
		                    console.log(bsrstr1[0]);
				    content += "<td>"+bsrstr1[0]+"</td>";
				        } 
				        var pr=/a-color-price a-color-price">/g;
				        while(pr.test(response1)==true){
						    var index1=pr.lastIndex;
						    //console.log(index1);
						    var prstr="";
		                    while(response1[index1]!="<"){
		                      	prstr+=response1[index1];
		                       	index1=index1+1;
		                    }
		                    console.log(prstr.trimLeft());
				    content += "<td>"+prstr.trimLeft()+"</td>";
				        } 
				var lang=/<b>Language:</g;
                        while(lang.test(response1)==true){
                            var index1=lang.lastIndex+4;
                            var langstr="";
                            while(response1[index1]!="<"){
                                langstr+=response1[index1];
                                index1=index1+1;
                            }
                            console.log(langstr);
			    content += "<td>"+langstr+"</td>";
                        }
                        var publish=/<b>Publisher:</g;
                        while(publish.test(response1)==true){
                            var index1=publish.lastIndex+4;
                            var publishstr="";
                            while(response1[index1]!="<"){
                                publishstr+=response1[index1];
                                index1=index1+1;
                            }
                            console.log(publishstr);
			    content += "<td>"+publishstr+"</td>";
                        }

				        var rr=/class="arp-rating-out-of-text">/g;
				        while(rr.test(response1)==true){
						    var index1=rr.lastIndex;
						    //console.log(index1);
						    var rrstr="";
		                    while(response1[index1]!="<"){
		                      	rrstr+=response1[index1];
		                       	index1=index1+1;
		                    }
				    var rrstr1 = rrstr.split(" ");
		                    console.log(rrstr1[0]);
				    content += "<td>"+rrstr1[0]+"</td>";
				    content += "</tr>";
				    console.log(content);
				    $('#suggested_Result_box').append(content);
				        }
				        /*var lang=//g;
				        while(lang.test(response1)==true){
				        	var index1=lang.lastIndex;
				            var langstr="";
				            while(response1[index1]!="<"){
                                langstr+=response1[index1];
                                index1=index1+1;
				            }
				            console.log(langstr);
				        }
				        */
  		            });
		  		}
		    }
		});
	});
});

