/// <reference path="typings/jquery/jquery.d.ts"/>
var JQuerySyntaxHighlighter;
(function (JQuerySyntaxHighlighter) {
    var Highlighter = (function () {
        function Highlighter(element, brush, config, autoHighlight) {
            this.element = element;
            this.brush = brush;
            this.config = config;
            this.autoHighlight = (autoHighlight == undefined ? true : autoHighlight);
        }
        Highlighter.Setup = function ($) {
            Highlighter.$ = $;
            $.fn.SyntaxHighlight = function (brush, config, autoHighlight) {
                return this.each(function (index, element) {
                    Highlighter.HighlightElement($(element), brush, config, autoHighlight);
                });
            };
        };
        Highlighter.prototype.HighlightElement = function () {
            var _this = this;
            var classes = this.getClasses();
            classes.unshift("brush:" + this.brush);
            Highlighter.$.each(classes, function (index, value) { return _this.element.addClass(value); });
            if (this.autoHighlight) {
                SyntaxHighlighter.highlight(null, this.element[0]);
            }
        };
        Highlighter.HighlightElement = function (element, brush, config, autoHighlight) {
            var highlighter = new Highlighter($(element), brush, config, autoHighlight);
            highlighter.HighlightElement();
        };
        Highlighter.prototype.getClasses = function () {
            var _this = this;
            var classes = [];
            Highlighter.$.each(this.config, function (name, value) {
                var x = Highlighter.options[name];
                var c;
                if (x == undefined) {
                    if (typeof value == "function") {
                        c = value(_this.element);
                    }
                    else {
                        c = name + ":" + value;
                    }
                }
                else if (typeof x == "function") {
                    c = x(value);
                }
                else {
                    c = x + ":" + value;
                }
                classes.push(c);
            });
            return classes;
        };
        Highlighter.options = {
            autoLinks: "auto-links",
            className: "class-name",
            collapse: "collapse",
            firstLine: "first-line",
            gutter: "gutter",
            highlight: function (value) { return "highlight:[" + value.join(",") + "]"; },
            htmlScript: "html-script",
            light: "light",
            padLineNumbers: "pad-line-numbers",
            quickCode: "quick-code",
            smartTabs: "smart-tabs",
            tabSize: "tab-size",
            title: "title",
            toolbar: "toolbar"
        };
        return Highlighter;
    })();
    JQuerySyntaxHighlighter.Highlighter = Highlighter;
    function loadModule(root, factory) {
        if (typeof module == "object" && typeof module.exports == "object") {
            module.exports = factory(require("jquery"));
        }
        else if (typeof exports == "object") {
            exports.SyntaxHighlight = factory(require("jquery"));
        }
        else if (typeof define == "function" && define.amd) {
            define(["jquery"], function ($) {
                root.SyntaxHighlight = factory($);
                return root.SyntaxHighlight;
            });
        }
        else {
            root.SyntaxHighlight = factory(jQuery);
        }
    }
    JQuerySyntaxHighlighter.loadModule = loadModule;
})(JQuerySyntaxHighlighter || (JQuerySyntaxHighlighter = {}));
JQuerySyntaxHighlighter.loadModule(this, function ($) {
    JQuerySyntaxHighlighter.Highlighter.Setup($);
    return JQuerySyntaxHighlighter.Highlighter.HighlightElement;
});

//# sourceMappingURL=jQuery.SyntaxHighlighter.js.map