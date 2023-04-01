const { BrowserWindow } = require('electron')

module.exports = function() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    })

    win.on('close', (e) => {
        win = null
    })

    return win
}
