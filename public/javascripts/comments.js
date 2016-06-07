$(document).ready(function(){

    $("#serialize").click(function(){
        console.log("Serialize clicked");
	var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
   	var url = "comment";
   	$.ajax({
   		url:url,
   		type: "POST",
   		data: jobj,
   		contentType: "application/json; charset=utf-8",
   		success: function(data,textStatus) {
      			$("#done").html(textStatus);
       		}
     	}) 
   });

   $("#getThem").click(function() {
	console.log("getThem clicked");
	$.getJSON('comment', function(data) {
		console.log(data);
		var everything = "&nbsp<img src='http://www.rkruza.co.uk/s/cc_images/cache_2429874571.jpg?t=1359298726'><ul>";
		for(var comment in data) {
			com = data[comment];
			everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
		}
		everything += "</ul>";
		$("#comments").html(everything);
	})
    });

});
