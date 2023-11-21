AOS.init();

//Feladat:
// 1. Random szám generálása
// 2. input mező beolvasása
// 3. input mező összehasonlítása a random számmal
// 4. Szöveg megváltoztatása ha nagyobb, kisebb, vagy egyenlő
// 5. Reset gomb nulláz mindent
let RandNum = Math.floor(Math.random() * 100 + 1);
console.log(RandNum);
let page = document.body;
let input = document.getElementById("guess");
console.log(typeof input);
greaterOrLess = {
  greaterThan: "Too high!",
  lowerThan: "Too low!",
  equal: "Correct!",
};
let check = document.getElementById("button");
let correctNum = document.getElementById("correctNumber");
console.log(check);
check.addEventListener("click", isEven);
let inputValue = 0;
let help = document.querySelector("#help");
let currentScore = document.querySelector("#currentScore");
let bestScore = document.querySelector("#bestScore");
function isEven() {

  inputValue = Number(input.value);
  if (!inputValue) {
    alert("Choose a number between 1 to 100!");
  } else if (inputValue > RandNum) {
    console.log(Number(bestScore.textContent));
    help.textContent = greaterOrLess.greaterThan;
    currentScore.innerText = Number(currentScore.innerText) - 1;
  } else if (inputValue < RandNum) {
    help.textContent = greaterOrLess.lowerThan;
    currentScore.innerText = Number(currentScore.innerText) - 1;
  } else {
    help.textContent = greaterOrLess.equal;
    console.log(help);
    document.body.style.background = "green";
    correctNum.textContent = inputValue;
    console.log(Number(currentScore.textContent));
    if (Number(currentScore.textContent) > Number(bestScore.textContent)) {
      console.log("ASDAS");
      bestScore.textContent = Number(currentScore.textContent);
    };
  }
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", resetApp);

function resetApp() {
  currentScore.innerText = "100";
  RandNum = Math.floor(Math.random() * 100 + 1);
  document.body.style.background = "#334";
  help.textContent = "Start the Game!";
  inputValue = "";
  input.value = inputValue;
  console.log(inputValue);
  correctNum.innerText = "?";
}
