import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);

function generateToken() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let token = "MKRT-";
  for (let i = 0; i < 12; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

export default async function handler(req, res) {

  const { key } = req.query;

  if (key !== "MANXYOUD9191") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  try {

    let tokens = [];

    for (let i = 0; i < 1000; i++) {

      const token = generateToken();

      await redis.set(token, JSON.stringify({
        email: null,
        status: "unused",
        createdAt: new Date().toISOString()
      }));

      tokens.push(token);
    }

    return res.status(200).json({
      success: true,
      total: tokens.length
    });

  } catch (err) {

    console.error(err);

    return res.status(500).json({
      error: err.message
    });
  }

}
