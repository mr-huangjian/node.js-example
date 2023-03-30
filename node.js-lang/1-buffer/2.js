const buf = Buffer.alloc(26)

for (var i = 0; i < buf.length; i++) {
    buf[i] = 97 + i
}

// 从缓冲区读取数据
// <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76 77 78 79 7a>
console.log('[0]', buf)
console.log('[1]', buf.toString()) // abcdefghijklmnopqrstuvwxyz
console.log('[2]', buf.toString('ascii', 2, 3)) // c  [start, end)
console.log('[3]', buf.toString('utf8', 3)) // defghijklmnopqrstuvwxyz
