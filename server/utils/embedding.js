function fakeEmbedding(text) {
  const arr = new Array(5).fill(0);
  for (let i = 0; i < text.length; i++) {
    arr[i % 5] += text.charCodeAt(i);
  }
  return arr.map((n) => n / text.length);
}

module.exports = { fakeEmbedding };
