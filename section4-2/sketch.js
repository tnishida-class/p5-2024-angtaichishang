//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw() {
  background(160, 192, 255);
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

  if (frameCount % 20 === 0) {
    const b = {
      x: random(width),
      y: random(height),
      size: random(10, 70),
      vx: random(-3, 3),
      vy: random(-3, 3),
    };
    balls.push(b);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
