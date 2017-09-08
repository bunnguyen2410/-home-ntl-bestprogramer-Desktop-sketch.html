var mySnake ;
var myFood;
var scl;
var snakeArr=[];


function setup(){
	createCanvas(600,600);
	mySnake =  new snake();
	myFood = new food();
	frameRate(60);
	scl = 20;
	snakeArr.push(mySnake);
}


function draw(){
	background(51);
	mySnake.show();
	mySnake.move();
	myFood.display();
	if ( myFood.eaten(mySnake)){
		myFood.update();
		snakeArr.push(new snake());

	}
	
	for ( var i=1;i<snakeArr.length;i++){
			var oldx = snakeArr[i-1].x;
			var oldy = snakeArr[i-1].y;
			snakeArr[i]=snakeArr[i-1];
			snakeArr[i].show(oldx,oldy,10,10);
			snakeArr[i].move();
		
	}
	

}

function keyPressed(){
	if (keyCode==UP_ARROW) mySnake.dir(0,-1);
	else if(keyCode==DOWN_ARROW) mySnake.dir(0,1);
	else if(keyCode==LEFT_ARROW) mySnake.dir(-1,0);
	else if(keyCode==RIGHT_ARROW) mySnake.dir(1,0);
}
function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
}
function snake(){
	this.x = 0 ; 
	this.y = 0;
	this.xSpeed = 1;
	this.ySpeed = 0;
	this.total = 0 ; 

	this.move = function(){
		this.x = this.x + this.xSpeed *scl;
		this.y = this.y + this.ySpeed *scl;
		this.x = constrain ( this.x , 0 , width-scl);
		this.y = constrain ( this.y , 0 , height-scl);
	}
	this.dir = function(x,y){
		this.xSpeed = x ;
		this.ySpeed = y ;
	}
	this.show = function(newx,newy){
		if ( this.newx ==="undefined" && this.newy === "undefined" ){
		fill(255);
		rect(this.x,this.y,10,10);
		}
		else{
			fill(255);
			rect(this.newx,this.newy,10,10);
		}
	}
	
}
function food (){

	this.x=random(0,(width/2))+20;
	this.y=random(0,(height/2))+20;
	this.display = function (){
		fill(222, 49, 99);
		rect(this.x,this.y,10,10);
		

	}

	this.update = function(){	
			this.x=floor(random(0,(width/2)+20));
			this.y=floor(random(0,(height/2)+20));
	}
	
	this.eaten = function (asnake) {
		var d = dist ( this.x, this.y , asnake.x , asnake.y);
		if  ( d < 5) {
			return true;
		} 
		else{
			return false;
		}
	}	
}

