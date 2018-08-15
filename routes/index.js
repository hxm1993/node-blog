const router = require('koa-router')()

// router.get('/', async (ctx, next) => {
//   // await ctx.render('index', {
//   //   title: 'Hello Koa 2!'
//   // })
//   await ctx.render("index",{title:"hello koa"});
// })
router.get('/signin', async ctx => {
  ctx.body =  await ctx.render('test', {
      title: 'aaaaa',
  })
})
router.get('/string', async (ctx, next) => {
  ctx.body =  await ctx.render('mine', {
      title: 'mine',
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body =  await ctx.render('index', {
      title: 'index',
  })
})

module.exports = router
