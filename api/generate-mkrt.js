const Redis = require('ioredis');

// Gunakan satu variabel REDIS_URL yang sudah berisi password:
// format: redis://:password@host:port
const redis = new Redis(process.env.REDIS_URL);

export default async function handler(req, res) {
  if (req.query.key !== 'MANXYOUD9191') return res.status(401).send('Kunci Salah');

  try {
    const pipeline = redis.pipeline();
    for (let i = 0; i < 1000; i++) {
      const id = Math.random().toString(36).substring(2, 10).toUpperCase();
      pipeline.set(`MKRT-${id}`, JSON.stringify({ app: "mukarata", status: "active", deviceId: null }));
    }
    await pipeline.exec();
    return res.status(200).send("<h1>Sukses! 1000 Token MKRT Aktif.</h1>");
  } catch (e) {
    return res.status(500).send("Gagal: " + e.message);
  }
}
