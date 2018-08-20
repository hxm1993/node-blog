let db = require("../lib/db");

class Home {
    static find(page, pageSize, callback) {
        let start = (page - 1) * pageSize;  
        let sql = `select * from article limit ${start}, ${pageSize}`;
        console.log(sql)
        return db.query(sql)
    }
    static getCount() {
        let sql = 'select count(id) as count from article';
        return db.query(sql);
    }
    static findOnce(id) {
        let sql = `select * from article where id = ${id}`;
        return db.query(sql);
    }
    static getComment(id) {
        let sql = `select * from pinglun as p join admin as a on p.uid = a.id  where aid = ${id}`;
        return db.query(sql);
    }
    static addComment() {
        let sql = "insert into pinglun value()"
    }
}

module.exports = Home;