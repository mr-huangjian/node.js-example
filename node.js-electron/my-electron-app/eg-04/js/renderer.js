
const { BrowserWindow } = require('@electron/remote')
const path = require('path')

document.querySelector('.main .openWindow').addEventListener('click', () => {
    const win = new BrowserWindow({
        width: 300,
        height: 200,
        modal: true,
        parent: BrowserWindow.getFocusedWindow(),
        frame: true,
        autoHideMenuBar: false,
    })
    
    /**
     * Mac OS X和Windows差异比较大
     * macos 没有关闭最小最大按钮
     * win 有菜单栏和关闭最小最大按钮
     */
    win.loadFile(path.join(__dirname, 'child.html'))
})
