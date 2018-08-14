var contact = async (ctx, next) => {
    ctx.body = await ctx.render("contact", {
        title: 'contact'
    })
}

module.exports = {
    "GET /contact" : contact
}