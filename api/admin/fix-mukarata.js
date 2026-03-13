import Redis from "ioredis";

export default async function handler(req, res) {
  const { adminKey } = req.query;

  if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).send("Akses Ditolak!");
  }

  // Gunakan variabel yang ada di Vercel Mukarata Anda
  const url = process.env.MUKARATA_REDIS_URL || process.env.REDIS_URL;

  if (!url) {
    return res.status(500).send("Konfigurasi Database Belum Lengkap!");
  }

  try {
    const redis = new Redis(url);
    
    // Cari token stok
    const keys = await redis.keys("AISAH-*");
    let count = 0;

    if (keys.length === 0) {
      return res.status(404).send("Tidak ada token AISAH-* ditemukan.");
    }

    for (const key of keys) {
      const raw = await redis.get(key);
      let data = JSON.parse(raw || "{}");

      // Update identitas ke Mukarata
      await redis.set(key, JSON.stringify({
        ...data,
        appName: "Mukarata Pro V2.5",
        status: "active"
      }));
      count++;
    }

    res.status(200).send(`✅ SUKSES! ${count} Token Mukarata Aktif.`);
  } catch (err) {
    res.status(500).send("Gagal: " + err.message);
  }
}
