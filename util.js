var random = {

	color: function() {
		var hex = Math.floor(Math.random() * 16777215);
		return '#' + hex.toString(16);
	},

	x: function() {
		return Math.floor(window.innerWidth * Math.random());
	},

	y: function() {
		return Math.floor(window.innerHeight * Math.random());
	},

	speed: function() {
		return 2 * Math.ceil(Math.random() * 2);
	}

};

// http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}