const boxes = document.querySelectorAll(".box");
const gameScreen = document.querySelector(".game-screen");
const winningScreen = document.querySelector(".winning-screen");
const winMsg = document.querySelector(".win-msg");
const resetBtns = document.querySelectorAll(".reset-btn");
let turnO = true;
let clickedCount = 0;
const colorO = "#b0413e";
const colorX = "#3157c9";

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

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = colorO;
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = colorX;
      turnO = true;
    }
    clickedCount++;
    box.disabled = true;

    checkWinner();
  });
});

resetBtns.forEach((resetBtn) => {
  resetBtn.addEventListener("click", () => {
    turnO = true;
    clickedCount = 0;
    clearBtns();
    gameScreen.classList.remove("hide");
    winningScreen.classList.add("hide");
    console.clear();
  });
});

const disableBtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner, color) => {
  gameScreen.classList.add("hide");
  winningScreen.classList.remove("hide");
  winMsg.innerHTML = `Congratulations! Winner is Player<spam style='color:${color}'>${winner}</spam>`;
};

const showDraw = () => {
  gameScreen.classList.add("hide");
  winningScreen.classList.remove("hide");
  winMsg.innerText = `It's a Draw!`;
};

const checkWinner = () => {
  let winner = null;
  for (let winPattern of winPatterns) {
    let pos1Val = boxes[winPattern[0]].innerText;
    let pos2Val = boxes[winPattern[1]].innerText;
    let pos3Val = boxes[winPattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        winner = pos1Val;
        let color = winner === "O" ? colorO : colorX;
        disableBtns();
        showWinner(winner, color);
      }
    }
  }
  if (!winner && clickedCount === 9) {
    showDraw();
  }
};

const clearBtns = () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
};
