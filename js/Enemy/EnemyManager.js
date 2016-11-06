function EnemyManager(enemies) {
	
	var _enemies = enemies;
	
	this.getEnemies = function () {
		return _enemies;
	}
	
	this.setEnemies = function (value) {
		enemies.push(value)
	}	
}

EnemyManager.prototype.createEnemy = function(enemy) {
	
	for (var i = 0; i < this.getEnemies() ; i++) {
		var randPos = this.spawn();
		enemy.setX(randPos[0]);
		enemy.setY(randPos[1]);
		enemy.draw(randPos[0], randPos[1])
	}
};

EnemyManager.prototype.spawn = function () {
	var position = [];	
	var randX = 1111;
	var randY = Math.floor(Math.random() * 540) + 10;  //prevent offscrean Y spawn
	position.push(randX);
	position.push(randY);
	return position;
};