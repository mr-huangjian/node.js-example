const os = require('os')

console.log('[0]', os.totalmem()) // 17179869184 (以整数的形式返回所有系统内存的字节数)
console.log('[1]', os.freemem()) // 724168704 (以整数的形式回空闲系统内存的字节数)
console.log('[2]', os.homedir()) // /Users/imac-pkg-5f
console.log('[3]', os.hostname()) // huangjian
console.log('[4]', os.networkInterfaces()) // en0[family=IPv4]
console.log('[5]', os.platform()) // darwin
console.log('[6]', os.release()) // 22.3.0
console.log('[7]', os.tmpdir()) // /var/folders/7l/jcqvp_pd4kqczr_c4tk6ytb80000gn/T
console.log('[8]', os.type()) // Darwin
console.log('[9]', os.userInfo()) // {"uid":501,"gid":20,"username":"imac-pkg-5f","homedir":"/Users/imac-pkg-5f","shell":"/bin/zsh"}
