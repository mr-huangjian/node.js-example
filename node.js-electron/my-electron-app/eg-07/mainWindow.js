const { BrowserWindow } = require('electron')
const path = require('path')

module.exports = function(htmlPath, options) {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        ...options
    })

    win.loadFile(path.join(__dirname, htmlPath))
    win.on('close', (e) => {
        win = null
    })

    return win
}
