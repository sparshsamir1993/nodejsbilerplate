const redis = require("redis");
const client = redis.createClient({ url: process.env.REDIS_URL });
console.log(process.env.REDIS_URL);
module.exports = client;
