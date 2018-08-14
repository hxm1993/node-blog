var post = async (ctx, next) => {
    ctx.body = ctx.render("post", {
        title: "post"
    })
}

module.exports = {
    "GET /post" : post
}