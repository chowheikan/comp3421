$(document).ready(function(){
    $("#loginBtn").click(function(){
		$("#loginDialog").modal();
    });
});

function goto(name, url) {
	localStorage.setItem("location", name);
	$('#content').attr('src',url); 
}

function getCurrentLocation() {
	return localStorage.getItem("location");
}

function log(str) {
	console.log(str);
}

