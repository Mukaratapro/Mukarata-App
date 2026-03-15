// api/generate-mkrt.js
const Redis = require('ioredis');
const redis = new Redis(`redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_URL}:${process.env.REDIS_PORT}`);

export default async function handler(req, res) {
  // Samakan dengan URL yang Anda buat tadi
  const { key } = req.query;
  if (key !== 'MANXYOUD9191') {
    return res.status(401).json({ error: 'Kunci Salah!' });
  }

  try {
    const pipeline = redis.pipeline();
    // Kita buat 1000 token cadangan
    for (let i = 1; i <= 1000; i++) {
      const randomID = Math.random().toString(36).substring(2, 10).toUpperCase();
      const tokenKey = `MKRT-${randomID}`;

      pipeline.set(tokenKey, JSON.stringify({
        app: "mukarata",
        status: "active",
        deviceId: null,
        createdAt: new Date().toISOString()
      }));
    }

    await pipeline.exec();
    return res.status(200).send("<h1>Sukses! 1000 Token MKRT telah ditambahkan ke Redis Cloud.</h1>");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
