
const { BrowserWindow, shell } = require('@electron/remote')
const { ipcRenderer }= require('electron')
const path = require('path')

const input = document.querySelector('.sendMsgToMainInput')

document.querySelector('.sendMsgToMainButton').addEventListener('click', () => {
    const value = input.value.trim()
    input.value = ''

    const result = ipcRenderer.sendSync('say', value)
    document.querySelector('.recvMsgFromMain').innerHTML = result
})

document.querySelector('.newWin').addEventListener('click', () => {
    ipcRenderer.send('newWin')
})

document.querySelector('.newWin').addEventListener('click', () => {
    ipcRenderer.send('newWin')
})



document.querySelector('#openURL').addEventListener('click', (ev) => {
    ev.preventDefault()

    const uri = ev.target.getAttribute('href')
    console.log(uri)
    shell.openExternal(uri)
})

document.querySelector('#showFinder').addEventListener('click', (ev) => {
    const uri = path.resolve(__filename)
    console.log(uri)
    shell.showItemInFolder(uri)
})
