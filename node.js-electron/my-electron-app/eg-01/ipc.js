const { BrowserWindow, ipcMain, dialog, nativeTheme } = require('electron')

module.exports = function () {
    /**
     * send => on
     * invoke => handle
     * */ 

    ipcMain.handle('ping', () => 'pong')

    ipcMain.on('openDevTools', (event) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        win.openDevTools()
    })

    ipcMain.handle('dialog:openFile', async () => {
        const { canceled, filePaths } = await dialog.showOpenDialog()
        if (canceled) {
            return
        } else {
            return filePaths[0]
        }
    })
    
    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        win.setTitle(title)
    })

    ipcMain.on('counter-value', (event, value) => {
        console.log(`value: ${value}`)
    })

    // 默认使用系统的主题外观
    
    ipcMain.handle('dark-mode:toggle', () => {
        // 应用程序是否使用了深色外观模式
        if (nativeTheme.shouldUseDarkColors) {
            // 将应用程序的外观模式，切换为浅色模式
            nativeTheme.themeSource = 'light'
        } else {
            // 将应用程序的外观模式，切换为深色模式
            nativeTheme.themeSource = 'dark'
        }
        // 设置外观模式成功，然后
        // 返回，应用程序是否使用了深色外观模式
        return nativeTheme.shouldUseDarkColors
    })

    ipcMain.handle('dark-mode:system', () => {
        // 将应用程序的外观模式，与操作系统的外观模式同步
        nativeTheme.themeSource = 'system'
    })
}
