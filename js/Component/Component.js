function Component(width, height, color, x, y, type, ctx) {
	
	if (this.constructor === Component) {
		throw new Error ('this class is abstract');
	}
	
	var _width = width;
    var _height = height;
    var _speedX = 0; // this.
    var _speedY = 0; // this
    var _color = color;
    var _x = x;
    var _y = y;   
    var _type = type;
    var _ctx = ctx;
    
    this.getWidth = function() {
    	return _width;
    }
    this.setWidth = function(value) {
    	_width = value;
    }
    this.getHeight = function() {
    	return _height;
    }
    this.setHeight = function(value) {
    	_height = value;
    }
    this.getColor = function() {
		return _color;
	}
	this.setColor = function(value) {
		_color = value;
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
	this.getType = function() {  //type added
		return _type;			//type added
	}
	this.setType = function(value) { //type added
		_type = value; 					//type added
	}
	this.getCtx = function() {
		return _ctx;
	}
	this.setCtx = function(value) {
		_ctx = ctx;
	}
}

Component.prototype.draw = function(color) {
	
	var type = this.getType();
		if (type == "image" || type == "background") {
	        var image = new Image();
	        image.src = this.getColor();
	    }
	var ctx = this.getCtx();
	var startX = this.getX();
	var startY = this.getY();
	var width = this.getWidth();
	var height = this.getHeight();
	image.src = this.getColor();
    image.onload = function() {
    ctx.drawImage(image, startX, startY, width, height);
    }	
}