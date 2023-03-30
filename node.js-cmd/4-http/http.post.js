const http = require('http')
const querystring = require('querystring')

let postData = querystring.stringify({
    's': 'stest',
    'i': 'itest2',
})

// http://www.metools.info/code/post278.html

let options = {
    hostname: 'coolaf.com',
    port: 80,
    path: '/tool/params',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

let req = http.request(options, (res) =>{
    res.setEncoding('utf8')

    let data = ''
    res.on('data', (chunk) => {
        data += chunk
    })
    res.on('end', () => {
        console.log(`data: `, data)
    })
})

req.on('error', (err) => {
    console.error(`Error: ${err.message}`)
})

req.write(postData)
req.end()
