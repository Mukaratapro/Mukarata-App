import Redis from "ioredis";

// Menggunakan variabel yang sudah terbukti jalan
const redis = new Redis(process.env.MUKARATA_REDIS_URL || process.env.REDIS_URL);

export default async function handler(req, res) {
  // Header CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method Not Allowed" });

  const { token, deviceId } = req.body;
  const appName = "Mukarata Pro V2.5"; // Harus sama dengan skrip aktivasi tadi

  if (!token) {
    return res.status(400).json({ success: false, message: "Token wajib diisi" });
  }

  try {
    const data = await redis.get(token);
    if (!data) return res.status(404).json({ success: false, message: "Token tidak ditemukan" });

    let tokenData = JSON.parse(data);

    // 1. Cek kecocokan Aplikasi
    if (tokenData.appName !== appName) {
      return res.status(403).json({ success: false, message: "Token ini bukan untuk aplikasi Mukarata" });
    }

    // 2. Logika Lock Device
    if (tokenData.deviceId && deviceId && tokenData.deviceId !== deviceId) {
      return res.status(403).json({ success: false, message: "Token sudah terpakai di perangkat lain!" });
    }

    // 3. Catat deviceId jika login pertama
    if (!tokenData.deviceId && deviceId) {
      tokenData.deviceId = deviceId;
      tokenData.status = "used";
      await redis.set(token, JSON.stringify(tokenData));
    }

    return res.status(200).json({
      success: true,
      message: "Verifikasi Berhasil",
      data: {
        email: tokenData.email,
        deviceId: tokenData.deviceId
      }
    });

  } catch (error) {
    console.error("Internal Error:", error);
    return res.status(500).json({ success: false, message: "Kesalahan Server" });
  }
}
