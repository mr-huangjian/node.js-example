const { BrowserWindow } = require('electron')
const path = require('path')

module.exports = function (htmlPath, options) {
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

    /**
     * electron 允许iframe访问第三方url
     * https://blog.csdn.net/youyudexiaowangzi/article/details/120239241
     */
    win.webContents.session.webRequest.onHeadersReceived({
        urls: ["*://*/*"]
    }, (details, callback) => {
        if (details.responseHeaders['X-Frame-Options']) {
            delete details.responseHeaders['X-Frame-Options'];
        } else if (details.responseHeaders['x-frame-options']) {
            delete details.responseHeaders['x-frame-options'];
        }
        callback({ cancel: false, responseHeaders: details.responseHeaders });
    })

    return win
}
