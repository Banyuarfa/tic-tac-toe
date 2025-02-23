const cells = document.querySelectorAll("section");
const winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const winStatus = document.querySelector("p");
let option = ["", "", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

const initializeGame = () => {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  running = true;
};

const cellClicked = (e) => {
  const cellIndex = e.target.getAttribute("cellIndex");
  console.log(cellIndex);
  if (option[cellIndex] != "" || !running) {
    return;
  }

  updateCell(e, cellIndex);
  checkWinner();
};

const updateCell = (e, cellIndex) => {
  option[cellIndex] = currentPlayer;
  e.target.textContent = currentPlayer;
};
const changePlayer = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  winStatus.textContent = `${currentPlayer} jalan`;
};

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = option[condition[0]];
    const cellB = option[condition[1]];
    const cellC = option[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    winStatus.textContent = `${currentPlayer} wins!`;
    running = false;
  } else if (!option.includes("")) {
    winStatus.textContent = `Draw!`;
    running = false;
  } else {
    changePlayer();
  }
}
initializeGame();
