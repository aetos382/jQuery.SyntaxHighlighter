!function(t,i){"object"==typeof module&&"object"==typeof module.exports?i(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],i):i(jQuery)}(this,function(t){var i;!function(i){var e=function(){function i(t,i,e,n){this.element=t,this.brush=i,this.config=e,this.autoHighlight=void 0==n?!0:n}return i.prototype.HighlightElement=function(){var i=this,e=this.getClasses();e.unshift("brush:"+this.brush),t.each(e,function(t,e){return i.element.addClass(e)}),this.autoHighlight&&SyntaxHighlighter.highlight(null,this.element[0])},i.prototype.getClasses=function(){var e=this,n=[];return t.each(this.config,function(t,o){var h,s=i.options[t];h=void 0==s?"function"==typeof o?o(e.element):t+":"+o:"function"==typeof s?s(o):s+":"+o,n.push(h)}),n},i.options={autoLinks:"auto-links",className:"class-name",collapse:"collapse",firstLine:"first-line",gutter:"gutter",highlight:function(t){return"highlight:["+t.join(",")+"]"},htmlScript:"html-script",light:"light",padLineNumbers:"pad-line-numbers",quickCode:"quick-code",smartTabs:"smart-tabs",tabSize:"tab-size",title:"title",toolbar:"toolbar"},i}();i.Highlighter=e,function(t){function i(i,n,o){return this.each(function(h,s){var u=new e(t(s),i,n,o);u.HighlightElement()})}t.fn.SyntaxHighlight=i}(t)}(i||(i={}))});
//# sourceMappingURL=jQuery.SyntaxHighlighter.js.map