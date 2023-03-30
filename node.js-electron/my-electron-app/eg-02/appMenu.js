const { BrowserWindow, Menu, shell } = require('electron')
const os = require('os')

module.exports = function() {
    Menu.setApplicationMenu(Menu.buildFromTemplate([
        {
            label: 'ElectronLabel',
            submenu: [
                {
                    role: 'help',
                    accelerator: process.platform == 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I', // alt => option
                    click: () => {
                        shell.openExternal('https://www.electronjs.org/zh/')
                    },
                },
                {
                    type: 'separator',
                },
                {
                    label: '打开控制台',
                    accelerator: process.platform == 'darwin' ? 'Alt+Cmd+O' : 'Alt+Shift+O',
                    click: () => {
                        BrowserWindow.getFocusedWindow().webContents.openDevTools()
                    },
                },
                {
                    label: '关闭控制台',
                    accelerator: process.platform == 'darwin' ? 'Alt+Cmd+C' : 'Alt+Shift+C',
                    click: () => {
                        BrowserWindow.getFocusedWindow().webContents.closeDevTools()
                    },
                },
            ]
        },
        {
            label: '文件',
            submenu: [
                {
                    label: '打开',
                    accelerator: process.platform == 'darwin' ? 'Cmd+O' : 'Shift+O',
                    click: () => {
                        shell.showItemInFolder(os.homedir())
                    },
                },
            ]
        },

    ]))
}
