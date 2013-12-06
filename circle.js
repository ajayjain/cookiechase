// Circle constructor
var Circle = function(size, x, y, color) {
	this.size = size;
	this.x = x;
	this.y = y;
	this.color = color;
	this.speed = random.speed();
	this.dead = false;

	extend(this, dotFns);

	this.resize = function() {
		console.log("cr");
		this.size -= 30;
	};

	this.testClick = function(xClick, yClick) {
		var xDistance = Math.abs(this.x - xClick);
		var yDistance = Math.abs(this.y - yClick);
		var totalDistance = Math.sqrt(xDistance, yDistance);

		if (totalDistance <= this.size)
			return true;
		else
			return false;
	};

	this.draw = function(context) {
		context.fillStyle = this.color;
		context.beginPath();
		context.arc(this.x, this.y, this.size/2, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	};
};