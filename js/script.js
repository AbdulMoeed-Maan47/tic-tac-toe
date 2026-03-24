const boxes = document.querySelectorAll(".box");
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
      console.log("PlayerO played his move.");
      turnO = false;
    } else {
      box.innerText = "X";
      console.log("PlayerX played his move.");
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
}

const disableBtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let winPattern of winPatterns) {
    let pos0Val = boxes[winPattern[0]].innerText;
    let pos1Val = boxes[winPattern[1]].innerText;
    let pos2Val = boxes[winPattern[2]].innerText;

    if (pos0Val !== "" && pos1Val !== "" && pos2Val !== "") {
      if (pos0Val === pos1Val && pos1Val === pos2Val) {
        disableBtns();
        console.log(`Winner: Player${pos0Val}`);
      }
    }
  }
};
