const Redis = require("ioredis");
const { Store } = require("koa-session2");
const redisConfig = {
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    prefix: 'sam:', //存诸前缀
    ttl: 60 * 60 * 23,  //过期时间
    family: 4,
    db: 0
}

class RedisStore extends Store {
  public redis
  constructor() {
    super();
    this.redis = new Redis(redisConfig);
  }

  async get(sid, ctx) {
    let data = await this.redis.get(`SESSION:${sid}`);
    return JSON.parse(data);
  }

  async set(session, { sid =  this.getID(24), maxAge = 1000000 } = {}, ctx) {
    try {
      // Use redis set EX to automatically drop expired sessions
      await this.redis.set(`SESSION:${sid}`, JSON.stringify(session), 'EX', maxAge / 1000);
    } catch (e) {}
    return sid;
  }

  async destroy(sid, ctx) {
    return await this.redis.del(`SESSION:${sid}`);
  }
}
// const newRedis = new RedisStore()

module.exports = RedisStore