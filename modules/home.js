let db = require("../lib/db");

class Home {
    static find(callback) {
        let sql = "select * from user";
        return db.query(sql)
    }
}

module.exports = Home;