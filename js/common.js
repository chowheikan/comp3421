$(document).ready(function(){
    $("#loginBtn").click(function(){
		$("#loginDialog").modal();
    });
});

function goto(url) {
	$('#content').attr('src',url); 
	return false;
}