const { contextBridge, ipcRenderer } = require('electron')

Object.entries({
    versions: {
        node: () => process.versions.node,
        chrome: () => process.versions.chrome,
        electron: () => process.versions.electron,
        ping: () => ipcRenderer.invoke('ping'),
    },
    electronAPI: {
        setTitle: (title) => ipcRenderer.send('set-title', title),
        openDevTools: () => ipcRenderer.send('openDevTools'),
        openFile: () => ipcRenderer.invoke('dialog:openFile'),
        handleCounter: (cb) => ipcRenderer.on('update-counter', cb)
    },
    darkMode: {
        toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
        system: () => ipcRenderer.invoke('dark-mode:system'),
    },
    bluetooth: {
        pairingRequest: (cb) => ipcRenderer.on('bluetooth-pairing-request', cb),
        pairingResponse: (resp) => ipcRenderer.send('bluetooth-pairing-response', resp),
    },
}).forEach(([k, v]) => contextBridge.exposeInMainWorld(k, v))

/**
 * 如果注入的"键"，已存在window中，electron会抛出错误，在控制台可以看到
 */