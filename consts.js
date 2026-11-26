const secret = process.env.JWT_SECRET;
if (!secret) throw new Error("JWT_SECRET is required");
module.exports.SECRET = secret;
module.exports.MAX_AGE = 3 * 24 * 60 * 60;
