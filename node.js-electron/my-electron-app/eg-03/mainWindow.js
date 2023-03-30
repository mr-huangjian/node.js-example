const { BrowserWindow } = require('electron')
const path = require('path')

module.exports = function() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    })

    win.loadFile(path.join(__dirname, 'index.html'))

    return win
}
