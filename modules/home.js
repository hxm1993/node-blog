let {mysql} = require("../lib/db");
exports.getNews = async () => {
    // await mysql.query("select * from user", function(err, result) {
    //     return result;
    // })
    let promise = new Promise(function(resolve, reject) {
        mysql.query("select * from user", (err, result) => {
            if(err) {
                console.log(err)
                reject(err)
            }else {
                // console.log(result)
                resolve(result);
            }
        })
    })
    return promise;
}
