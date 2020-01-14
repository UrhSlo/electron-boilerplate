const { app, BrowserWindow } = require('electron')

require('electron-debug')({
    showDevTools: process.env.NODE_ENV === 'development'
})

function createWindow() {
    var win = new BrowserWindow({
        width: 400,
        height: 470,
        resizable: false,
        icon: './app/icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('./app/index.html')
}

app.on('ready', createWindow)