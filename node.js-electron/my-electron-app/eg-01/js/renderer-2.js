
document.querySelector('#clickme').addEventListener('click', async () => {
    // 触发事件 webContents.on('select-bluetooth-device') 
    const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true
    })

    console.log('device', device);

    document.querySelector('#device-name').innerHTML = device.name || `ID: ${device.id}`
})

// 渲染进程，接收主进程的蓝牙配对请求
bluetooth.pairingRequest((event, details) => {
    console.log(`bluetooth.pairingRequest`)

    const response = {}

    switch (details.pairingKind) {
        case 'confirm': {
            response.confirmed = confirm(`Do you want to connect to device ${details.deviceId}?`)
            break
        }
        case 'confirmPin': {
            response.confirmed = confirm(`Does the pin ${details.pin} match the pin displayed on device ${details.deviceId}?`)
            break
        }
        case 'providePin': {
            const pin = prompt(`Please provide a pin for ${details.deviceId}.`)
            if (pin) {
                response.pin = pin
                response.confirmed = true
            } else {
                response.confirmed = false
            }
            break
        }
    }

    // 渲染进程，发送蓝牙配对请求的结果
    bluetooth.pairingResponse(response)
})

// 渲染进程发送通知
const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'

const notify = new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
notify.onclick = () => {
    document.getElementById("output").style.color = 'red'
    document.getElementById("output").innerText = CLICK_MESSAGE
}

// 监听网络连接状态
const updateOnlineStatus = () => {
    document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()
