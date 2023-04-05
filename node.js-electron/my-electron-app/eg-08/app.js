const { app, BrowserWindow, globalShortcut } = require('electron')
const remote = require('@electron/remote/main')

const create = require('./mainWindow')
const ipc = require('./ipc')

let mainWindow

app.whenReady().then(() => {
    globalShortcut.register('Fn+F12', () => {
        BrowserWindow.getFocusedWindow()?.webContents.openDevTools()
    })

    globalShortcut.register('Command+R', () => {
        BrowserWindow.getFocusedWindow()?.webContents.reload()
    })

    setTimeout(() => {
        BrowserWindow.getFocusedWindow()?.webContents.send('redirect', 'https://cn.bing.com/')
    }, 1000 * 5)

    mainWindow = create('index.html')
    remote.initialize()
    remote.enable(mainWindow.webContents)

    ipc(mainWindow.id)
})

app.on('activate', () => {
    mainWindow.show()
})

app.on('window-all-closed', () => {
    app.quit()
})
