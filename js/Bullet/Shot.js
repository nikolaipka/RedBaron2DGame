function Shot(ctx, x, y) {
		this.ctx = document.querySelector('canvas').getContext('2d');
        this.x = x;
        this.y = y;

}


Shot.prototype.display = function () {
    // make fillstyle blue if it's not already blue
    
        this.ctx.fillStyle = 'blue';
 
    // draw the shot on the canvas
    this.ctx.fillRect(this.x, this.y, 5, 5);
}

Shot.prototype.move = function() {
	this.x+=10;
}