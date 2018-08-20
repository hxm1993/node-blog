let modules = require("../modules/home");
var home = async (ctx, next) => {
    let article;
    let page = ctx.params.page;
    let pageSize = 3;
    let count = 0;
    await modules.getCount().then(data => {
        count = data[0].count;
    })
    await modules.find(page, pageSize).then((data) => {
        // console.log(data)
        article = data; 
    });
    ctx.body = await ctx.render('home', {
        title: 'home',
        content: article,
        totalPage: Math.ceil(count / pageSize) ,
        nowPage: page - 0
    })
}

var detail = async (ctx, next) => {
    let index = ctx.params.index;
    let detailData;
    let detailComment;
    await modules.findOnce(index).then((data) => {
        console.log('detail', data)
        detailData = data[0];
    })
    await modules.getComment(index).then((comment) => {
        detailComment = comment;
    })
    ctx.body = await ctx.render('detail', {
        detailData: detailData,
        detailComment: detailComment
    })
}

var postComment = async (ctx, next) => {
    let index = ctx.params.index;
    console.log("ctx!!!!!!!!!!!!!!!!!!!!!!!!!!!!", ctx.request.body);

    ctx.body = {
        code: 200,
        message: '评论成功'
    };
    
}

module.exports = {
    'GET /home/:page': home,
    'GET /detail/:index': detail,
    'POST /comment/:index': postComment
}