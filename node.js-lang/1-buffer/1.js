/**
    Buffer 用来处理和存放二进制数据的缓冲区
    一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存
 */

// Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。
// 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

/**
ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
binary/latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
hex - 将每个字节编码为两个十六进制字符。
 */
const buf = Buffer.from('hj', 'ascii') // 创建一个包含 ascii 字节 [0x68, 0x6a] 的 Buffer。
console.log('[0]', buf)                     // <Buffer 68 6a>
console.log('[1]', buf.toString())          // hj
console.log('[2]', buf.toString('utf8'))    // hj
console.log('[3]', buf.toString('base64'))  // aGo=
console.log('[4]', buf.toString('binary'))  // hj
console.log('[5]', buf.toString('hex'))     // 686a

const buf1 = Buffer.alloc(10) // 创建一个长度为 10、且用 0 填充的 Buffer。
console.log('[6]', buf1, buf1.length) // <Buffer 00 00 00 00 00 00 00 00 00 00> 10

const buf2 = Buffer.alloc(10, 2) // 创建一个长度为 10、且用 0 填充的 Buffer。
console.log('[7]', buf2, buf2.length) // <Buffer 02 02 02 02 02 02 02 02 02 02> 10

const buf3 = Buffer.from([1, 2, 3]) // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
console.log('[8]', buf3, buf3.length) // <Buffer 01 02 03> 3

/**
    写入缓冲区
    返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
 */
console.log('[6]', buf3.write('Hi')) // 2
console.log('[6]', buf3, buf3.length) // <Buffer 48 69 03> 3

console.log('[7]', buf3.write('Hello')) // 3 最多写入Buffer预设长度的字符串
console.log('[7]', buf3, buf3.length) // <Buffer 48 65 6c> 3
