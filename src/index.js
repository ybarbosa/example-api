const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

router.get('/status', async (ctx) => {
  ctx.status = 200
  ctx.body = { ok: true }
})

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(process.env.PORT || 3000, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`)
  })
