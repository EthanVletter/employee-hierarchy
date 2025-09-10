import crypto from "crypto";

export function gravatarUrl(email?: string, size = 200) {
  if (!email) {
    // return `http://www.gravatar.com/avatar/?s=${size}&d=mp`;
    return `http://www.gravatar.com/avatar/default`;
  }
  const hash = crypto
    .createHash("md5")
    .update(email.trim().toLowerCase())
    .digest("hex");
  //   return `https://www.gravatar.com/avatar/$s=${size}&d=identicon`;
  return `https://www.gravatar.com/avatar/${hash}`;
}
