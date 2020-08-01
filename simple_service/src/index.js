const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const logger = require('koa-logger');
const config = require('config');
const moment = require('moment');
const app = new Koa();

const router = new Router();
// const router = new Router({ prefix: '/api' });

router.get('/', ctx => {
  ctx.body = process.pid;
});

router.get('/message', ctx => {
  ctx.body = { message: `hello docker-compose, ${moment().format('HH:mm:ss')}` };
})

app
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port);