const { Menu } = require('electron')

module.exports = function() {
    return Menu.buildFromTemplate([
        {
            label: '复制',
        },
        {
            label: '粘贴',
        },
    ])
}