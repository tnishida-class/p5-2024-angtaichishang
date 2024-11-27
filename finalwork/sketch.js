// 最終課題を制作しよう

let squareSize, startX, startY;
let pieces = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  calculateBoardParameters();
  setInterval(randomizePiece, 1000);
}

function draw() {
  background(255);
  drawBoard();
  drawPieces();
}

function drawBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      fill(200);
      stroke(0);
      rect(
        startX + i * squareSize,
        startY + j * squareSize,
        squareSize,
        squareSize
      );
    }
  }
}

function drawPieces() {
  for (let piece of pieces) {
    fill(piece.color);
    noStroke();
    ellipse(
      startX + piece.x * squareSize + squareSize / 2,
      startY + piece.y * squareSize + squareSize / 2,
      squareSize * 0.7
    );
  }
}

function randomizePiece() {
  let x = Math.floor(Math.random() * 8);
  let y = Math.floor(Math.random() * 8);
  let color = Math.random() < 0.5 ? 255 : 0;
  pieces.push({ x, y, color }); // 配置された駒をリストに追加
}

function calculateBoardParameters() {
  let gridSize = windowHeight * 0.85;
  squareSize = gridSize / 8;
  startX = (windowWidth - gridSize) / 2;
  startY = (windowHeight - gridSize) / 2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateBoardParameters();
}
