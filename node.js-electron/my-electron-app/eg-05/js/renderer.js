
const { BrowserWindow } = require('@electron/remote')
const { ipcRenderer }= require('electron')
const path = require('path')

const input = document.querySelector('.sendMsgToMainInput')

document.querySelector('.sendMsgToMainButton').addEventListener('click', () => {
    const value = input.value.trim()
    input.value = ''
    ipcRenderer.send('say', value)
})

ipcRenderer.on('reply', (event, message) => {
    document.querySelector('.recvMsgFromMain').innerHTML = message
})