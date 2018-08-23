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
        let sql = `select a.*, a.id as aid, b.*, b.id as userId from article a join user b on a.author = b.id where a.id = ${id}`;
        return db.query(sql);
    }
    static getComment(id) {
        let sql = `select p.*, u.*, u.id as userId from pinglun p join user u on p.uid = u.id  where p.aid = ${id}`;
        return db.query(sql);
    }
    static addComment(data) {
        let uid = data.userId;
        let aid = data.aid;
        let content = data.comment;
        let time = new Date().getTime();
        let sql = `insert into pinglun (uid, aid, content, time) value (${uid}, ${aid}, "${content}", ${time})`;
        console.log(sql)
        return db.query(sql);
    }
}

module.exports = Home;