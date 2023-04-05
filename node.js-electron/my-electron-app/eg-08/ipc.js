
const { ipcMain, BrowserWindow } = require('electron')
const create = require('./mainWindow')
const path = require('path')

module.exports = function(mainWinId) {

    /**
     * Tip 终端乱码
     * 执行命令：chcp 65001
     */
    ipcMain.on('say', (event, message) => {
        console.log(`收到来自渲染进程的消息：${message}`)
        event.returnValue = `已读取：${message}`
    })

    ipcMain.on('newWin', () => {
        create('child.html', {
            width: 400,
            height: 300,
            parent: BrowserWindow.fromId(mainWinId)
        })
    })

}