let battleBoardArray = ["-", "-"];
let joinArray;
let startingSoldiers = 0;
let startingHorsemen = 0;
let startingArchers = 0;
let soldiers = 0;
let horsemen = 0;
let archers = 0;

let startingDefenders = 0;
let defenders = 0;
let defenderHorsemen = 0;
let defenderArchers = 0;
let canWar = false;
let attackerWin = false;
let defenderWin = false;

let battle = false;
let joust = false;
let archerBattle = false;
let throneBattle = false;
let tyrantBattle = false;
let unrestBattle = false;
let invadersBattle = false;

let battleSpeed = 1000;
//1000
let battleBoardSize = 12;
//battleBoardSize should be multiples of 12

let chanceOfDeath;
let defenderChanceOfDeath;

let archersOnBattlefield = 0;
let defenderArchersOnBattlefield = 0;

const declareWinner = document.getElementById("declareWinner");

const soldiersElement = document.getElementById("soldiers");
//const soldiersBtnElement = document.getElementById('soldiersBtn')

const horsemenElement = document.getElementById("horsemen");
//const horsemenBtnElement = document.getElementById('horsemenBtn')

const archersElement = document.getElementById("archers");
//const archersBtnElement = document.getElementById('archersBtn')

const battleBoardArrayElement = document.getElementById("battleBoardArray");

const defendersElement = document.getElementById("defenders");
const defendersBtnElement = document.getElementById("defendersBtn");

const defenderHorsemenElement = document.getElementById("defenderHorsemen");
const defenderHorsemenBtnElement = document.getElementById(
  "defenderHorsemenBtn"
);

const defenderArchersElement = document.getElementById("defenderArchers");
const defenderArchersBtnElement = document.getElementById("defenderArchersBtn");

const goToWarBtnElement = document.getElementById("goToWarBtn");

function startGame() {
  declareWinner.innerText = " ";
  setUpBattleBoard();

  // soldiersElement.innerText = soldiers
  // horsemenElement.innerText = horsemen
  // archersElement.innerText = archers

  defendersElement.innerText = defenders;
  defenderHorsemenElement.innerText = defenderHorsemen;
  defenderArchersElement.innerText = defenderArchers;

  colorBattleBoard();
  // let joinArray = battleBoardArray.join('')
  // battleBoardArrayElement.innerText = joinArray

  // button set up

  defendersBtnElement.addEventListener("click", () => {
    for (let i = 0; i < battleBoardSize; i += 12) {
      if (battleBoardArray[i] != "日") {
        if (defenders > 0) {
          battleBoardArray[i] = "日";
          colorBattleBoard();
          // let joinArray = battleBoardArray.join('')
          // battleBoardArrayElement.innerText = joinArray
          defenders -= 1;
          defendersElement.innerText = defenders;
        } else {
          defendersBtnElement.disabled = true;
        }
      }
    }
  });
  defenderHorsemenBtnElement.addEventListener("click", () => {
    for (let i = 0; i < battleBoardSize; i += 12) {
      if (battleBoardArray[i] != "点") {
        if (defenderHorsemen > 0) {
          battleBoardArray[i] = "点";
          colorBattleBoard();
          // let joinArray = battleBoardArray.join('')
          // battleBoardArrayElement.innerText = joinArray
          defenderHorsemen -= 1;
          defenderHorsemenElement.innerText = defenderHorsemen;
        } else {
          defenderHorsemenBtnElement.disabled = true;
        }
      }
    }
  });
  defenderArchersBtnElement.addEventListener("click", () => {
    for (let i = 0; i < battleBoardSize; i += 12) {
      if (battleBoardArray[i] != "只") {
        if (defenderArchers > 0) {
          battleBoardArray[i] = "只";
          colorBattleBoard();
          // let joinArray = battleBoardArray.join('')
          // battleBoardArrayElement.innerText = joinArray
          defenderArchers -= 1;
          defenderArchersElement.innerText = defenderArchers;
        } else {
          defenderArchersBtnElement.disabled = true;
        }
      }
    }
  });

  goToWarBtnElement.addEventListener("click", () => {
    declareWinner.innerText = "Attack!!!";
    canWar = false;
    goToWarBtnElement.disabled = true;
    var battleTimer = setInterval(function () {
      for (i = battleBoardArray.length; i >= 0; i--) {
        // check for defender win:
        if (
          (i == 11 || i == 23 || i == 35 || i == 47 || i == 59 || i == 71) &&
          (battleBoardArray[i] == "日" ||
            battleBoardArray[i] == "只" ||
            battleBoardArray[i] == "点")
        ) {
          defenderWin = true;
          clearInterval(battleTimer);
        }

        // Player Tokens:
        // "入";
        // "士";
        // "馬";
        // "一";
        // "日";
        // "只";
        // "点";
        // defender mechanics:
        if (battleBoardArray[i] == "只") {
          defenderArchersOnBattlefield++;
          battleBoardArray[i] = "一";
          if (battleBoardArray[i + 1] == "馬") {
            battleBoardArray[i + 1] = "馬";
          } else if (battleBoardArray[i + 1] == "士") {
            battleBoardArray[i + 1] = "士";
          } else if (battleBoardArray[i + 1] == "入") {
            battleBoardArray[i + 1] = "一";
          } else {
            battleBoardArray[i + 1] = "只";
          }
        }
        if (battleBoardArray[i] == "日") {
          chanceOfDeath = Math.floor(
            Math.random() * (45 / archersOnBattlefield)
          );
          battleBoardArray[i] = "一";
          if (battleBoardArray[i + 1] == "馬") {
            switch (Math.floor(Math.random() * 3)) {
              case 0:
                battleBoardArray[i + 1] = "馬";
                break;
              case 1:
                battleBoardArray[i + 1] = "日";
                break;
              case 2:
                battleBoardArray[i + 1] = "馬";
                break;
            }
          } else if (battleBoardArray[i + 1] == "士") {
            switch (Math.floor(Math.random() * 2)) {
              case 0:
                battleBoardArray[i + 1] = "士";
                break;
              case 1:
                battleBoardArray[i + 1] = "日";
                break;
            }
          } else if (chanceOfDeath == 1) {
            battleBoardArray[i + 1] = "一";
          } else {
            battleBoardArray[i + 1] = "日";
          }
        }
        if (battleBoardArray[i] == "点") {
          chanceOfDeath = Math.floor(
            Math.random() * (45 / archersOnBattlefield)
          );
          battleBoardArray[i] = "一";

          if (battleBoardArray[i + 1] == "馬") {
            switch (Math.floor(Math.random() * 2)) {
              case 0:
                battleBoardArray[i + 1] = "馬";
                break;
              case 1:
                battleBoardArray[i + 1] = "点";
                break;
            }
          } else if (battleBoardArray[i + 1] == "士") {
            switch (Math.floor(Math.random() * 3)) {
              case 0:
                battleBoardArray[i + 1] = "士";
                break;
              case 1:
                battleBoardArray[i + 1] = "点";
                break;
              case 2:
                battleBoardArray[i + 1] = "点";
                break;
            }
          } else if (battleBoardArray[i + 1] == "入") {
            battleBoardArray[i + 1] = "点";
          } else if (chanceOfDeath == 1) {
            battleBoardArray[i + 1] = "一";
          } else {
            battleBoardArray[i + 1] = "点";
          }
        }
      }
      archersOnBattlefield = 0;

      // ATTACKERS:
      for (j = 0; j < battleBoardArray.length; j++) {
        // check for attacker win:
        if (
          (j == 0 || j == 12 || j == 24 || j == 36 || j == 48 || j == 60) &&
          (battleBoardArray[j] == "士" ||
            battleBoardArray[j] == "馬" ||
            battleBoardArray[j] == "入")
        ) {
          attackerWin = true;
          clearInterval(battleTimer);
        }
        // Player Tokens:
        // "入";
        // "士";
        // "馬";
        // "一";
        // "日";
        // "只";
        // "点";

        if (battleBoardArray[j] == "入") {
          archersOnBattlefield++;
          battleBoardArray[j] = "一";
          if (battleBoardArray[j - 1] == "日") {
            battleBoardArray[j - 1] = "日";
          } else if (battleBoardArray[j - 1] == "点") {
            battleBoardArray[j - 1] = "点";
          } else if (battleBoardArray[j - 1] == "只") {
            battleBoardArray[j - 1] = "一";
          } else {
            battleBoardArray[j - 1] = "入";
          }
        }
        if (battleBoardArray[j] == "馬") {
          defenderChanceOfDeath = Math.floor(
            Math.random() * (45 / defenderArchersOnBattlefield)
          );
          battleBoardArray[j] = "一";
          if (battleBoardArray[j - 1] == "日") {
            switch (Math.floor(Math.random() * 3)) {
              case 0:
                battleBoardArray[j - 1] = "馬";
                break;
              case 1:
                battleBoardArray[j - 1] = "日";
                break;
              case 2:
                battleBoardArray[j - 1] = "馬";
                break;
            }
          } else if (battleBoardArray[j - 1] == "点") {
            switch (Math.floor(Math.random() * 2)) {
              case 0:
                battleBoardArray[j - 1] = "馬";
                break;
              case 1:
                battleBoardArray[j - 1] = "点";
                break;
            }
          } else if (battleBoardArray[j - 1] == "只") {
            battleBoardArray[j - 1] = "馬";
          } else if (defenderChanceOfDeath == 1) {
            battleBoardArray[j - 1] = "一";
          } else {
            battleBoardArray[j - 1] = "馬";
          }
        }
        if (battleBoardArray[j] == "士") {
          defenderChanceOfDeath = Math.floor(
            Math.random() * (45 / defenderArchersOnBattlefield)
          );
          battleBoardArray[j] = "一";
          if (battleBoardArray[j - 1] == "日") {
            switch (Math.floor(Math.random() * 2)) {
              case 0:
                battleBoardArray[j - 1] = "士";
                break;
              case 1:
                battleBoardArray[j - 1] = "日";
                break;
            }
          } else if (battleBoardArray[j - 1] == "点") {
            switch (Math.floor(Math.random() * 3)) {
              case 0:
                battleBoardArray[j - 1] = "士";
                break;
              case 1:
                battleBoardArray[j - 1] = "点";
                break;
              case 2:
                battleBoardArray[j - 1] = "点";
                break;
            }
          } else if (battleBoardArray[j - 1] == "只") {
            battleBoardArray[j - 1] = "士";
          } else if (defenderChanceOfDeath == 1) {
            battleBoardArray[j - 1] = "一";
          } else {
            battleBoardArray[j - 1] = "士";
          }
        }
      }
      defenderArchersOnBattlefield = 0;

      // one player mode:
      computerPlayerEasy();

      colorBattleBoard();
      // battleBoardArrayElement.innerText = joinArray

      // Declare Winner:
      if (attackerWin && defenderWin) {
        declareWinner.innerText = "Draw";
        resetBattleboard();
      } else if (attackerWin) {
       
       growCity(3);
        
        fillMap(3);

        declareWinner.innerText = "You Lost";
        resetBattleboard();
        if (battle) {
          currentRoom = "room101";
          $("#game-text")
            .hide()
            .text(rooms[currentRoom].description)
            .fadeIn(1000);
          declareWinner.innerText = "You lost with soldiers";

          battle = false;
        }
        if (joust) {
          currentRoom = "room0 torch10";
          $("#game-text")
            .hide()
            .text(rooms[currentRoom].description)
            .fadeIn(1000);
          declareWinner.innerText = "You lost the joust";

          joust = false;
        }
        if (archerBattle) {
          currentRoom = "room1010";
          $("#game-text")
            .hide()
            .text(rooms[currentRoom].description)
            .fadeIn(1000);
          declareWinner.innerText = "You lost with archers";

          archerBattle = false;
        }
        if (throneBattle) {
          currentRoom = "throne7";
          $("#game-text")
            .hide()
            .text(rooms[currentRoom].description)
            .fadeIn(1000);
          declareWinner.innerText = "You lost the throne";

          throneBattle = false;
          gameMap = origionalGameMap
          fillMap(3)
          fillMap(2)
          drawGame()
          
        }
        if (tyrantBattle) {
          declareWinner.innerText = "You Lost against the tyrant";
          tyrantBattle = false;
        }
        if (unrestBattle) {
          declareWinner.innerText = "Your empire is in chaos!";
          unrestBattle = false;
        }
        if (invadersBattle) {
          declareWinner.innerText = "Your empire is falling appart!";
          invadersBattle = false;
        }
        
      } else if (defenderWin) {  
        
        for (m = battleBoardArray.length; m >= 0; m--) {
          switch (battleBoardArray[m]) {
          case "日":
              defenders++
              defendersElement.innerText = defenders
           
            break;
          case "只":
              defenderArchers++
              defenderArchersElement.innerText = defenderArchers
            
            break;
          case "点":
              defenderHorsemen++
              defenderHorsemenElement.innerText = defenderHorsemen
            
              break;
          default:
          // code block
        }
        }
          
        

        declareWinner.innerText = "You Win!";
        resetBattleboard();
        if (battle) {
          currentRoom = "room102";
          $("#game-text")
            .hide()
            .text(rooms[currentRoom].description)
            .fadeIn(1000);
          declareWinner.innerText = "You won with soldiers";

          battle = false;
        }
        if (joust) {
          currentRoom = "room2 torch9";
          $("#game-text")
            .hide()
            .text(rooms[currentRoom].description)
            .fadeIn(1000);
          declareWinner.innerText = "You won the joust";

          joust = false;
        }
        if (archerBattle) {
          currentRoom = "room1020";
          $("#game-text")
            .hide()
            .text(rooms[currentRoom].description)
            .fadeIn(1000);
          declareWinner.innerText = "You won with archers";

          archerBattle = false;
        }
        if (throneBattle) {
          currentRoom = "throne5";
          $("#game-text")
            .hide()
            .text(rooms[currentRoom].description)
            .fadeIn(1000);
          declareWinner.innerText = "You won the throne";

          throneBattle = false;
        }
        if (tyrantBattle) {
          declareWinner.innerText = "You won against the tyrant";
          defenders = defenders + 10;
          defendersElement.innerText = defenders;
          tyrantBattle = false;
        }
        if (unrestBattle) {
          declareWinner.innerText = "Order has been restored!";
          defenders = defenders + 10;
          defendersElement.innerText = defenders;
          unrestBattle = false;
        }
        if (invadersBattle) {
          declareWinner.innerText = "Invaders have been pushed back!";
          defenders = defenders + 10;
          defendersElement.innerText = defenders;
          invadersBattle = false;
        }
      }
    }, battleSpeed);
  });
}

function resetBattleboard() {
  // soldiers = startingSoldiers;
  // horsemen = startingHorsemen;
  // archers = startingArchers;
  // defenders = startingDefenders;
  goToWarBtnElement.disabled = false;
  //canWar = true;
  battleBoardArray = ["-", "-"];
  joinArray = null;
  setUpBattleBoard();
  canWar = true;
  attackerWin = false;
  defenderWin = false;
  chanceOfDeath = null;
  defenderChanceOfDeath = null;
  archersOnBattlefield = 0;
  defenderArchersOnBattlefield = 0;
  defendersElement.innerText = defenders;
  defenderHorsemenElement.innerText = defenderHorsemen;
  defenderArchersElement.innerText = defenderArchers;
  defendersBtnElement.disabled = false;
  defenderArchersBtnElement.disabled = false;
  defenderHorsemenBtnElement.disabled = false;
}

function soldiersBtnElement() {
  for (i = 11; i < battleBoardSize; i += 12) {
    if (battleBoardArray[i] != "士") {
      if (soldiers > 0) {
        battleBoardArray[i] = "士";
        colorBattleBoard();
        // let joinArray = battleBoardArray.join('')
        // battleBoardArrayElement.innerText = joinArray
        soldiers -= 1;
        // soldiersElement.innerText = soldiers
      } else {
        soldiersBtnElement.disabled = true;
      }
    }
  }
}

function horsemenBtnElement() {
  for (i = 11; i < battleBoardSize; i += 12) {
    if (battleBoardArray[i] != "馬") {
      if (horsemen > 0) {
        battleBoardArray[i] = "馬";
        colorBattleBoard();
        // let joinArray = battleBoardArray.join('')
        // battleBoardArrayElement.innerText = joinArray
        horsemen -= 1;
        //horsemenElement.innerText = horsemen
      } else {
        horsemenBtnElement.disabled = true;
      }
    }
  }
}
function archersBtnElement() {
  for (i = 11; i < battleBoardSize; i += 12) {
    if (battleBoardArray[i] != "入") {
      if (archers > 0) {
        battleBoardArray[i] = "入";
        colorBattleBoard();
        // let joinArray = battleBoardArray.join('')
        // battleBoardArrayElement.innerText = joinArray
        archers -= 1;
        //archersElement.innerText = archers
      } else {
        archersBtnElement.disabled = true;
      }
    }
  }
}

function setUpBattleBoard() {
  for (let i = 0; i < battleBoardSize; i++) {
    battleBoardArray[i] = "一";
  }
  //   for (let j = 0; j < 12; j+=12) {
  //     battleBoardArray[j] = "日"
  //     battleBoardArray[j+12] = "日"

  //   }
}

function colorBattleBoard() {
  battleBoardArrayElement.innerHTML = "";
  joinArray = battleBoardArray.join("");
  for (var a = 0; a < joinArray.length; a++) {
    if (joinArray[a] == "馬" || joinArray[a] == "士" || joinArray[a] == "入") {
      battleBoardArrayElement.innerHTML +=
        "<span style='color:red'>" + joinArray[a] + "</span>";
    } else if (
      joinArray[a] == "日" ||
      joinArray[a] == "只" ||
      joinArray[a] == "点"
    ) {
      battleBoardArrayElement.innerHTML +=
        "<span style='color:blue'>" + joinArray[a] + "</span>";
    } else {
      battleBoardArrayElement.innerHTML +=
        "<span style='color:black'>" + joinArray[a] + "</span>";
    }
  }
}

function computerPlayerEasy() {
  switch (Math.floor(Math.random() * 4)) {
    case 1:
      soldiersBtnElement();
      break;
    case 0:
      horsemenBtnElement();
      break;
    case 2:
      archersBtnElement();
      break;
    case 3:
      break;
  }
}


startGame();
