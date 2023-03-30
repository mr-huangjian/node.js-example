
const { BrowserWindow, ipcMain, dialog, nativeTheme } = require('electron')

const ctxMenu = require('./ctxMenu')

module.exports = function () {
    const api = {
        darkMode: {
            toggle: () => {
                if (nativeTheme.shouldUseDarkColors) {
                    nativeTheme.themeSource = 'light'
                } else {
                    nativeTheme.themeSource = 'dark'
                }
                return nativeTheme.shouldUseDarkColors
            },
            useSystem: () => {
                nativeTheme.themeSource = 'system'
            },
        },
        electron: {
            setTitle: (event, title) => {    
                const webContents = event.sender
                const win = BrowserWindow.fromWebContents(webContents)
                win.setTitle(title)
            },
            openFile: async () => {    
                const { canceled, filePaths } = await dialog.showOpenDialog()
                if (canceled) {
                    return
                } else {
                    return filePaths[0]
                }
            },
            showContextMenu: () => {
                ctxMenu().popup({
                    window: BrowserWindow.getFocusedWindow()
                })
            },
        }
    }

    for (const key in api) {
        const handler = (event, method, ...args) => api[key][method](event, ...args)
        ipcMain.on(key, handler)
        ipcMain.handle(key, handler)
    }

}
