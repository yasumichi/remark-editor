// Initialize Editor
document.addEventListener('DOMContentLoaded', () => {
  require('../ace-builds/src-min-noconflict/ace.js');
  ace.config.set('basePath', 'ace-builds/src-min-noconflict');
  ace.require('mode-markdown');

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
    if (e.start.row != e.end.row) {
      webview.send('update-markdown', editor.getValue());
    }
  });

  // control fullscreen mode
  var editorPane = document.getElementById('editor');

  webview.addEventListener('enter-html-full-screen', () => {
    editorPane.setAttribute('style', 'display:none');
  });

  webview.addEventListener('leave-html-full-screen', () => {
    editorPane.removeAttribute('style');
  });
});
