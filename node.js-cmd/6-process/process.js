
console.log('[1]', process.cwd()) // 返回当前工作目录 CurrentWorkDir
try {
    process.chdir('/tmp') // 变更进程的当前工作目录
    console.log(`New directory: ${process.cwd()}`)
} catch (err) {
    console.error(`chdir: ${err}`)
}

console.log('[2]', process.env)

// 在process.env中新增一个属性，会将属性值转换成字符串
process.env.myname = 'huangjian'
console.log('[3]', process.env.myname)
console.log('[4]', process.platform) // darwin
console.log('[5]', process.arch) // x64
console.log('[6]', process.title) // node
console.log('[7]', process.version) // v17.8.0
console.log('[8]', process.versions)
console.log('[9]', process.memoryUsage())
console.log('[10]', process.pid)
console.log('[11]', process.execPath)

process.on('exit', (code) => {
    console.log(`即将退出，退出码：${code}`)
})
process.on('SIGHUP', () => {
    console.log('Got SIGHUP signal.')
})

setTimeout(() => {
    console.log('Exiting...')
    process.exit(1)
}, 3000);

process.kill(process.pid, 'SIGHUP')

/**
    process.kill(pid[, signal])
 */
