(function() {
	"use strict";

	var canvas = document.getElementById('background');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var context = canvas.getContext('2d');
	context.globalAlpha = .8;

	var img = new Image();
	img.src = 'http://images2.wikia.nocookie.net/__cb20120829173145/adventuretimewithfinnandjake/images/thumb/b/b3/Princess_Cookie.png/500px-Princess_Cookie.png';

	var dots = new Array();
	for (var i = 0; i < 20; i++) {
		var size = Math.ceil(Math.random() * 90) + 30;
		var x = random.x();
		var y = random.y();
		var color = random.color();

		switch (Math.ceil(Math.random()*2)) {
			case 1: dots[i] = new Square(size, x, y, color);
					break;
			case 2: dots[i] = new Cookie(size, x, y, img);
					break;
			// case 2: dots[i] = new Circle(size, x, y, color);
		}
	}

	window.logDots = function() {console.log(dots);};

	console.log(dots);

	setInterval(function () {
		requestAnimationFrame(function() {
			context.clearRect(0, 0, canvas.width, canvas.height);
			for (var i = 0; i < dots.length; i++) {
				if (!dots[i].dead) {
					dots[i].draw(context);
					dots[i].tick(canvas, canvas.width, canvas.height);
				}
			}
		});
	}, 20);

	canvas.addEventListener('click', function(event) {
		// Collision detection between clicked offset and dot.
		for (var i = 0; i < dots.length; i++) {
			if (!dots[i].dead && dots[i].testClick(event.pageX, event.pageY))
				dots[i].resize();
		}
	}, false);
})();