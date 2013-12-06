// Square constructor
var Square = function(size, x, y, color) {
	this.size = size;
	this.x = x;
	this.y = y;
	this.color = color;
	this.speed = random.speed();
	this.dead = false;

	extend(this, dotFns);

	this.draw = function(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.size, this.size);
	}
};