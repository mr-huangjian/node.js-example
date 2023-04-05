
const { BrowserWindow, shell } = require('@electron/remote')
const { log } = require('console')
const { ipcRenderer }= require('electron')
const path = require('path')

ipcRenderer.on('redirect', (ev, url) => {
    const iframe = document.querySelector('#webview')
    iframe.src = url
})