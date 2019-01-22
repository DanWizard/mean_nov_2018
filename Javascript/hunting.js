$(document).ready(function(){
			
	$("#button").click(function(){
		$.get('https://api.github.com/users/danwizard',	 displayName);
	});

	function displayName(data){
		document.getElementById('name').innerHTML = data.login;
	};
});