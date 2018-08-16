let db = require("../lib/db");

class Home {
    static find(page, pageSize, callback) {
        console.log(page)
        let start = (page - 1) * pageSize;
        
        let sql = `select * from article limit ${start}, ${pageSize}`;
        console.log(sql)
        return db.query(sql)
    }
}

module.exports = Home;