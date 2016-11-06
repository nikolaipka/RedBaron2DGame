function BulletBuilder(ctx, x, y){
	
	if (this.constructor === BulletBuilder) {
		throw new Error ('this class is abstract');
	}
	
	var _ctx = ctx
	var _x = x;
	var _y = y;

	this.getCtx = function() {
		return _ctx;
	}
	this.getX = function() {
		return _x;
	}
	this.setX = function(value) {
		_x = value;
	}
	this.getY = function() {
		return _y;
	}
	this.setY = function(value) {
		_y = value;
	}
}

BulletBuilder.prototype.draw = function() {
	var ctx = this.getCtx();
	var image = new Image();
	var startX = this.getX();
	var startY = this.getY();
	var width = this.width;
	var height = this.height;
	image.src = this.color;
	image.onload = function() {
		ctx.drawImage(image, startX, startY, width, height);
	}	
}