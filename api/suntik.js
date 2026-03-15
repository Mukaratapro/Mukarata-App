const Redis = require('ioredis');
// Pastikan REDIS_URL di Vercel sudah benar (redis://:password@host:port)
const redis = new Redis(process.env.REDIS_URL);

export default async function handler(req, res) {
  try {
    // Kita buat 10 kelompok, masing-masing 100 token
    for (let batch = 0; batch < 10; batch++) {
      let data = {};
      for (let i = 0; i < 100; i++) {
        const id = Math.random().toString(36).substring(2, 9).toUpperCase();
        data[`MKRT-${id}`] = JSON.stringify({ 
          app: "mukarata", 
          status: "active", 
          deviceId: null 
        });
      }
      // Kirim 100 token sekaligus ke Redis
      await redis.mset(data);
    }
    
    return res.status(200).send("<h1>MANTEP! 1000 Token MKRT Masuk Semua.</h1>");
  } catch (e) {
    return res.status(500).send("Waduh Gagal: " + e.message);
  }
}
