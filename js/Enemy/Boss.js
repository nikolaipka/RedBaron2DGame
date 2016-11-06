function Boss(width, height, color, x, y, type, ctx) {   //type added
	Component.call(this, width, height, color, x, y, type,  ctx)  // type added
	this.bossSpeed = 1.5;
	this.movingUp = false;

}

Boss.prototype = Object.create(Component.prototype);
Boss.prototype.constructor = Boss;


Boss.prototype.move = function() {
	if (this.getY() <= 0) {
		this.movingUp = false;
	}
	if (this.getY() > 480 ) {
		this.movingUp = true;
	}
	if (this.movingUp) {
		this.setY((this.getY() - this.bossSpeed))
	} else {
		this.setY((this.getY() + this.bossSpeed))
	}
}