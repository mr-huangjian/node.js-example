const { contextBridge, ipcRenderer } = require('electron')

const api = {
    versions: {
        node: () => process.versions.node,
        chrome: () => process.versions.chrome,
        electron: () => process.versions.electron,
    },
    darkMode: {
        toggle: () => ipcRenderer.invoke('darkMode', 'toggle'),
        useSystem: () => ipcRenderer.invoke('darkMode', 'useSystem'),
    },
    electron: {
        setTitle: (title) => ipcRenderer.send('electron', 'setTitle', title),
        openFile: () => ipcRenderer.invoke('electron', 'openFile'),
        showContextMenu: () => ipcRenderer.invoke('electron', 'showContextMenu'),
    },
}

for (const key in api) {
    contextBridge.exposeInMainWorld(key, api[key])
}

/**
 * 如果注入的"键"，已存在window中，electron会抛出错误，在控制台可以看到
 */
