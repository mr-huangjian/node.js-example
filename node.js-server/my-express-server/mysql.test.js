const mysql = require('mysql')

/**
    createPool
    createConnection
 */
const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'my_db_1',
})

// conn.connect((err) => {
//     console.log(`connect ` + err.stack);
// })

conn.on('error', function(err) {
  console.log("[mysql error]",err);
});

conn.query('SELECT * FROM user', (err, data) => {
    console.log(err, data);
})
