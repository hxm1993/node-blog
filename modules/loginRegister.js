let db = require("../lib/db");

class LoginRegister {
    static login(name) {
        let sql = `select * from user where username='${name}'`;
        return db.query(sql)
    }

    static getUsers() {
        let sql = "select username from user";
        return db.query(sql);
    }

    static addUser(user) {
        let sql = `insert into user (username, pwd) values('${user.name}', '${user.pswd}')`;
        return db.query(sql);
    }
}

module.exports = LoginRegister;