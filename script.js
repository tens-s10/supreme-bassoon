let win = 0;
let lose = 0;
let draw = 0;

function play(playerHand) {
  const hands = ['グー', 'チョキ', 'パー'];
  const cpuHand = hands[Math.floor(Math.random() * 3)];

  let resultText = '';

  if (playerHand === cpuHand) {
    draw++;
    resultText = 'あいこ！';
  } else if (
    (playerHand === 'グー' && cpuHand === 'チョキ') ||
    (playerHand === 'チョキ' && cpuHand === 'パー') ||
    (playerHand === 'パー' && cpuHand === 'グー')
  ) {
    win++;
    resultText = 'あなたの勝ち！';
  } else {
    lose++;
    resultText = 'あなたの負け…';
  }

  const total = win + lose + draw;
  const rate = Math.round((win / total) * 100);

  document.getElementById('result').textContent =
    `あなた：${playerHand} / 相手：${cpuHand} → ${resultText}`;

  document.getElementById('win').textContent = win;
  document.getElementById('lose').textContent = lose;
  document.getElementById('draw').textContent = draw;
  document.getElementById('rate').textContent = rate;
}
