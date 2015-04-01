(function(root, factory) {
    if (typeof module == "object" && typeof module.exports == "object") {
        var highlighter = factory(require("jquery"));
		module.exports = function() { SyntaxHighlight: highlighter.HighlightElement };
    }
    else if (typeof exports == "object") {
    	var highlighter = factory(require("jquery"));
    	exports.SyntaxHighlight = highlighter.HighlightElement;
    }
    else if (typeof define == "function" && define.amd) {
        define(['jquery'], function ($) {
        	var highlighter = factory($);
        	return function() { SyntaxHighlight: highlighter.HighlightElement };
        });
    }
    else {
    	var highlighter = factory(jQuery);
    	root.SyntaxHighlight = highlighter.HighlightElement;
    }
}(this, function ($) {
	
%= body %

	JQuerySyntaxHighlighter.Highlighter.Setup($);
	return JQuerySyntaxHighlighter.Highlighter;
}));
