const { BrowserWindow } = require('electron')
const path = require('path')

module.exports = function() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        resizable: true,
        show: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    win.loadFile(path.join(__dirname, 'index.html'))

    win.on('ready-to-show', () => {
        win.show()
    })
    win.on('close', (e) => {
        e.preventDefault()
        win.hide()
    })

    return win
}
