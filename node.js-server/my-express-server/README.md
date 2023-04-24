
# 什么是跨域？
- 同源策略是指浏览器访问资源的**协议**、**域名**、**端口**都要相同
- 跨域是指浏览器由于同源策略，对不符合同源策略的访问进行跨域限制
- [跨源资源共享（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)


# body-parser.urlencoded.extended

Postman / Body / x-www-form-urlencoded
movie[_id] = 100001
movie[title] = 霸王别姬

当 `app.use(express.urlencoded())` 或 `app.use(express.urlencoded({ extended: true }))`，返回内容为
```json
{
    "movie": {
        "_id": "100001",
        "title": "霸王别姬"
    }
}
```

当 `app.use(express.urlencoded({ extended: false }))`，返回内容为
```json
{
    "movie[_id]": "100001",
    "movie[title]": "霸王别姬"
}
```

## mysql

[mysql VS mysql2](https://blog.csdn.net/conquer_galaxy/article/details/129740614)


mysql2
```js
const pool = mysql.createPool({})
const db = pool.promise()

try {
	const [rows] = await db.query('sql')
}
```

