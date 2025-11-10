// Original Game
let originalOne = document.querySelector("body > .original");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let step2 = document.querySelector(".step2");
let pPick = document.querySelector(".step2 .player .pick");
let cPick = document.querySelector(".step2 .computer .pick");
let cscissors = document.querySelector(".c .scissors");
let cpaper = document.querySelector(".c .paper");
let crock = document.querySelector(".c .rock");
let clizard = document.querySelector(".c .lizard");
let cspock = document.querySelector(".c .spock");
let pscissors = document.querySelector(".p .scissors");
let ppaper = document.querySelector(".p .paper");
let prock = document.querySelector(".p .rock");
let plizard = document.querySelector(".p .lizard");
let pspock = document.querySelector(".p .spock");
let score = document.querySelector(".score");
let logo = document.querySelector(".rps img");
let oRules = document.querySelector(".rules .original");
let bRules = document.querySelector(".rules .bonus");
let them = "o";
// rules Code

let rulesBtn = document.querySelector(".rules-btn");
let rulesWin = document.querySelector(".rules");
let rulesBD = document.querySelector(".backdrop");
let rulesOrg = document.querySelector(".rules .original");
let rulesClose = document.querySelector(".rules .head .x");

rulesBtn.onclick = function () {
  rulesWin.style.display = "flex";
  rulesBD.style.display = "flex";
};

rulesClose.onclick = function () {
  rulesWin.style.display = "none";
  rulesBD.style.display = "none";
};

// Player Choise original
let pChoiseO;
let OPlays = document.querySelectorAll("body > .original div");

OPlays.forEach((el) => {
  el.onclick = function () {
    swBtn.style.display = "none";
    pChoiseO = el.classList[0];
    console.log(pChoiseO);
    originalOne.style.display = "none";
    step2.style.display = "flex";
    switch (el.classList[0]) {
      case "rock":
        pPick.replaceWith(prock);
        break;
      case "paper":
        pPick.replaceWith(ppaper);
        break;
      case "scissors":
        pPick.replaceWith(pscissors);
        break;

      default:
        break;
    }
    playO();
  };
});

// Computer Choise original

let resultWin = document.querySelector(".result");
let result = document.querySelector(".result h1");
let cChoiseO;
function playO() {
  cChoiseO = (Math.random() * (3 - 1) + 1).toFixed(0);
  setTimeout(() => {
    switch (cChoiseO) {
      case "1":
        cPick.replaceWith(crock);
        if (pChoiseO === "rock") {
          result.textContent = "TIE";
        } else if (pChoiseO === "paper") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        } else {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        }
        break;
      case "2":
        cPick.replaceWith(cpaper);
        if (pChoiseO === "rock") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        } else if (pChoiseO === "paper") {
          result.textContent = "TIE";
        } else {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        }
        break;
      case "3":
        cPick.replaceWith(cscissors);
        if (pChoiseO === "rock") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        } else if (pChoiseO === "paper") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        } else {
          result.textContent = "TIE";
        }
        break;
    }
    resultWin.style.display = "flex";
  }, 2000);
}

// Special Game
let swBtn = document.querySelector(".switch");
let bonusOne = document.querySelector("body > .bonus");
let BPlays = document.querySelectorAll("body > .bonus div");
swBtn.onclick = function () {
  score.textContent = 0;
  if (them === "b") {
    logo.src = "./images/logo.svg";
    bonusOne.style.display = "none";
    originalOne.style.display = "grid";
    oRules.style.display = "flex";
    bRules.style.display = "none";
    them = "o";
  } else {
    logo.src = "./images/logo-bonus.svg";
    bonusOne.style.display = "block";
    originalOne.style.display = "none";
    oRules.style.display = "none";
    bRules.style.display = "flex";
    them = "b";
  }
};
let pChoiseB;
BPlays.forEach((el) => {
  el.onclick = function () {
    swBtn.style.display = "none";
    pChoiseB = el.classList[0];
    console.log(pChoiseB);
    bonusOne.style.display = "none";
    step2.style.display = "flex";
    switch (el.classList[0]) {
      case "rock":
        pPick.replaceWith(prock);
        break;
      case "paper":
        pPick.replaceWith(ppaper);
        break;
      case "scissors":
        pPick.replaceWith(pscissors);
        break;
      case "lizard":
        pPick.replaceWith(plizard);
        break;
      case "spock":
        pPick.replaceWith(pspock);
        break;
      default:
        break;
    }
    playB();
  };
});

let cChoiseB;
function playB() {
  cChoiseB = (Math.random() * (5 - 1) + 1).toFixed(0);
  setTimeout(() => {
    switch (cChoiseB) {
      case "1":
        cPick.replaceWith(crock);
        if (pChoiseB === "rock") {
          result.textContent = "TIE";
        } else if (pChoiseB === "paper") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        } else if (pChoiseB === "scissors") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        } else if (pChoiseB === "lizard") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        } else if (pChoiseB === "spock") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        }
        break;
      case "2":
        cPick.replaceWith(cpaper);
        if (pChoiseB === "rock") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        } else if (pChoiseB === "paper") {
          result.textContent = "TIE";
        } else if (pChoiseB === "scissors") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        } else if (pChoiseB === "lizard") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        } else if (pChoiseB === "spock") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        }
        break;
      case "3":
        cPick.replaceWith(cscissors);
        if (pChoiseB === "rock") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        } else if (pChoiseB === "paper") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        } else if (pChoiseB === "scissors") {
          result.textContent = "TIE";
        } else if (pChoiseB === "lizard") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        } else if (pChoiseB === "spock") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        }
        break;
      case "4":
        cPick.replaceWith(clizard);
        if (pChoiseB === "rock") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        } else if (pChoiseB === "paper") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        } else if (pChoiseB === "scissors") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        } else if (pChoiseB === "lizard") {
          result.textContent = "TIE";
        } else if (pChoiseB === "spock") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        }
        break;
      case "5":
        cPick.replaceWith(cspock);
        if (pChoiseB === "rock") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        } else if (pChoiseB === "paper") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        } else if (pChoiseB === "scissors") {
          result.textContent = "LOSE";
          score.textContent = +score.textContent - 1;
        } else if (pChoiseB === "lizard") {
          result.textContent = "WIN";
          score.textContent = +score.textContent + 1;
        } else if (pChoiseB === "spock") {
          result.textContent = "TIE";
        }
        break;
    }
    resultWin.style.display = "flex";
  }, 2000);
}

let again = document.querySelector(".again");

again.onclick = function () {
  swBtn.style.display = "block";
  if (them === "b") {
    bonusOne.style.display = "block";
    switch (cChoiseB) {
      case "1":
        crock.replaceWith(cPick);
        break;
      case "2":
        cpaper.replaceWith(cPick);
        break;
      case "3":
        cscissors.replaceWith(cPick);
        break;
      case "4":
        clizard.replaceWith(cPick);
        break;
      case "5":
        cspock.replaceWith(cPick);
        break;
    }
    switch (pChoiseB) {
      case "rock":
        prock.replaceWith(pPick);
        break;
      case "paper":
        ppaper.replaceWith(pPick);
        break;
      case "scissors":
        pscissors.replaceWith(pPick);
        break;
      case "lizard":
        plizard.replaceWith(pPick);
        break;
      case "spock":
        pspock.replaceWith(pPick);
        break;
    }
  } else {
    originalOne.style.display = "grid";
    switch (cChoiseO) {
      case "1":
        crock.replaceWith(cPick);
        break;
      case "2":
        cpaper.replaceWith(cPick);
        break;
      case "3":
        cscissors.replaceWith(cPick);
        break;
    }
    switch (pChoiseO) {
      case "rock":
        prock.replaceWith(pPick);
        break;
      case "paper":
        ppaper.replaceWith(pPick);
        break;
      case "scissors":
        pscissors.replaceWith(pPick);
        break;
    }
  }
  step2.style.display = "none";
  resultWin.style.display = "none";
};
