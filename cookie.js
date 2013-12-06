// Cookie Constructor. Also sets image for cookie
var Cookie = function(size, x, y, image) {
	this.size = size;
	this.x = x;
	this.y = y;
	this.image = image;
	this.speed = random.speed();
	this.dead = false;

	extend(this, dotFns);

	this.draw = function(context) {
		context.drawImage(this.image, this.x, this.y, this.size, this.size);
	};
}