
const { BrowserWindow } = require('@electron/remote')
const { ipcRenderer }= require('electron')
const path = require('path')

const input = document.querySelector('.sendMsgToMainInput')

document.querySelector('.sendMsgToMainButton').addEventListener('click', () => {
    const value = input.value.trim()
    input.value = ''

    const result = ipcRenderer.sendSync('say', value)
    document.querySelector('.recvMsgFromMain').innerHTML = result
})
