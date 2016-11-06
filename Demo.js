document.addEventListener('DOMContentLoaded', function() {
	var isStarted = true;
	var end = false;
	var points = 0;
	var result = 0;
	
	var collision = false;
	
	var ctx = document.querySelector('canvas').getContext('2d');
	
	var myBackground = new Background(5748, 680, "img/Long.png", 0, 0, "background", ctx);
	var player = new Player(101, 70, "img/Fokker1.png", 15, 400, "image", ctx); // w:530 h:56 x:0 y:555 SPRITE // 76/101
	var enemy = new Enemy(99, 53, "img/spitfire.png", 1100, 55, "image", ctx);
	var enemyManager = new EnemyManager(1);
	var boss = new Boss(200, 90, "img/B17.png", 800, 300, "image", ctx);
	
	var bullets = [];
	var fired = [];

	player.init();	
	enemyManager.createEnemy(enemy);
	
		document.addEventListener('keydown', function(e) {
			if(e.keyCode == 32) {
				bullets.push(new Rocket(ctx, player.getX() + player.getWidth(), player.getY() + player.getHeight()/2))	
			}
		},false)
		
	function pts() {
			ctx.font = "22px Georgia";
			ctx.fillText("Points: ", 0, 40);
			ctx.fillText(result, 80, 40);
		}	

/*setInterval(function() {
	bullets.push(new Rocket(ctx, enemy.getX() + enemy.getWidth(), enemy.getY() + enemy.getHeight()/2))	
}, 1000)
*/	
function loop() {
		if (isStarted) {		
			myBackground.draw();
			myBackground.moveLoop();
			player.bulletsInitialize();
			if (myBackground.moveLoop() === "over") {			
				isStarted = false;
			}
			for (var i = 0; i < bullets.length; i++) {
				var shot = bullets[i];
				if ((shot.getX() + 11 > enemy.getX() && shot.getX() + 11 < enemy.getX() + 99) && 
					(shot.getY() + 5 > enemy.getY() && shot.getY() + 5 < enemy.getY() + 53)) {
					collision = true;
					enemy.clear();
				}
				shot.move();
				shot.draw();
			}
			player.draw();
			player.move();
			pts();
			player.collisionCheck(enemy);
			enemy.draw();
			enemy.move();
			enemy.spawn();
			boss.move();
			
		} else {
			myBackground.draw();
			player.draw();
			player.move();
			boss.draw();
			boss.move();
			player.collisionCheckBoss(boss);		
		}
		
		if(collision) {
			points++;
			result = Math.floor(points/8);
			collision = false;
		}
		
		requestAnimationFrame(loop);

	}
	requestAnimationFrame(loop);
	
	
}, false) 

// 1024 699