const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log('[Render]', response) // 打印 'pong'
}

func()

try {
    console.log(`[renderer.js] process:`, process) // throw error in Chrome
    console.log(`[renderer.js] __filename:`, __filename) // throw error in Chrome
} catch (error) {
    console.log('[renderer.js] ', error)
}

const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')

setButton.addEventListener('click', () => {
    const title = titleInput.value
    window.electronAPI.setTitle(title)
})

//
document.querySelector('#openDevToolsBtn').addEventListener('click', () => {
    window.electronAPI.openDevTools()
})

// 

const btn = document.getElementById('chooseFileBtn')
const filePathElement = document.getElementById('filePath')

btn.addEventListener('click', async () => {
    const filePath = await window.electronAPI.openFile()
    filePathElement.innerText = filePath
})

// 

const counter = document.getElementById('counter')

window.electronAPI.handleCounter((event, value) => {
    const oldValue = Number(counter.innerText)
    const newValue = oldValue + value
    counter.innerText = newValue
    event.sender.send('counter-value', newValue)
})

// 切换外观主题
document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})
// 使用系统外观主题
document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
})
