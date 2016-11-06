function Bullet(ctx, x, y) {
	BulletBuilder.call(this, ctx, x, y);
	
	//this.radius = 5;
	//this.speed = 5;
	//this.dmg = 10,
	this.color = 'red';

	
	
}

Bullet.prototype = Object.create(BulletBuilder.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.draw = function() {
	var ctx = this.getCtx();
	ctx.save();
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(this.getX(), this.getY(), this.radius, 0, 2 * Math.PI);
	ctx.fill();
	ctx.restore();
}

