const letters = "qwertyuiopasdfghjklzxcvbnm";
const lettersContainer = document.querySelector(".row .letters");
const arrayLetters = Array.from(letters);
let drawbox = document.querySelector(".draw-box");
let gamecontainer = document.querySelector(".the-game");
arrayLetters.forEach((letter) => {
  let span = document.createElement("span");
  let text = document.createTextNode(letter);
  span.className = "letter-box";
  span.appendChild(text);
  lettersContainer.appendChild(span);
});

//randomly object

const allwords = {
  Programming: [
    "html",
    "css",
    "Javascript",
    "c#",
    "c++",
    "python",
    "react",
    "saas",
    "angular",
    "Bootstrap",
  ],
  Movies: [
    "inception",
    "Us",
    "quite Place",
    "Peaky blinders",
    "prison Break",
    "Bird box",
    "black box",
  ],
  countries: [
    "Egypt",
    "Qatar",
    "palestine",
    "algeria",
    "moroccoo",
    "Oman",
    "syria",
  ],
  people: [
    "Mark zuckerberg",
    "andrew tate",
    "obama",
    "Leonardo diCaprio",
    "Adele",
    "Tom cruise",
    "brad pitt",
    "albert einstein",
  ],
};

let allKeys = Object.keys(allwords);
let randompropNumber = Math.floor(Math.random() * allKeys.length);
let randompropname = allKeys[randompropNumber];
let randompropvalue = allwords[randompropname];
let valueOfrandomProp =
  randompropvalue[Math.floor(Math.random() * randompropvalue.length)];
document.querySelector(".game-info .category span").innerHTML = randompropname;

const guesscontainer = document.querySelector(".container .guess-letters");

let wordArray = Array.from(valueOfrandomProp);
wordArray.forEach((letter) => {
  let emptyspan = document.createElement("span");
  if (letter === " ") {
    emptyspan.className = "with-space";
  }

  guesscontainer.appendChild(emptyspan);
});
//gues word span
let guessSpans = document.querySelectorAll(".container .guess-letters span");
//set status
let wrongAttempt = 0;
document.addEventListener("click", (e) => {
  let thestatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let clickedLetter = e.target.innerHTML.toLowerCase();
    wordArray.forEach((letter, letterindex) => {
      if (clickedLetter == letter.toLowerCase()) {
        thestatus = true;

        guessSpans.forEach((span, spanIndex) => {
          if (letterindex == spanIndex) {
            span.innerHTML = letter;
          }
        });
      }
    });
    if (thestatus !== true) {
      wrongAttempt++;
      drawbox.classList.add(`wrong-${wrongAttempt}`);
      document.querySelector("#fail").play();
      if (wrongAttempt === 8) {
        endgame();
      }
    } else {
      document.querySelector("#success").play();
    }
  }
});
function endgame() {
  let div = document.createElement("div");
  div.setAttribute("class", "fail");
  let txt = document.createTextNode(
    `Game over
          The word is (${valueOfrandomProp})`
  );
  div.appendChild(txt);
  gamecontainer.appendChild(div);
  lettersContainer.classList.add("disable");
}
