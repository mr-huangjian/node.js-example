
const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

document.getElementById('btn').addEventListener('click', () => {
    const title = document.getElementById('title').value
    window.electron.setTitle(title)
})

document.getElementById('chooseFileBtn').addEventListener('click', async () => {
    const filePath = await window.electron.openFile()
    document.getElementById('filePath').innerText = filePath
})

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.useSystem()
    document.getElementById('theme-source').innerHTML = 'System'
})

window.addEventListener('contextmenu', () => {
    electron.showContextMenu()
})