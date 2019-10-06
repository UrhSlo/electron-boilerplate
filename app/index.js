const { app, BrowserWindow } = require('electron')

require('electron-debug')({
    showDevTools: process.env.NODE_ENV === 'development'
})

function createWindow() {
    let win = new BrowserWindow({
        width: 1280,
        height: 720,
        icon: './app/icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('./app/components/home.html')
}

app.on('ready', createWindow)