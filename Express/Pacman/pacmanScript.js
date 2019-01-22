
var world = [
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,1,2,2,2,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
	[2,1,2,2,2,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
	[2,1,2,2,2,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,2,2,2,2,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,2,1,2,1,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]

var pacman = {
	x:1,
	y:1
}

function displayWorld(){
	var output = '';

	for (var i = 0; i < world.length; i++) {
		output += "<div class='row'>"
		for (var j = 0; j < world[i].length; j++) {
			if(world[i][j] == 3)
			{
				output += "<div class='cherry'></div>"
			}
			if(world[i][j] == 2)
				output += "<div class='brick'></div>"
			if(world[i][j] == 1)
				output += "<div class='coin'></div>"
			if(world[i][j] == 0)
				output += "<div class='empty'></div>"
		}
		output += "</div>"
	}
	 // console.log(output);
	document.getElementById('world').innerHTML = output;
}
function displayPacman(){
	document.getElementById('pacman').style.left = pacman.x*20+"px"
	document.getElementById('pacman').style.top = pacman.y*20+"px"
}
document.onkeydown = function(e){
	if(e.keyCode == 38){
		if(world[pacman.y-1][pacman.x] == 2)
		{

		}
		else{
			pacman.y = pacman.y-1;
		}
		
	}
	if(e.keyCode == 39){
		if(world[pacman.y][pacman.x+1] == 2)
		{

		}
		else{
			pacman.x = pacman.x+1;
		}
	}
	if(e.keyCode == 40){
		if(world[pacman.y+1][pacman.x] == 2)
		{

		}
		else{
			pacman.y = pacman.y+1;
		}
	}
	if(e.keyCode == 37){
		if(world[pacman.y][pacman.x-1] == 2)
		{

		}
		else{
			pacman.x = pacman.x-1;
		}
		
	}
	if(world[pacman.y][pacman.x]==1 || world[pacman.y][pacman.x]==3 )
		{
			world[pacman.y][pacman.x]=0;
			displayWorld();
		}
	// console.log(world[pacman.y][pacman.x]);
	// console.log(e.keyCode);
	rotate(e);
	displayPacman();
	

}
function rotate(e){
	if(e.keyCode == 38){
	var img=document.getElementById('pacman');
	img.setAttribute('style','transform:rotate(90deg)');
	}
	if(e.keyCode == 39){
	var img=document.getElementById('pacman');
	img.setAttribute('style','transform:rotate(180deg)');
	}
	if(e.keyCode == 40){
	var img=document.getElementById('pacman');
	img.setAttribute('style','transform:rotate(270deg)');
	}
	if(e.keyCode == 37){
	var img=document.getElementById('pacman');
	img.setAttribute('style','transform:rotate(0deg)');
	}
	
}

displayWorld();
displayPacman();