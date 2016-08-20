// Initialize Editor
require('ace-min-noconflict');
require('ace-min-noconflict/mode-markdown');

var editor = ace.edit("editor");
editor.getSession().setMode("ace/mode/markdown");
editor.getSession().setUseWrapMode(true);
editor.focus();

var webview = document.getElementById('webview');
if (process.env.DEBUG_GUEST) {
  webview.addEventListener('dom-ready', () => {
    webview.openDevTools()
  });
}
