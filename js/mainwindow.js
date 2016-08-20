// Initialize Editor
require('ace-min-noconflict');
require('ace-min-noconflict/mode-markdown');

var editor = ace.edit("editor");
editor.getSession().setMode("ace/mode/markdown");
editor.getSession().setUseWrapMode(true);
editor.focus();

// for Guest Debug
var webview = document.getElementById('webview');
if (process.env.DEBUG_GUEST) {
  webview.addEventListener('dom-ready', () => {
    webview.openDevTools()
  });
}

// Emitted whenever the document is changed
editor.on("change", (e) => {
  if (e.data.range.start.row != e.data.range.end.row) {
    webview.send('update-markdown', editor.getValue());
  }
});
