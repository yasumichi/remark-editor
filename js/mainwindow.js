// Initialize Editor
require('ace-min-noconflict');
require('ace-min-noconflict/mode-markdown');

var editor = ace.edit("editor");
editor.getSession().setMode("ace/mode/markdown");
editor.getSession().setUseWrapMode(true);
editor.focus();

