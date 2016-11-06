function Rocket(ctx, x, y) {
	BulletBuilder.call(this, ctx, x, y);
	
	this.width = 18;
	this.height = 11;
	this.color = 'img/bullet.png';
	this.speed = 5;	
}

Rocket.prototype = Object.create(BulletBuilder.prototype);
Rocket.prototype.constructor = Rocket;

Rocket.prototype.display = function() {
	this.rocket.draw();
}

Rocket.prototype.move = function() {
	this.setX((this.getX() + this.speed));;
}


