function Player(width, height, color, x, y, type, ctx) {
	Component.call(this, width, height, color, x, y, type, ctx)
	
	this.isMovingUp = false;
	this.isMovingRight = false;
	this.isMovingLeft = false;
	this.isMovingDown = false;
	this.isShooting = false;

	this.speed = 5;	

	
}

Player.prototype = Object.create(Component.prototype);
Player.prototype.constructor = Player;

Player.prototype.moveKeyCode = function(key, state) {
	if (key == 39) {
		this.isMovingRight = state;
	}
	if (key == 38) {
		this.isMovingUp = state;
	}
	if (key == 40) {
		this.isMovingDown = state;
	}
	if (key == 37) {
		this.isMovingLeft = state;
	}
	if (key == 32) {
		this.isShooting = true;
		this.setFirePosition();
	}
}

Player.prototype.setFirePosition = function() {
	this.bulletsInitialize();
}

Player.prototype.move = function () {

	if  (this.isMovingUp && this.getY() > 0 ) {
		this.setY((this.getY() - this.speed), true)
	}

	if  (this.isMovingDown && this.getY() < 520) {
		this.setY((this.getY() + this.speed), true);
		
	}

	if  (this.isMovingLeft && this.getX() > 0) {	
		this.setX((this.getX() - this.speed), true);

	}

	if  (this.isMovingRight && this.getX() < 940) {		
		this.setX((this.getX() + this.speed), true);

	}
}

Player.prototype.takeFirstBullet = function(bullet) {
	for (var i = 0; i < 20; i++) {
		this.bullet = this.bullets[i];
		this.bullet.draw();
	}
}

Player.prototype.shoot = function() {
	this.bullet.draw();
	this.bullet.move();
}


Player.prototype.bulletsInitialize = function() {
	var bulletX = this.getX() + this.getWidth();
	var bulletY = this.getY() + this.getHeight()/2;
}

Player.prototype.init = function() {
	var _that = this;
	document.addEventListener('keydown',function (e) {
		var key = e.keyCode;
		_that.moveKeyCode(key, true);
	}, false);
	document.addEventListener('keyup',function (e) {
		var key = e.keyCode;
		_that.moveKeyCode(key, false);
	}, false);
};


Player.prototype.collisionCheckBoss = function (boss, ctx) {
	if ((this.getX() + this.getWidth() >= 800) && 
			(this.getY() > boss.getY() && this.getY() <boss.getY() + boss.getHeight())) {
		this.result();
	}
}

Player.prototype.collisionCheck = function (enemy, ctx) {
	if(((this.getX() + this.getWidth() > enemy.getX() &&
			this.getX() + this.getWidth() < enemy.getX() + enemy.getWidth()) &&
			(this.getY() + this.getHeight() > enemy.getY() && 
			this.getY() + this.getHeight() < enemy.getY() + enemy.getHeight())) ||
		((this.getX() + this.getWidth() > enemy.getX() &&
			 this.getX() + this.getWidth() < enemy.getX() + enemy.getWidth()) &&
			 (this.getY() > enemy.getY() && this.getY() < enemy.getY() + enemy.getHeight())) ||			 
		((this.getX() > enemy.getX() && this.getX() < enemy.getX() + enemy.getWidth()) &&
			 (this.getY() + this.getHeight() > enemy.getY() && 
			 this.getY() + this.getHeight() < enemy.getY() + enemy.getHeight())) ||			 
		((this.getX() > enemy.getX() && this.getX() < enemy.getX() + enemy.getWidth()) &&
			 (this.getY() > enemy.getY() && this.getY() < enemy.getY() + enemy.getHeight()))) {
		
		this.results();
	}
}


Player.prototype.result = function(){
	var result = document.createElement('div');
	result.id = 'result';
	result.innerHTML = "GAME OVER"
	document.body.appendChild(result);
	die;
}

Player.prototype.results = function(){
	this.getCtx().font = "40px Georgia";
	this.getCtx().fillText("GAME OVER", 400, 350);
	setTimeout(function() {
		window.location.href = "http://localhost/S6Web3/Fail/index.html"; 
	}, 800);
}

Player.prototype.shotInfo = function() {


}