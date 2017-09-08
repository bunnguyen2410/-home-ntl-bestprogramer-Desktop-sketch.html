
function snake(){
	this.x = 0 ; 
	this.y=0;
	this.xSpeed=1;
	this.ySpeed=0;
	this.move = function(){
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
		this.x = constrain ( this.x , 0 , width-scl);
		this.y = constrain ( this.y , 0 , height-scl);
	}
	this.dir = function(x,y){
		this.xSpeed = x ;
		this.ySpeed = y ;
	}
	this.show = function(){
		fill(255);
		rect(this.x,this.y,10,10);
	}

}