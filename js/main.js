'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '凶', '末吉'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
// ↑同じ確率でランダムに結果を出したい時

// ↓確率を操作したい時
    const n = Math.random();
    if (n < 0.8) {
      btn.textContent = '大吉';  // 確率 5%
    } else if (n < 0.2) {
      btn.textContent = '中吉';  // 確率 15%
    } else {
      btn.textContent = '凶';  // 確率 80%
    }
  });
}