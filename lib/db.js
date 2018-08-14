var mysql = require("mysql");
var pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog',
    port: 3306
})
pool.connect()
// pool.query("select * from user", function(err, result) {
//     if(err) {
//         console.log(err)
//     }else {
//         console.log(result)
//     }
// })
// let _connection;
// pool.getConnection((err, connection) => {
//     if(err) {
//         console.log("数据库连接失败！");
//         return;
//     }
//     _connection = connection;
// })

module.exports = {
    mysql: pool
};