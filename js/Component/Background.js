function Background(width, height, color, x, y, type, ctx) {   //type added
	Component.call(this, width, height, color, x, y, type,  ctx)  // type added
	
	this.backgroundSpeed = -1;
	this.backgroundEnd = -4725;
}

Background.prototype = Object.create(Component.prototype);
Background.prototype.constructor = Background;


Background.prototype.moveLoop = function() {
	this.setX((this.getX() + this.backgroundSpeed));
	//console.log(this.getX()); background end check
	if (this.getX() == this.backgroundEnd) {
		//console.log(this.getX()); background end check
		this.backgroundSpeed = 0;
		return "over";
	}
}

Background.prototype.clear = function(ctx) {
	var ctx = this.getCtx();
	ctx.clearRect(0, 0, 1024, 680);
}

