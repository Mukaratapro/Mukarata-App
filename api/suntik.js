const Redis = require('ioredis');

// Kita pecah manual agar tidak error credentials
const redis = new Redis({
  host: "redis-15667.c11.us-east-1-2.ec2.cloud.redislabs.com",
  port: 15667,
  password: "ISIPASSWORDMU_DISINI", // Ganti dengan password asli Anda
  retryStrategy: (times) => Math.min(times * 50, 2000)
});

export default async function handler(req, res) {
  if (req.query.key !== 'MANXYOUD9191') return res.status(401).send('Kunci Salah');

  try {
    const pipeline = redis.pipeline();
    
    for (let i = 0; i < 1000; i++) {
      const id = Math.random().toString(36).substring(2, 9).toUpperCase();
      pipeline.set(`MKRT-${id}`, JSON.stringify({ 
        app: "mukarata", 
        status: "active", 
        deviceId: null 
      }));
    }

    await pipeline.exec();
    return res.status(200).send("<h1>MANTEP! 1000 Token MKRT Masuk.</h1>");
  } catch (e) {
    return res.status(500).send("Gagal total: " + e.message);
  }
}
