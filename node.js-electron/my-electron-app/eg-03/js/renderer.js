const { BrowserWindow } = require('@electron/remote')

document.querySelector('.right .min').addEventListener('click', () => {
    BrowserWindow.getFocusedWindow().minimize()
})

document.querySelector('.right .max').addEventListener('click', () => {
    if (!BrowserWindow.getFocusedWindow().isMaximized()) {
        BrowserWindow.getFocusedWindow().maximize()
    } else {
        BrowserWindow.getFocusedWindow().restore() // 没起效！！！
    }
})

document.querySelector('.right .close').addEventListener('click', () => {
    BrowserWindow.getFocusedWindow().close()
})
