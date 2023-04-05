const { app, BrowserWindow, globalShortcut, clipboard } = require('electron')
const remote = require('@electron/remote/main')

const create = require('./mainWindow')
const ipc = require('./ipc')

let mainWindow

app.whenReady().then(() => {
    const openDevToolsShortcut = 'Fn+F12'
    if (globalShortcut.isRegistered(openDevToolsShortcut)) {
        globalShortcut.unregister(openDevToolsShortcut)
    } else {
        globalShortcut.register(openDevToolsShortcut, () => {
            BrowserWindow.getFocusedWindow()?.webContents.openDevTools()
        })    
    }
    
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
