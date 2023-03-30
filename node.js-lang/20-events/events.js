
/**
    Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
    Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件，
    一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。
 */

const events = require('events')

const ev = new events.EventEmitter()

ev.on('data', (name, age) => {
    console.log(`[1] recv data:`, name, age)
})

ev.addListener('data', (name, age) => {
    console.log(`[2] recv data:`, name, age)
})

ev.emit('data', 'huangjian', 20)

/**
    EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
    当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
    我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。
 */
setTimeout(function () {
    ev.emit('error')
}, 1000 * 3)

ev.on('error', (err) => {
    console.log(`[ERR]`, err)
})

/**
    removeListener(event, listener)     listener 为非匿名函数
    removeAllListeners([event])
 */

/**
    继承 EventEmitter

    大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
    为什么要这样做呢？原因有两点：
        首先，具有某个实体功能的对象实现事件符合语义，事件的监听和发生应该是一个对象的方法。
        其次 JavaScript 的对象机制是基于原型的，支持部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。
 */
