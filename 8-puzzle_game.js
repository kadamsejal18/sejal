let board = [1,2,3,4,5,6,7,null,8];
const goal = [1,2,3,4,5,6,7,8,null];
let userMoves = 0;
let optimalPath = [];
let currentBoardDiv = document.getElementById("board");

function renderBoard() {
  currentBoardDiv.innerHTML = "";
  board.forEach((tile, i) => {
    const div = document.createElement("div");
    div.className = "tile";
    if (tile === null) div.classList.add("empty");
    else {
      div.textContent = tile;
      div.addEventListener("click", () => moveTile(i));
    }
    currentBoardDiv.appendChild(div);
  });
}

function shuffleBoard() {
  do {
    board = [...goal];
    for (let i = board.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [board[i], board[j]] = [board[j], board[i]];
    }
  } while (!isSolvable(board));
}

function isSolvable(puzzle) {
  const arr = puzzle.filter(n => n !== null);
  let inv = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) inv++;
    }
  }
  return inv % 2 === 0;
}

function moveTile(index) {
  const empty = board.indexOf(null);
  const valid = [index - 1, index + 1, index - 3, index + 3].includes(empty) &&
    Math.abs((index % 3) - (empty % 3)) + Math.abs(Math.floor(index / 3) - Math.floor(empty / 3)) === 1;
  if (valid) {
    [board[index], board[empty]] = [board[empty], board[index]];
    userMoves++;
    document.getElementById("moveCount").textContent = userMoves;
    renderBoard();
    if (board.toString() === goal.toString()) {
      document.getElementById("result").textContent =
        `🎉 You won!\nYour Moves: ${userMoves}\nOptimal Moves: ${optimalPath.length}`;
    }
  }
}

function solveWithBFS(start) {
  const queue = [{ state: start, path: [] }];
  const visited = new Set();
  while (queue.length) {
    const { state, path } = queue.shift();
    const key = state.join(",");
    if (visited.has(key)) continue;
    visited.add(key);
    if (state.toString() === goal.toString()) return path;
    const empty = state.indexOf(null);
    for (let move of [-1, 1, -3, 3]) {
      const newIdx = empty + move;
      if (isValidMove(empty, newIdx)) {
        const newState = [...state];
        [newState[empty], newState[newIdx]] = [newState[newIdx], newState[empty]];
        queue.push({ state: newState, path: [...path, newState[newIdx]] });
      }
    }
  }
  return [];
}

function isValidMove(from, to) {
  if (to < 0 || to > 8) return false;
  const fr = Math.floor(from / 3), fc = from % 3;
  const tr = Math.floor(to / 3), tc = to % 3;
  return Math.abs(fr - tr) + Math.abs(fc - tc) === 1;
}

function restartGame() {
  shuffleBoard();
  userMoves = 0;
  document.getElementById("moveCount").textContent = userMoves;
  optimalPath = solveWithBFS([...board]);
  renderBoard();
  document.getElementById("result").textContent = "";
}

function showHint() {
  if (!optimalPath.length) return;
  const nextMove = optimalPath[0];
  const idx = board.indexOf(nextMove);
  moveTile(idx);
  optimalPath.shift();
}

restartGame();
