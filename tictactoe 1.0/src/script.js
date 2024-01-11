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
let option = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (currentPlayer == "X") {
      cell.textContent = currentPlayer;
      option[index] = currentPlayer;
      currentPlayer = "O";
    } else {
      cell.textContent = currentPlayer;
      option[index] = currentPlayer;

      currentPlayer = "X";
    }
    const value = this.getAttribute("value");
    if (option[value] != "") {
      return;
    }
    const roundWin = false;
    for (let i = 0; i < winConditions.length; i++) {
      let condition = winConditions[i];
      let a = option[condition[0]];
      let b = option[condition[1]];
      let c = option[condition[2]];
      if (a == "" || b == "" || c == "") {
        continue;
      } else if (a == b && b == c) {
        roundWin = true;
        break;
      }
    }
    if (roundWin) {
      winStatus.textContent = `player ${currentPlayer} win!`;
    } else if (!option.includes("")) {
      winStatus.textContent = `draw!`;
    }
  });
});
