// load app and BrowserWindow
const {app, BrowserWindow} = require('electron');
const path = require('path');

let win;

// create main window
function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'js', 'mainwindow.js'),
            webviewTag: true
        }
    });
    win.loadURL(`file://${__dirname}/mainwindow.html`);
    win.on('closed', () => { win = null; });
}

// create main window when application ready
app.on('ready', createWindow);

// finish application when all window was closed for macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
