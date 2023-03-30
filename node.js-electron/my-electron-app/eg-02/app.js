const { app } = require('electron')

const create = require('./mainWindow')
const menu = require('./appMenu')
const ipc = require('./ipc')

let mainWindow

app.whenReady().then(() => {
    mainWindow = create()
    menu()
    ipc()
})

app.on('activate', () => {
    mainWindow.show()
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('before-quit', () => {

})

app.on('will-quit', () => {

})
