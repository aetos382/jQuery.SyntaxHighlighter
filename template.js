(function(root, factory) {
	if (typeof module == "object" && typeof exports === "object") {
		module.exports = factory(require("jquery"));
	}
	else if (typeof define === "function" && define.amd) {
		define(['jquery'], factory);
	}
	else {
		factory(jQuery);
	}
})(this, function ($) {

%= body %

});
