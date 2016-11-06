function Enemy(width, height, color, x, y, type, ctx) {   //type added
	Component.call(this, width, height, color, x, y, type,  ctx)  // type added
	
	this.enemySpeed = 7;
	
	var directions = ['up', 'down'];
	var randomDirectionIndex  = Math.floor(Math.random() + 0.59);
	this.direction = directions[randomDirectionIndex];
		
}

Enemy.prototype = Object.create(Component.prototype);
Enemy.prototype.constructor = Enemy;


Enemy.prototype.move = function() {
	
	//console.log(this.direction);
	
	this.setX((this.getX() - this.enemySpeed));
	
	//	if (this.direction === "up") {
//			this.setY((this.getY() + this.enemySpeed));
	//	}
//		if (this.direction === "down") {
	//		this.setY((this.getY() - this.enemySpeed));
	//	}
	
}

Enemy.prototype.spawn = function() {
	var enemyMan = new EnemyManager(1);
	var ctx = this.getCtx(); 	
	if(this.getX() <= 0) {
		enemyMan.createEnemy(this);
	}
}

Enemy.prototype.clear = function(ctx) {
	var ctx = this.getCtx();
	ctx.clearRect(this.getX(), this.getY(), 99, 53);
}