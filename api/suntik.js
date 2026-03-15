export default async function handler(req, res) {
  // Langsung tembak ke Redis Cloud tanpa library ioredis
  const redisUrl = process.env.REDIS_URL; 
  
  try {
    for (let i = 0; i < 1000; i++) {
      const id = Math.random().toString(36).substring(2, 10).toUpperCase();
      const tokenKey = `MKRT-${id}`;
      const value = JSON.stringify({ app: "mukarata", status: "active" });

      // Gunakan Fetch API (Sudah ada di Vercel secara otomatis)
      await fetch(redisUrl, {
        method: 'POST',
        body: JSON.stringify(['SET', tokenKey, value])
      });
    }
    return res.status(200).send("1000 Token Masuk via Fetch!");
  } catch (e) {
    return res.status(500).send("Error: " + e.message);
  }
}
