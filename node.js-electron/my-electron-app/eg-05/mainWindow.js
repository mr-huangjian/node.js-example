const { BrowserWindow } = require('electron')
const path = require('path')

module.exports = function() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    })

    win.loadFile(path.join(__dirname, 'index.html'))

    win.on('close', (e) => {
        win = null
    })

    return win
}
