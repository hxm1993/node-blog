let modules = require("../modules/home");
var home = async (ctx, next) => {
    console.log("-------------------------")
    let news = modules.getNews()
    console.log(news)
    news.then((json) => {
        console.log(json)
    })
    ctx.body =  await ctx.render('home', {
        title: 'home',
    })
}

module.exports = {
    'GET /': home
}