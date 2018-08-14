var about = async (ctx, next) => {
    ctx.body = await ctx.render("about", {
        title: "about"
    })
}

module.exports = {
    'GET /about' : about
}