const express = require('express')
const router = express.Router({
    caseSensitive: true, // 区分大小写
})

router.get('/', (req, res) => {
    res.send(`Home Page`)
})

router.get('/book/list', (req, res) => {
    console.log(req.body, req.query);

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(req.body)
})

router.all('/user', (req, res) => {
    res.send(`User Page ` + req.method)

    // User Page GET
    // User Page POST
})

module.exports = router
