module.exports = function getBase(base) {
	var newBase = base.split("").reduce((acc, item) => Math.max(acc, item));
	if (newBase == 1) {
		return base.slice(1).split("").fill("9").join("");
	}
	
	for (var i = 2; i < +base; i++) {
	  	var conversion = (+base).toString(i);
	  	var sameLenString = "";
	  	for (var j = 0; j < conversion.length; j++) {
	  		sameLenString += "1";
	  	}
	  	if (conversion == sameLenString)
	  		return i;
 	}
}
