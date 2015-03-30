var $ = require('jquery');
var jqsh = require('./dist/jQuery.SyntaxHighlighter');

$(function () {
  $(".sh").SyntaxHighlight("csharp", {
    autoLinks: false,
    highlight: [7, 8, 9, 10],
    toolbar: false,
    quickCode: false
  });
});
