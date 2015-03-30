var $ = require('jquery');
var jqsh = require('./jQuery.SyntaxHighlighter');

$(function () {
  $(".sh").SyntaxHighlight("csharp", {
    autoLinks: false,
    highlight: [7, 8, 9, 10],
    toolbar: false,
    quickCode: false
  });
});
