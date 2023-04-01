const { app, BrowserWindow, globalShortcut } = require('electron')
const remote = require('@electron/remote/main')
const path = require('path')

const create = require('./mainWindow')
const ipc = require('./ipc')

let mainWindow

app.whenReady().then(() => {
    globalShortcut.register('Command+I', () => {
        BrowserWindow.getFocusedWindow().webContents.openDevTools()
    })

    globalShortcut.register('Command+R', () => {
        BrowserWindow.getFocusedWindow().webContents.reload()
    })

    mainWindow = create()
    mainWindow.loadFile(path.join(__dirname, 'index.html'))

    remote.initialize()
    remote.enable(mainWindow.webContents)

    ipc()
})

app.on('activate', () => {
    mainWindow.show()
})

app.on('window-all-closed', () => {
    app.quit()
})
