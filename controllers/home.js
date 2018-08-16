let modules = require("../modules/home");
var home = async (ctx, next) => {
    console.log("-------------------------")
    console.log(ctx.params.page)
    let article;
    let page = ctx.params.page;
    let pageSize = 3;
    await modules.find(page, pageSize).then((data) => {
        // console.log(data)
        article = data; 
    });
    ctx.body = await ctx.render('home', {
        title: 'home',
        content: article,
        
    })
}

module.exports = {
    'GET /home/:page': home
}