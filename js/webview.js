const {ipcRenderer} = require('electron');

ipcRenderer.on('update-markdown', (event,markdown) => {
  let source = document.getElementById('source');
  source.innerHTML = markdown;
  slideshow.loadFromString(source.innerHTML);
});
