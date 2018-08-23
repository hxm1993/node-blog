let modules = require("../modules/loginRegister");

var loginPage = async (ctx, next) => {
    
    ctx.body = await ctx.render("login")
}

var loginCon = async (ctx, next) => {
    console.log(ctx.body)
    let username = ctx.request.body.username;
    let pswd = ctx.request.body.password;
    let result;
    await modules.login(username).then(res => {
        result = res[0];
    })
    if(result.pwd === pswd) {
        ctx.body = {
            username: username
        }
    }
}

var registerPage = async (ctx, next) => {
    ctx.body =await ctx.render("register")
}

var getUsers = async (ctx, next) => {
    let users;
    await modules.getUsers().then(res => {
        users = res;
    })
    ctx.body = {users}
}
var registerCon = async (ctx, next) => {
    let user = {name:ctx.request.body.username, pswd: ctx.request.body.pswd };
    let result;
    await modules.addUser(user).then(res => {
        console.log(res)
        result = res;
    })
    ctx.body = {result}
}

module.exports = {
    "GET /login": loginPage,
    "POST /login/submit": loginCon,
    "GET /register": registerPage,
    "POST /register/submit": registerCon,
    "GET /users": getUsers
}