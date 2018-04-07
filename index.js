module.exports = function(buffer) {
	var arr = Array.prototype.slice.call(buffer, 0);

  for (var i = 0; i < arr.length; i++) {
    arr[i] = '\\x' + ('0' + arr[i].toString(16)).slice(-2).toUpperCase()
  }

	return "module.exports = '" + arr.join('') + "';";
};
module.exports.raw = true;
