
const { ipcMain } = require('electron')

/**
 * Tip 终端乱码
 * 执行命令：chcp 65001
 */
ipcMain.on('say', (event, message) => {
    console.log(`收到来自渲染进程的消息 ${message}`)
    event.sender.send('reply', `已读：${message}`)
})
