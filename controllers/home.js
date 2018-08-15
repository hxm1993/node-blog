let modules = require("../modules/home");
var home = async (ctx, next) => {
    console.log("-------------------------")
    let testContent;
    await modules.find().then((data) => {
        console.log(data)
        testContent = data; 
    });
    ctx.body = await ctx.render('home', {
        title: 'home',
        content: testContent
    })
}

module.exports = {
    'GET /': home
}