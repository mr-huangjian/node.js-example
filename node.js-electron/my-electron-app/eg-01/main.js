
const { app, BrowserWindow, Menu, MenuItem, globalShortcut, Notification, Tray, nativeImage } = require('electron')
const path = require('path')
const os = require('os')
const { setTimeout } = require('timers')
const ipc = require('./ipc')

let progressInterval

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            // 以下两个键值对，可以让HTML访问Node.js的API
            // nodeIntegration: true, 
            // contextIsolation: false,
        }
    })

    // 写在窗口加载网页之前才能生效
    // const menu = Menu.buildFromTemplate([
    //     {
    //       label: app.name,
    //       submenu: [
    //         {
    //             click: () => mainWindow.webContents.send('update-counter', 1),
    //             label: 'Increment',
    //         },
    //         {
    //             click: () => mainWindow.webContents.send('update-counter', -1),
    //             label: 'Decrement',
    //         }
    //       ]
    //     }
    // ])

    const menu = new Menu()
    menu.append(new MenuItem({
        label: 'ElectronLabel',
        submenu: [
            // {
            //     role: 'help',
            //     accelerator: process.platform == 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I', // alt => option
            //     click: () => {
            //         console.log('Electron rocks!')
            //     },
            // },
            {
                label: '打开控制台',
                accelerator: process.platform == 'darwin' ? 'Alt+Cmd+O' : 'Alt+Shift+O',
                click: () => {
                    mainWindow.webContents.openDevTools()
                },
            },
            {
                label: '关闭控制台',
                accelerator: process.platform == 'darwin' ? 'Alt+Cmd+C' : 'Alt+Shift+C',
                click: () => {
                    mainWindow.webContents.closeDevTools()
                },
            },
        ]
    }))


    Menu.setApplicationMenu(menu)

    // mainWindow.loadFile('index.html')
    mainWindow.loadFile(path.join(__dirname, 'index.html'))
    // mainWindow.loadURL('https://baidu.com/')

    // 监听网页发送的查找蓝牙设备的系统级请求
    mainWindow.webContents.on('select-bluetooth-device', (event, devices, cb) => {
        event.preventDefault()
        console.log('hj-1', devices);
        if (devices.length > 0) {
            // cb(666)
            cb(devices[0].deviceId)
        }
    })

    // 配对监听
    let bluetoothPinCallback
    mainWindow.webContents.session.setBluetoothPairingHandler((details, cb) => {
        console.log('hj-2', details);

        // 主进程，回调蓝牙配对请求的结果
        bluetoothPinCallback = cb

        // 向渲染进程，发起蓝牙配对请求
        mainWindow.webContents.send('bluetooth-pairing-request', details)
    })

    // ipcMain.on('bluetooth-pairing-response', (event, response) => {
    //     console.log('hj-3', response);
    //     bluetoothPinCallback(response)
    // })


    // Dock进度条
    const INCREMENT = 0.03
    const INTERVAL_DELAY = 100 // ms

    let c = 0
    progressInterval = setInterval(() => {
        mainWindow && mainWindow.setProgressBar(c) // [0, 1.0]

        if (c < 2) {
            c += INCREMENT
        } else {
            c = -INCREMENT * 5
        }
    }, INTERVAL_DELAY)

}


app.whenReady().then(() => {
    globalShortcut.register('Alt+CommandOrControl+S', () => {
        console.log('Electron loves global shortcuts!')
    })

    ipc()
    createWindow()    
}).then(() => {
    return
    setTimeout(() => {
        const NOTIFICATION_TITLE = "Basic Notification";
        const NOTIFICATION_BODY = "Notification from the Main process";

        new Notification({
            title: NOTIFICATION_TITLE,
            body: NOTIFICATION_BODY,
        }).show()
    })
}).then(() => {
    return
    const win = new BrowserWindow()
    win.setRepresentedFilename(os.homedir())
    win.setDocumentEdited(true)
}).then(() => {
    return
    const imagePath = path.join(__dirname, '../img/juejin.png')
    const image = nativeImage.createFromPath(imagePath).resize({ width: 20 })
    const tray = new Tray(image)

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ])
    tray.setContextMenu(contextMenu)
    // tray.setToolTip('This is my application')
    // tray.setTitle('This is my title')
}).then(() => {
    return
    // 没有顶部这一块，包括左上角的三个按钮、标题栏
    const win = new BrowserWindow({ frame: false })
}).then(() => {
    return
    // 隐藏标题栏
    // const win = new BrowserWindow({ titleBarStyle: 'hidden' })

    // const win = new BrowserWindow({
    //     titleBarStyle: 'hidden',
    //     trafficLightPosition: { x: 10, y: 10 }
    // })
    // win.setWindowButtonVisibility(false)

    // on Windows
    const win = new BrowserWindow({
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#2f3241',
            symbolColor: '#74b1be',
            height: 60
        }
    })
}).then(() => {
    // const win = new BrowserWindow()
    // win.setIgnoreMouseEvents(true)
})

app.on('before-quit', () => {
    clearInterval(progressInterval)
})

app.on('activate', () => {
    const wins = BrowserWindow.getAllWindows()
    if (wins.length == 0) {
        createWindow()
    }
})

// 默认情况下，macOS 点击左上角的关闭按钮，应用程序直接退出销毁
app.on('window-all-closed', () => {
    // if (process.platform != 'darwin') {
        app.quit()
    // }
})

// console.log(`[Main] global:`, global); // 有值
// console.log(`[Main] window:`, window); // ReferenceError: window is not defined
// console.log(`[Main] this:`, this); // {}
console.log(`[Main] 主进程启动完毕！`)
new Array(2).fill('\n').forEach(_ => console.log(_))


