const boxes = document.querySelectorAll(".box");
const gameScreen = document.querySelector(".game-screen");
const winningScreen = document.querySelector(".winning-screen");
const winMsg = document.querySelector(".win-msg");
const resetBtns = document.querySelectorAll(".reset-btn");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

for (let box of boxes) {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
}

for (let resetBtn of resetBtns) {
  resetBtn.addEventListener("click", () => {
    turnO = true;
    clearBtns();
    gameScreen.classList.remove("hide");
    winningScreen.classList.add("hide");
    console.clear();
  });
}

const disableBtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  gameScreen.classList.add("hide");
  winningScreen.classList.remove("hide");
  winMsg.innerText = `Congratulations! Winner is Player${winner}`;
};

const checkWinner = () => {
  for (let winPattern of winPatterns) {
    let pos1Val = boxes[winPattern[0]].innerText;
    let pos2Val = boxes[winPattern[1]].innerText;
    let pos3Val = boxes[winPattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        disableBtns();
        showWinner(pos1Val);
      }
    }
  }
};

const clearBtns = () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
};
