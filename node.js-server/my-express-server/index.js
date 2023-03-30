const path = require('path')
const express = require('express')
const router = require('./src/router')

const app = express()
const port = 80

app.use(express.json())
app.use(express.urlencoded())
app.use(express('cors'))
app.use('/static', express.static('public'))
app.use('/api', router)
app.listen(port, (err) => {
    if (err) console.error(err)
    console.log(`Server listening on port ${port}`)
})
