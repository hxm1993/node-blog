const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// var xtpl = require('xtpl');
const connnetion = require("./lib/db");
// const index = require('./routes/index')
// const users = require('./routes/users')
const controller = require("./controller")

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))


const xtpl = require('xtpl/lib/koa2')
    xtpl(app, {
        views:'./views'
    });

// app.use(async (ctx, next) => {
//     ctx.body = await ctx.render('test',{data:1});
// });

// app.use(xtpl(__dirname + '/views'))
// app.use(xtpl({
//   root: __dirname + '/views',
//   extname: 'xtpl',
//   commands: {}
// }))
// app.use(views(__dirname + '/views', {
//   extension: 'pug'
// }))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

app.use(controller())
// app.use(users.routes())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
