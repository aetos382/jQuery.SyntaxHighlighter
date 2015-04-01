(function(root, factory) {
    if (typeof module == "object" && typeof module.exports === "object") {
        factory(require("jquery"));
    }
    else if (typeof exports == "object") {
    	factory(require("jquery"));
    }
    else if (typeof define === "function" && define.amd) {
        define(['jquery'], factory);
    }
    else {
        factory(jQuery);
    }
}(this, function ($) {
	
%= body %

	JQuerySyntaxHighlighter.Highlighter.Setup($);
}));
