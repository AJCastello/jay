export const uniKey = (num = 10) => {
  // if(num) return window.crypto.randomUUID();
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789";
  const newKey = Array(num)
    .fill("")
    .map((char) => {
      if(char) char = chars.charAt(Math.floor(Math.random() * chars.length))
    })
    .join("")
  return newKey;
}