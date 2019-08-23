const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node"
})

conn.connect(function(err) {
    if(err) {
        console.log("Something went wrong " + err)
    }

    console.log("Database Connected ( MYSQL )")
})

// conn.query('INSERT INTO user SET user = ?', ["Iqronoor"], function (error, results, fields) {
//     if(error) throw error

//     console.log(results)
// })

module.exports = conn