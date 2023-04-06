const exec = (cmd) => require('child_process').execSync(cmd).toString().trim()

// 获取 Node 版本
const node_version = process.version
console.log('[1]', node_version) // v19.8.1
console.log('[2]',require('semver').clean(node_version)) // 19.8.1

console.log('[3]',process.versions.node) // 19.8.1
console.log('[4]',exec('node -v')) // v19.8.1

// 获取 Npm 版本
console.log('[5]',exec('npm -v')) // 9.5.1
