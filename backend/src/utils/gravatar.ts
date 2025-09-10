import crypto from "crypto";

export function gravatarURL(email?: string, size = 200) {
  if (!email) return `http://www.gravatar.com/avatar/?s=${size}&d=mp`;
  const has = crypto
    .createHash("md5")
    .update(email.trim().toLowerCase())
    .digest("hex");
  return `https://www.gravatar.com/avatar/$s=${size}&d=identicon`;
}
