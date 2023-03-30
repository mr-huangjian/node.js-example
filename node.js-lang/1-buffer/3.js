const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5])

const json = JSON.stringify(buf)
console.log(json) // {"type":"Buffer","data":[1,2,3,4,5]}

const copy = JSON.parse(json, (k, v) => {
    console.log('parse', k, v)
    return v && v.type == 'Buffer' ? Buffer.from(v) : v
})
console.log(copy) // <Buffer 01 02 03 04 05>
