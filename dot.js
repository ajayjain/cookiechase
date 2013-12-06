var dotFns = {
	tick: function(canvas, maxX, maxY) {
		this.x += this.speed;
		this.y += Math.floor(this.speed/2);

		if (this.x > maxX)
			this.x = -this.size;

		if (this.y > maxY)
			this.y = -this.size;

		if (this.size < 30) {
			this.dead = true;
			console.log("BOOM! Dot Destroyed, Captain!");
			console.log("====================");
			canvas.style.backgroundColor = random.color();
		}
	},

	testClick: function(xClick, yClick) {
		var yOverlap = this.y < yClick &&
		   yClick < this.y + this.size;

		var xOverlap = this.x < xClick &&
		   xClick < this.x + this.size;

		return yOverlap && xOverlap;
	},

	resize: function() {
		console.log("r");
		this.size -= 30;
		this.x += 15;
		this.y += 15;
	}
}

// Update location of Square, Circle or Cookie
// Square.prototype.tick = Circle.prototype.tick = Cookie.prototype.tick = 