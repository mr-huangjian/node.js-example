
const obj = {
    name: 'huangjian',
    age: 20
}

console.time('counter')
console.dir(obj)
console.trace(obj)
console.error('发生了一个错误')
console.timeEnd('counter')
console.assert(true, '1.假的才输出')
console.assert(false, '2.假的才输出')
