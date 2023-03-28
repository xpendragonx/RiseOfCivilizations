let blue = "#0000FF";

// Score variablies
let library = false;
let tyrant = true;
let encourage = false;
let soldiersMonument = false;
let godsMonument = false;
let meMonument = false;
let city = false;
let prophecy = false;
let friends = false;
let horserace = false;
let gladiators = false;
let festival = false;
let unrest = true;
let wisdom = false;
let knowledge = false;
let trade = false;
let freeTrade = false;
let lands = false;
let fight = false;
let alliance = false;
let comedy = false;
let joke = false;
let embassy = false;
let host = false;
let empire = false;
let tribute = false;
let democracy = false;

// Mechanic variables
let number = 8;
let level = 5;
let cultureNumber = 0;
let expandNumber = 0;
let wisdomNumber = 0;
let politicsNumber = 0;
let eventNumber = 0;
var currentRoom = "open";
var commands = ["go", "pickup", "inventory", "talk", "use"];
var inventory = ["torch", "spear"];
let storyArray = ["culture", "expand", "wisdom", "politics"];



function achievementsUnlocked() {
  let unlocked = ["Achevements: "]
  let achievements = {
library,tyrant,encourage,soldiersMonument,godsMonument,meMonument,city,prophecy,friends,horserace,gladiators,festival,unrest,wisdom,knowledge,trade,freeTrade,lands,fight,alliance,comedy,joke,embassy,host,empire,tribute,democracy
};
var result;
for (var i in achievements) {
    if (achievements[i] === true) {      
      //console.log(i);  
      result = true;
        unlocked.push(" "+i.toUpperCase())
    } else {
      //console.log(i);
      result = false;
      unlocked.push(" ??????????")
    }
}
  unlocked.push(" ------ to unlock more type RESET ------")
  $("#game-text").hide().text(unlocked.toString()).fadeIn(1000);
 declareWinner.innerText = "Score: Blue: "+blueScore+" / Red: "+redScore 
}

function reset() {
  currentRoom = "throne7";
          $("#game-text")
            .hide()
            .text(rooms[currentRoom].description)
            .fadeIn(1000);
          declareWinner.innerText = "You lost the throne";
canWar = false;
attackerWin = false;
defenderWin = false;
battle = false;
joust = false;
archerBattle = false;
throneBattle = false;
tyrantBattle = false;
unrestBattle = false;
invadersBattle = false;
  
joustEvent = false;
horseraceEvent = false;
          gameMap = origionalGameMap
          fillMap(3)
          fillMap(2)
          drawGame()
}

function changeRoom(dir) {
  if (rooms[currentRoom].directions[dir] !== undefined) {
    currentRoom = rooms[currentRoom].directions[dir];
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    // $("<p>" + rooms[currentRoom].description + "</p>").hide().insertBefore("#game-text").fadeIn(2000);
  } else {
    $("#game-text").hide().text("You cannot go that way").fadeIn(2000);
    //$("<p>You cannot go that way!</p>").hide().insertBefore("#game-text").fadeIn(2000);
  }
}

function showWin() {
  var txt = "Click for prize!";
  document.write(
    "<p>Link : " + txt.link("https://forms.gle/ohUcGtdcM3C1JKHZ9") + "</p>"
  );
}

function showInventory() {
  if (inventory.length === 0) {
    $("#game-text").append("<p>You are not carrying anything.</p>");
    return;
  }
  $("#game-text").append("<p>Here is your inventory: </p>");
  $("#game-text").append("<p><ul>");
  for (var i = 0; i < inventory.length; i++) {
    $("#game-text").append("<li>" + inventory[i] + "</li>");
  }
  $("#game-text").append("</ul></p>");
}

function playerInput(input) {
  var command = input;
  //var command = input.split(" ")[0];
  switch (command) {
    case "yes":
      //var dir = input
      dir = input;
      if (rooms[currentRoom].directions[dir] === "next") {
        goReturn();
      } else {
        changeRoom(dir);
      }
      //var dir = input.split(" ")[1];
      break;
    case "y":
      //var dir = input
      dir = "yes";
      if (rooms[currentRoom].directions[dir] === "next") {
        goReturn();
      } else {
        changeRoom(dir);
      }
      //var dir = input.split(" ")[1];
      break;
    case "n":
      //var dir = input
      dir = "no";
      if (rooms[currentRoom].directions[dir] === "next") {
        goReturn();
      } else {
        changeRoom(dir);
      }
      //var dir = input.split(" ")[1];
      break;
    case "wisdom":
      dir = input;
      changeRoom(dir);
      break;
    case "what":
      $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
      break;
    case "accepting":
      dir = input;
      changeRoom(dir);
      break;
    case "things":
      dir = input;
      changeRoom(dir);
      break;
    case "no":
      dir = input;
      if (rooms[currentRoom].directions[dir] === "next") {
        goReturn();
      } else {
        changeRoom(dir);
      }
      break;
    case "dead":
      dir = input;
      changeRoom(dir);
      break;
    // case "win":
    //   achievementsUnlocked();
    //   break;
    case "none":
      dir = input;
      changeRoom(dir);
      break;
    case "fears":
      dir = input;
      changeRoom(dir);
      break;
    case "knowledge":
      goKnowledge();
      break;
    case "artrocks":
      showWin();
      break;
    case "ride":
      goRide();
      break;
    case "battle":
      goBattle();
      break;
    case "joust":
      goJoust();
      break;
    case "loose":
      goLoose();
      break;
    case "explore":
      goExplore();
      break;
    case "throne":
      goThrone();
      break;
    case "return":
      // dir = "testArray"
      // changeRoom(dir)
      goReturn();
      //console.log(eventNumber)
      break;
    case "archers":
      goArchers();
      break;
    case "gods":
      goGods();
      break;
    case "city":
      goCity();
      break;
    case "empire":
      goEmpire();
      break;
    case "lands":
      goLands();
      break;
    case "unrest":
      goUnrest();
      break;
    case "wise":
      goWise();
      break;
    case "fight":
      goFight();
      break;
    case "alliance":
      goAlliance();
      break;
    case "tribute":
      goTribute();
      break;
    case "library":
      goLibrary();
      break;
    case "prophecy":
      goProphecy();
      break;
    case "comedy":
      goComedy();
      break;
    case "joke":
      goJoke();
      break;
    case "trade":
      goTrade();
      break;
    case "stop":
      goStop();
      break;
    case "encourage":
      goEncourage();
      break;
    case "freetrade":
      goFreetrade();
      break;
    case "friends":
      goFriends();
      break;
    case "embassy":
      goEmbassy();
      break;
    case "host":
      goHost();
      break;
    case "horserace":
      goHorserace();
      break;
    case "gladiators":
      goGladiators();
      break;
    case "festival":
      goFestival();
      break;
    case "soldiers":
      goSoldiers();
      break;
    case "me":
      goMe();
      break;
    case "democracy":
      achievementsUnlocked()
      break;
    case "reset":
      reset()
      break;
    default:
      $("#game-text")
        .hide()
        .text("Type WHAT and I will say it again.")
        .fadeIn(2000);
  }
}

$(document).ready(function () {
  $("#game-text").fadeIn(2000);

  $("<p>" + rooms[currentRoom].description + "</p>")
    .hide()
    .insertBefore("#game-text")
    .fadeIn(2000);

  document.getElementById("userInput").onkeypress = function (key) {
    if (key.which === 13 && $("#userInput").is(":focus")) {
      var value = $("#userInput");
      var newValue = value.val();
      var finalValue = newValue.toLowerCase();
      $("#userInput").val("");
      playerInput(finalValue);
    }
  };
});

//
// functions
//

function goRide() {
   joustEvent = true;
document.getElementById("caveExplorationJump").style.visibility = "visible"
  biome = true;
  clearInterval(animationInterval);
  animationInterval = setInterval(function () {
    if (biome) {
      runBiome();
    }
  }, hungerBiomeSpeed);
  startBiome();
  currentRoom = "room0 torch5";
  $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
}

function goBattle() {
  battle = true;
  canWar = true;
  defenders = 10;
  soldiers = 5;
  horsemen = 0;
  archers = 0;
  defenderHorsemen = 0;
  defenderArchers = 0;
  defenderHorsemenElement.innerText = defenderHorsemen;
  defenderArchersElement.innerText = defenderArchers;
  
  defendersElement.innerText = defenders;  
  document.getElementById("defendersText").style.visibility = "visible"
  defendersBtnElement.style.visibility = "visible"
  goToWarBtnElement.click();
  currentRoom = "room206";
  $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
  declareWinner.innerText = "Click the Soldiers Button!"
  //
}

function goJoust() {
   joustEvent = true;
  joust = true;
  
  soldiers = 5;  
  horsemen = 0;
  archers = 0;
  
  defenders = 0;
  defenderArchers = 0;
  defenderHorsemen = 5;
  defendersElement.innerText = defenders;
  defenderHorsemenElement.innerText = defenderHorsemen;
  defenderArchersElement.innerText = defenderArchers;
  
  document.getElementById("horsemenText").style.visibility = "visible"
  defenderHorsemenBtnElement.style.visibility = "visible"
  
  //defenders = startingDefenders + level
  goToWarBtnElement.click();
  currentRoom = "room0 torch8";
  $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
  declareWinner.innerText = "Click the Horsemen Button!";
  //room0 torch8
}

function goLoose() {
  soldiers = 1; 
  horsemen = 0;
  archers = 0;
  
  defenders = 0;
  defenderHorsemen = 0;
  defenderArchers = 10;
  
  defendersElement.innerText = defenders;
  defenderHorsemenElement.innerText = defenderHorsemen;
  defenderArchersElement.innerText = defenderArchers;
  
  
  
  archerBattle = true;
  //defenders = startingDefenders + level
  goToWarBtnElement.click();
  currentRoom = "room1003";
  $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
  //room0 torch8
  declareWinner.innerText = "+10 Archers!"
}

function goArchers() {
  soldiers = 1;
  horsemen = 0;
  archers = 0;
  archerBattle = true;
  
  defenderArchers = 10;
  defenders = 0;
  defenderHorsemen = 0;
 
  defendersElement.innerText = defenders;
  defenderHorsemenElement.innerText = defenderHorsemen;
  defenderArchersElement.innerText = defenderArchers;

  defenderArchersElement.innerText = defenderArchers;
  currentRoom = "room1";
  $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
  declareWinner.innerText = "+10 Archers!"
  
  document.getElementById("archersText").style.visibility = "visible"
  defenderArchersBtnElement.style.visibility = "visible"
}

function goExplore() {
  document.getElementById("cultureText").style.visibility = "visible"
  document.getElementById("enemyCultureText").style.visibility = "visible"
  loadMap();
  // currentRoom = "room204"
  // $("#game-text").hide().text( rooms[currentRoom].description).fadeIn(1000);
}

function goThrone() {
  throneBattle = true;
  soldiers = 8;
  horsemen = 4;
  archers = 6;

  defenders = 10;
  defenderHorsemen = 8;
  defenderArchers = 10;
  defendersElement.innerText = defenders;
  defenderHorsemenElement.innerText = defenderHorsemen;
  defenderArchersElement.innerText = defenderArchers;
  goToWarBtnElement.click();
  currentRoom = "throne4";
  $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
  declareWinner.innerText = "+10 Soldiers, +10 Archers, + 8 Horsemen!"
  //Make everything visible
  document.getElementById("defendersText").style.visibility = "visible"
  defendersBtnElement.style.visibility = "visible"
  document.getElementById("archersText").style.visibility = "visible"
  defenderArchersBtnElement.style.visibility = "visible"
  document.getElementById("horsemenText").style.visibility = "visible"
  defenderHorsemenBtnElement.style.visibility = "visible"
  document.getElementById("cultureText").style.visibility = "visible"
  document.getElementById("enemyCultureText").style.visibility = "visible"
  loadMap();
}

function goReturn() {
  tempNumber = Math.floor(Math.random() * 4);
  switch (tempNumber) {
    case 0:
      currentRoom = storyArray[0] + cultureNumber;
      break;
    case 1:
      currentRoom = storyArray[1] + expandNumber;
      break;
    case 2:
      currentRoom = storyArray[2] + wisdomNumber;
      break;
    case 3:
      currentRoom = storyArray[3] + politicsNumber;
      break;
    default:
    // code block
  }
  $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
}

//
// culture Functions
//

function goGods() {
  if (
    
    godsMonument == false
    
  ) {
    godsMonument = true;
    currentRoom = storyArray[1] + expandNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    cultureNumber++;
    growCity(2);
    declareWinner.innerText = "Cities Expanded!"
  }
}

function goSoldiers() {
  if (
    soldiersMonument == false 
    
  ) {
    soldiersMonument = true;
    currentRoom = storyArray[1] + expandNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    cultureNumber++;
    defenders = defenders + 5;
    defendersElement.innerText = defenders;
    declareWinner.innerText = "+5 Soldiers!"
  }
}

function goMe() {
  if (
    
    meMonument == false
  ) {
    meMonument = true;
    currentRoom = storyArray[1] + expandNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    cultureNumber++;
    fillMap(2);
    declareWinner.innerText = "New City Founded!"
  }
}

function goHorserace() {
 
horseraceEvent = true;
  if (horserace == false) {
    cultureNumber++;
    //horserace = true;
    currentRoom = storyArray[1] + expandNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    biome = true;
    animationInterval = setInterval(function () {
      if (biome) {
        runBiome();
      }
    }, hungerBiomeSpeed);
    startBiome();
  }
}

function goGladiators() {
  if (gladiators == false) {
    cultureNumber++;
    soldiers = 5;
    horsemen = 0;
    archers = 0;

    goToWarBtnElement.click();
    gladiators = true;
    currentRoom = storyArray[1] + expandNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    
  }
}

function goFestival() {
  if (festival == false) {
    festival = true;
    currentRoom = storyArray[1] + expandNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    cultureNumber++;
    growCity(2);
    declareWinner.innerText = "Cities Expanded!"
  }
}

function goLands() {
  if (lands == false) {
    defenders = defenders + 5;
    defendersElement.innerText = defenders;
    soldiers = 8;
    horsemen = 4;
    archers = 6;

    goToWarBtnElement.click();
    lands = true;
    currentRoom = storyArray[1] + expandNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    cultureNumber++;
    growCity(2);
    //declareWinner.innerText = "Cities Expanded!"
  }
}

//
// Expanssion Functions
//

function goCity() {
  if (city == false) {
    soldiers = 5;
    horsemen = 0;
    archers = 0;
    goToWarBtnElement.click();
    city = true;
    currentRoom = storyArray[2] + wisdomNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    expandNumber++;
    fillMap(2);
    //declareWinner.innerText = "New City Founded!"
  }
}

function goUnrest() {
  if (unrest == true) {
    unrest = false;
    currentRoom = storyArray[2] + wisdomNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    expandNumber++;
    unrestBattle = true;
    soldiers = 5;
    horsemen = 0;
    archers = 0;
    goToWarBtnElement.click();
  }
}

function goWise() {
  if (wisdom == false) {
    wisdom = true;
    currentRoom = storyArray[2] + wisdomNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    expandNumber++;
     defenders = defenders + 5;
     defendersElement.innerText = defenders
    growCity(2);
    declareWinner.innerText = "+5 Soldiers. Cities Expanded!"
  }
}

function goFight() {
  if (fight == false) {
    soldiers = 3;
    horsemen = 2;

    archers = 0;
    goToWarBtnElement.click();
    fight = true;
    currentRoom = storyArray[2] + wisdomNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    expandNumber++;
    invadersBattle = true;
    goToWarBtnElement.click();
  }
}

function goAlliance() {
  if (alliance == false) {
    // defenders =defenders+ 5;
    // defenderHorsemen =defenderHorsemen+ 5;
    // defenderArchers =defenderArchers+ 5;
    // defendersElement.innerText = defenders;
    // defenderHorsemenElement.innerText = defenderHorsemen;
    // defenderArchersElement.innerText = defenderArchers;
    alliance = true;
    currentRoom = storyArray[2] + wisdomNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    expandNumber++;
    fillMap(2);
    declareWinner.innerText = "New City Founded!"
  }
}

function goEmpire() {
  if (empire == false) {
    soldiers = 5;
    horsemen = 2;
    archers = 2;

    goToWarBtnElement.click();
    empire = true;
    currentRoom = storyArray[2] + wisdomNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    expandNumber++;
    fillMap(2);
    declareWinner.innerText = "New City Founded!"
  }
}

function goTribute() {
  if (tribute == false) {
    tribute = true;
    currentRoom = storyArray[2] + wisdomNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    expandNumber++;
    //end game...
  }
}

//we might need a new battle function ...opposed to tribute... depending on what happens towards end game...

function goLibrary() {
  if (library == false) {
    library = true;
    currentRoom = storyArray[3] + politicsNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    wisdomNumber++;
    growCity(2);
    declareWinner.innerText = "Cities Expanded!"
  }
}

function goProphecy() {
  if (prophecy == false) {
    prophecy = true;
    currentRoom = storyArray[3] + politicsNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    wisdomNumber++;
    defenders = defenders + 5;
    defendersElement.innerText = defenders;
    declareWinner.innerText = "+5 Soldiers!"
  }
}

function goKnowledge() {
  if (knowledge == false) {
    defenderArchers =defenderArchers+ 5;
    
    defenderArchersElement.innerText = defenderArchers;
    knowledge = true;
    currentRoom = storyArray[3] + politicsNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    wisdomNumber++;
    growCity(2);
    declareWinner.innerText = "+5 Archers. Cities Expanded!"
  }
}

function goComedy() {
  if (comedy == false) {
    comedy = true;
    currentRoom = storyArray[3] + politicsNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    wisdomNumber++;
    growCity(2);
    declareWinner.innerText = "Cities Expanded!"
  }
}

function goJoke() {
  if (joke == false) {
    joke = true;
    console.log("Build a write your own joke mechanic");
    currentRoom = storyArray[3] + politicsNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    wisdomNumber++;
    growCity(2);
    declareWinner.innerText = "Cities Expanded!"
  }
}

//
// Politics Functions
//

function goStop() {
  if (tyrant == true) {
    soldiers = 5;
    horsemen = 0;
    archers = 0;

    tyrant = false;
    currentRoom = storyArray[0] + cultureNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    politicsNumber++;
    tyrantBattle = true;
    goToWarBtnElement.click();
    declareWinner.innerText = "Stop the tyrant!"
  }
}

function goEncourage() {
  if (encourage == false) {
    encourage = true;
    currentRoom = storyArray[0] + cultureNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    politicsNumber++;
    fillMap(3);
    //growCity(2);
    declareWinner.innerText = "The Enemy is Growing"
  }
}

function goFriends() {
  if (friends == false) {
    // defenders = defenders+5;
    // defenderHorsemen = defenderHorsemen+5;
    // defenderArchers = defenderArchers+5;
    // defendersElement.innerText = defenders;
    // defenderHorsemenElement.innerText = defenderHorsemen;
    // defenderArchersElement.innerText = defenderArchers;
    friends = true;
    currentRoom = storyArray[0] + cultureNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    politicsNumber++;
    fillMap(2);
    declareWinner.innerText = "New City Founded!"
  }
}

function goTrade() {
  if (trade == false) {
    soldiers = 5;
    horsemen = 3;
    archers = 5;

    goToWarBtnElement.click();
    trade = true;
    currentRoom = storyArray[0] + cultureNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    politicsNumber++;
    fillMap(2);
    declareWinner.innerText = "Cities Expanded!"
  }
}

function goFreetrade() {
  if (freeTrade == false) {
    defenders = defenders - 5;
    defendersElement.innerText = defenders;
    freeTrade = true;
    currentRoom = storyArray[0] + cultureNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    politicsNumber++;
    fillMap(2);
    //fillMap(2);
    declareWinner.innerText = "New City Founded!"
  }
}

function goEmbassy() {
  if (embassy == false) {
    soldiers = 8;
  horsemen = 4;
  archers = 6;

  
  goToWarBtnElement.click();

    embassy = true;
    currentRoom = storyArray[0] + cultureNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    politicsNumber++;
    // fillMap(2);
    declareWinner.innerText = "It's a trap!"
  }
}

function goHost() {
  if (host == false) {
    defenders = defenders - 3;

    defendersElement.innerText = defenders;
    host = true;
    currentRoom = storyArray[0] + cultureNumber;
    $("#game-text").hide().text(rooms[currentRoom].description).fadeIn(1000);
    politicsNumber++;
    growCity(2);
    declareWinner.innerText = "New City Founded!"
  }
}

//
// Story
//

var rooms = {
  open: {
    description: "Rise young leader...",
    directions: {
      yes: "start",
      no: "open",
    },
  },
  start: {
    description: "Wake up your highness.",
    directions: {
      yes: "entrance0",
      no: "start1",
    },
  },
  start1: {
    description: "Wakey, wakey.",
    directions: {
      yes: "entrance0",
      no: "start2",
    },
  },
  start2: {
    description: "(opens the blinds)",
    directions: {
      yes: "entrance0",
      no: "start3",
    },
  },
  start3: {
    description: "WAKE UP!!!",
    directions: {
      yes: "entrance0",
      no: "start4",
    },
  },
  start4: {
    description: "Oh, I give up...",
    directions: {
      yes: "entrance0",
      no: "start",
    },
  },
  entrance0: {
    description: "You have a very busy schedule.",
    directions: {
      yes: "room0",
      no: "entrance",
    },
  },
  entrance: {
    description: "Do you want me to cancel everything?",
    directions: {
      yes: "room1.5",
      no: "room0",
    },
  },
  room0: {
    description: "Let us begin. Lets head outside...",
    directions: {
      yes: "room2",
      no: "room1.5",
    },
  },
  "room0 torch": {
    description: "Your horse is ready, type RIDE to start.",
    directions: {
      yes: "room0 torch",
      no: "room2",
    },
  },
  "room0 torch5": {
    description: "Try to reach the $.",
    directions: {
      yes: "room0 torch5",
      no: "room0 torch5",
    },
  },
  "room0 torch3": {
    description: "Try jumping over the #, \\, and -. Type RIDE to try again",
    directions: {
      yes: "room0 torch3",
      no: "room0 torch4",
    },
  },
  "room0 torch4": {
    description:
      "Are you sure you want to quit? Learning to ride is essential for a leader these days.",
    directions: {
      yes: "room1",
      no: "room0 torch3",
    },
  },
  "room0 torch0": {
    description:
      "Well done! These Horsemen will fight for you. Type JOUST to test them out.",
    directions: {
      yes: "room0 torch0",
      no: "room0 torch1",
    },
  },
  "room0 torch8": {
    description: "Horsemen are much stronger than your typical soldier.",
    directions: {
      yes: "room0 torch0",
      no: "room0 torch1",
    },
  },
  "room0 torch10": {
    description: "Keep trying! Type JOUST again",
    directions: {
      yes: "room0 torch10",
      no: "room0 torch1",
    },
  },
  "room0 torch1": {
    description: "Don't worry, you will still get the glory.",
    directions: {
      yes: "room0 torch0",
      no: "room0 torch2",
    },
  },
  "room0 torch2": {
    description: "Humble.",
    directions: {
      yes: "room2 torch",
      no: "room2 torch",
    },
  },
  room1: {
    description: "The archer tries to shoot enemies at a distance...",
    directions: {
      yes: "room1001",
      no: "room1001",
    },
  },
  room1001: {
    description: "...but is weak when enemies come near...",
    directions: {
      yes: "room1002",
      no: "room1002",
    },
  },
  room1002: {
    description: "...let try them out. Type LOOSE to begin!",
    directions: {
      yes: "room1002",
      no: "room1002",
    },
  },
  room1003: {
    description: "SEND ALL THE ARCHERS!!!",
    directions: {
      yes: "room1003",
      no: "room1003",
    },
  },
  room101: {
    description: "It looks like we lost. Type BATTLE to try again...",
    directions: {
      yes: "room101",
      no: "room2 torch",
    },
  },
  room1010: {
    description: "It looks like we lost. Type LOOSE to try again.",
    directions: {
      yes: "room1010",
      no: "room2",
    },
  },
  room102: {
    description: "We won!!! Now for horseback riding.  Type RIDE to begin",
    directions: {
      yes: "room102",
      no: "room2",
    },
  },

  room1020: {
    description: "We won!!! You are ready to lead your country.",
    directions: {
      yes: "throne1",
      no: "throne1",
    },
  },
  room103: {
    description: "Type RETURN to take your place on the throne.",
    directions: {
      yes: "room103",
      no: "room2",
    },
  },
  room104: {
    description: "Humble, but you have a duty...",
    directions: {
      yes: "room103",
      no: "room105",
    },
  },
  room105: {
    description: "I guess a nap then?",
    directions: {
      yes: "start",
      no: "room103",
    },
  },
  room2: {
    description:
      "If you would like to explore your kingdom, type EXPLORE to start.",
    directions: {
      yes: "room201",
      no: "room2 torch",
    },
  },
  room201: {
    description: "This map tells you how much area you control...",
    directions: {
      yes: "room202",
      no: "room202",
    },
  },
  room202: {
    description: "...It also tells you how much area the enemy controls...",
    directions: {
      yes: "room203",
      no: "room203",
    },
  },
  room203: {
    description: "...To win, you must control more area than the other side...",
    directions: {
      yes: "room208",
      no: "room208",
    },
  },
  room208: {
    description: "Now type EXPLORE again to hide the map.",
    directions: {
      yes: "room209",
      no: "room209",
    },
  },
  room209: {
    description: "You can type EXPLORE any time to check your map!",
    directions: {
      yes: "room205",
      no: "room205",
    },
  },
  room205: {
    description: "We found some soldiers!  Type BATTLE to test their worth",
    directions: {
      yes: "room205",
      no: "room2 torch",
    },
  },
  room206: {
    description:
      "Soldiers are your basic unit. The more you have, the stronger you are.",
    directions: {
      yes: "room2 torch",
      no: "room2 torch",
    },
  },
  //Type EXPLORE to turn on and off the map.
  room204: {
    description: "Your army is growing!",
    directions: {
      yes: "room201",
      no: "room201",
    },
  },
  "room2 torch": {
    description: "The Wise ol' Man is waiting your highness...",
    directions: {
      yes: "room3",
      no: "room0 torch",
    },
  },
  "room2 torch9": {
    description: "You won! The Wise ol' Man is waiting your highness...",
    directions: {
      yes: "room3",
      no: "room0 torch",
    },
  },
  "room1.5": {
    description: "I guess a nap then?",
    directions: {
      yes: "start",
      no: "room0",
    },
  },
  room3: {
    description: "I've been expecting you...",
    directions: {
      yes: "room7",
      no: "room4",
    },
  },
  room4: {
    description: "QUIET! (like Cobra Kai)",
    directions: {
      yes: "room7",
      no: "room5",
    },
  },
  room5: {
    description: "(dismissed)",
    directions: {
      yes: "entrance0",
      no: "room5 torch",
    },
  },
  "room5 torch": {
    description: "(The Wise ol' Man leaves)",
    directions: {
      yes: "entrance0",
      no: "room5 spear",
    },
  },
  "room5 spear": {
    description: "(guards prevent him from leaving)",
    directions: {
      yes: "room6",
      no: "room6",
    },
  },
  room6: {
    description:
      "Lesson 0 - The root of education is bitter, but the fruit is sweet.",
    directions: {
      yes: "room7",
      no: "entrance0",
    },
  },
  room7: {
    description:
      "Lesson 1: READ CAREFULLY - Knowing the self is the beginning of all wisdom...",
    directions: {
      yes: "room8 dead",
      no: "room4",
    },
  },
  room8: {
    description:
      "Lesson 3 - It is the mark of the educated mind to be able to entertain a thought without accepting it...",
    directions: {
      yes: "room8 dead",
      no: "room4",
    },
  },
  "room8 dead": {
    description:
      "Lesson 2: READ CAREFULLY - The aim of art is to represent not the outword appearance of things, but their inward significance.",
    directions: {
      yes: "room8 rock",
      no: "room4",
    },
  },
  "room8 rock": {
    description:
      "Test #1 (spelling counts) - Knowing the self is the beginning of all ________...",
    directions: {
      wisdom: "room8.5",
      yes: "room7",
      no: "room4",
    },
  },
  room9: {
    description:
      "Test #3 (spelling counts) - It is the mark of the educated mind to be able to entertain a thought without ___________ it...",
    directions: {
      accepting: "room8.5",
      yes: "room7",
      no: "room4",
    },
  },
  "room8.5": {
    description:
      "Test #2 (spelling counts) - The aim of art is to represent not the outword appearance of __________, but their inward significance.",
    directions: {
      things: "room10",
      yes: "room7",
      no: "room4",
    },
  },
  room10: {
    description: "That is all for our lessons today, well done.",
    directions: {
      yes: "room11",
      no: "room12",
    },
  },
  room11: {
    description: "..and you have learned respect, try typing ARCHERS.",
    directions: {
      yes: "room11",
      no: "room120",
    },
  },
  room12: {
    description:
      "Well that is sweet you would like to continue, try typing ARCHERS.",
    directions: {
      yes: "room12",
      no: "room120",
    },
  },
  room120: {
    description: "You will need these ARCHERS to fight for you.",
    directions: {
      yes: "room10",
      no: "room120",
    },
  },
  throne1: {
    description: "It's time to take your rightful place on the throne...",
    directions: {
      yes: "throne3",
      no: "throne3",
    },
  },

  throne3: {
    description: "Type THRONE to prove yourself worthy to lead...",
    directions: {
      yes: "throne3",
      no: "throne3",
    },
  },
  throne4: {
    description: "Outsmart your enemy!",
    directions: {
      yes: "throne4",
      no: "throne4",
    },
  },
  throne5: {
    description: "WE HAVE A NEW LEADER!!!",
    directions: {
      yes: "throne8",
      no: "throne8",
    },
  },
  throne7: {
    description:
      "Wake up...You must have been dreaming about your coronation day.",
    directions: {
      yes: "start",
      no: "start",
    },
  },
  throne8: {
    description: "Leading is not easy...",
    directions: {
      yes: "throne9",
      no: "throne9",
    },
  },
  throne9: {
    description: "...There are many challenges in our kingdom...",
    directions: {
      yes: "throne10",
      no: "throne10",
    },
  },
  throne10: {
    description: "...Trust your instincts...",
    directions: {
      yes: "throne11",
      no: "throne11",
    },
  },
  throne11: {
    description: "...and remember violence is not always the answer...",
    directions: {
      yes: "throne12",
      no: "throne12",
    },
  },
  throne12: {
    description: "Type RETURN to continue...",
    directions: {
      yes: "throne12",
      no: "throne12",
    },
  },
  "room12 torch": {
    description:
      "You use your torch but you can't tell where the scratching is coming from... You feel uneasy. Try <b>use spear</b>.",
    directions: {
      spear: "room12 spear",
    },
  },
  "room12 spear": {
    description:
      "Reaching for your spear, you feel a little better.  I should probably move forward (west) with caution.",
    directions: {
      east: "room11",
      west: "room13",
    },
  },
  room13: {
    description:
      "You have found the source of the water! It is coming out of the rocks.  <q>Was this the scratching noise I heard before?</q> You take a drink...You have never tasted water so pure.  You feel refreshed and it looks like the path continues north.",
    directions: {
      north: "room14",
      east: "room12 spear",
    },
  },
  room14: {
    description:
      "The echoes of the scratching gets louder. <q>I don't think that was the water.</q> You can hear the source of the scratching coming from a small hole to your east.",
    directions: {
      south: "room13",
      east: "very large room",
    },
  },
  "very large room": {
    description:
      "You wiggle your way through the hole and enter what appears to be the largest room in the cave. The scratching has grown loud. You feel like it’s in this room but it is difficult to see.",
    directions: {
      torch: "very large room torch",
    },
  },
  "very large room torch": {
    description:
      "You raise your torch...YOU SEE A GIANT CAVE BEAR! You quickly go over your options: <q>I can <b>go south</b> to attack, I could <b>go north</b> to get to higher ground, or I can flee back the way I came.</q>",
    directions: {
      south: "very large room south",
      north: "very large room north",
      west: "room14",
    },
  },
  "very large room south": {
    description:
      "The Cave Bear strikes! GAME OVER refresh your browser to restart cave exploration.",
    directions: {},
  },
  "very large room north": {
    description:
      "You move to higher ground, his eyes follow your movements. To the east you notice some cover or you can go south to attack.",
    directions: {
      east: "very large room east",
      south: "very large room south",
      west: "very large room torch",
    },
  },
  "very large room east": {
    description:
      "The Cave Bear lets out a large ROAR! He’s coming for you. This is your moment of truth...torch or spear?",
    directions: {
      torch: "very large room torch attack",
      north: "very large room north",
      spear: "very large room spear attack",
    },
  },
  "very large room spear attack": {
    description:
      "You take out your spear, but he swipes at you. You are stunned...torch or spear?",
    directions: {
      torch: "very large room torch attack",
      north: "very large room north",
      spear: "very large room south",
    },
  },
  "very large room torch attack": {
    description:
      "You swing your torch wildly at the bear and you catch a glimpse of fear in The Cave Bear’s eyes he turns away to flee back to the south of the room...torch or spear?",
    directions: {
      torch: "very large room torch",
      north: "very large room north",
      spear: "very large room win",
    },
  },

  //       let cultureNumber = 0;
  // let expandNumber = 0;
  // let wisdomNumber = 0;
  // let politicsNumber = 0;

  // case 0:
  //     currentRoom = storyArray[0] + cultureNumber
  //     break;
  //   case 1:
  //     currentRoom = storyArray[1] + expandNumber
  //     break;
  //   case 2:
  //     currentRoom = storyArray[2] + wisdomNumber
  //     break;
  //   case 3:
  //     currentRoom = storyArray[3] + politicsNumber
  //     break;

  culture0: {
    description: "The time has come to build a monument…",
    directions: {
      yes: "culture02",
      no: "culture01",
    },
  },
  culture01: {
    description: "A monument would make your citizens happy...",
    directions: {
      yes: "culture02",
      no: "next",
    },
  },
  culture02: {
    description: "We can build a monument to the gods…",
    directions: {
      yes: "culture03",
      no: "culture04",
    },
  },
  culture03: {
    description: "Type GODS to build your monument.",
    directions: {
      yes: "culture03",
      no: "culture04",
    },
  },
  culture04: {
    description: "We can build a monument to our fallen soldiers…",
    directions: {
      yes: "culture05",
      no: "culture06",
    },
  },
  culture05: {
    description: "Type SOLDIERS to build your monument.",
    directions: {
      yes: "culture05",
      no: "culture06",
    },
  },
  culture06: {
    description: "We can build a monument to you…",
    directions: {
      yes: "culture07",
      no: "culture01",
    },
  },
  culture07: {
    description: "Type ME to build your monument.",
    directions: {
      yes: "culture07",
      no: "culture01",
    },
  },
  culture1: {
    description: "The citizens have grown bored…",
    directions: {
      yes: "culture11",
      no: "culture10",
    },
  },
  culture10: {
    description: "You should get out more...",
    directions: {
      yes: "culture11",
      no: "next",
    },
  },
  culture11: {
    description: "We should hold a Great Games!",
    directions: {
      yes: "culture13",
      no: "culture12",
    },
  },
  culture13: {
    description: "With horseback riding!",
    directions: {
      yes: "culture15",
      no: "culture14",
    },
  },
  culture14: {
    description: "A gladiator battle?",
    directions: {
      yes: "culture16",
      no: "culture12",
    },
  },
  culture15: {
    description: "Type HORSERACE to prepare the horseraces!",
    directions: {
      yes: "culture15",
      no: "culture16",
    },
  },
  culture1500: {
    description: "You lost the race. Type RETURN to continue...",
    directions: {
      yes: "culture1500",
      no: "culture1500",
    },
  },
  culture1501: {
    description: "YOU WON! These horsemen will fight for you. Type RETURN to continue...",
    directions: {
      yes: "culture1500",
      no: "culture1500",
    },
  },
  culture16: {
    description: "Type GLADIATORS to prepare the gladiators!",
    directions: {
      yes: "culture16",
      no: "culture11",
    },
  },
  culture12: {
    description: "A festival then…",
    directions: {
      yes: "culture17",
      no: "culture10",
    },
  },
  culture17: {
    description: "Type FESTIVAL to prepare the festival!",
    directions: {
      yes: "culture16",
      no: "culture11",
    },
  },
  culture2: {
    description: "Our culture is thriving! We should spread to new lands!",
    directions: {
      yes: "culture22",
      no: "culture21",
    },
  },
  culture21: {
    description: "Expansion would make us more powerful...Should we expand?",
    directions: {
      no: "next",
      yes: "culture23",
    },
  },
  culture22: {
    description: "Expansion may cause more trouble...Should we expand",
    directions: {
      yes: "culture23",
      no: "culture2",
    },
  },
  culture23: {
    description: "A new lands are available! Type LANDS to unlock.",
    directions: {
      yes: "culture23",
      no: "culture2",
    },
  },
  culture24: {
    description: "We lost " + number + " troops to found our new city.",
    directions: {
      yes: "very large room torch",
      no: "very large room north",
    },
  },
  culture3: {
    description: "The citizens have grown bored…",
    directions: {
      yes: "culture31",
      no: "culture30",
    },
  },
  culture30: {
    description: "You should get out more...",
    directions: {
      yes: "culture31",
      no: "next",
    },
  },
  culture31: {
    description: "We should hold a Great Games!",
    directions: {
      yes: "culture33",
      no: "culture32",
    },
  },
  culture33: {
    description: "With horseback riding!",
    directions: {
      yes: "culture35",
      no: "culture34",
    },
  },
  culture34: {
    description: "A gladiator battle?",
    directions: {
      yes: "culture36",
      no: "culture32",
    },
  },
  culture35: {
    description: "Type HORSERACE to prepare the horseraces!",
    directions: {
      yes: "culture35",
      no: "culture36",
    },
  },
  culture36: {
    description: "Type GLADIATORS to prepare the gladiators!",
    directions: {
      yes: "culture36",
      no: "culture31",
    },
  },
  culture32: {
    description: "A festival then…",
    directions: {
      yes: "culture37",
      no: "culture30",
    },
  },
  culture37: {
    description: "Type FESTIVAL to prepare the festival!",
    directions: {
      yes: "culture36",
      no: "culture31",
    },
  },
  culture4: {
    description: "Culture Level 5",
    directions: {
      yes: "next",
      no: "next",
    },
  },
  expand0: {
    description: "Would you like to build a new settlement?",
    directions: {
      yes: "expand03",
      no: "expand01",
    },
  },
  expand01: {
    description: "Expansion would make us more powerful...Should we expand?",
    directions: {
      no: "next",
      yes: "expand03",
    },
  },
  expand04: {
    description:
      "Cut from story-Expansion may cause more trouble...Should we expand",
    directions: {
      yes: "expand03",
      no: "expand0",
    },
  },
  expand03: {
    description: "A new city is available! Type CITY to unlock.",
    directions: {
      yes: "expand03",
      no: "expand01",
    },
  },

  // Not sure if I want to use this mechanic

  //   "expand04": {
  //     "description": "We lost "+ number +" troops to found our new city.",
  //     "directions": {
  //         "yes": "very large room torch",
  //         "no": "very large room north"
  //     }
  // },
  expand1: {
    description: "There are problems in the empire.",
    directions: {
      yes: "expand12",
      no: "expand11",
    },
  },
  expand11: {
    description: "Shall we ignore them?",
    directions: {
      yes: "next",
      no: "expand12",
    },
  },
  expand12: {
    description: "We could send the army?",
    directions: {
      yes: "expand13",
      no: "expand14",
    },
  },
  expand13: {
    description: "Type UNREST, to send the army?",
    directions: {
      yes: "expand13",
      no: "expand14",
    },
  },
  expand14: {
    description: "We could send the Wise Ol’ Man?",
    directions: {
      yes: "expand15",
      no: "expand11",
    },
  },
  expand15: {
    description: "Type WISE, to send the Wise Ol’ Man?",
    directions: {
      yes: "expand15",
      no: "expand11",
    },
  },
  expand2: {
    description: "Invaders are on the doorsteps...",
    directions: {
      yes: "expand22",
      no: "expand21",
    },
  },
  expand21: {
    description: "Shall we ignore them then?",
    directions: {
      yes: "next",
      no: "expand22",
    },
  },
  expand22: {
    description: "Shall we fight?",
    directions: {
      yes: "expand23",
      no: "expand24",
    },
  },
  expand23: {
    description: "Type FIGHT, to send the army...",
    directions: {
      yes: "expand23",
      no: "expand24",
    },
  },
  expand24: {
    description: "Shall we form an alliance?",
    directions: {
      yes: "expand25",
      no: "expand2",
    },
  },
  expand25: {
    description: "Type ALLIANCE, to form an alliance...",
    directions: {
      yes: "very large room torch",
      no: "expand2",
    },
  },
  expand3: {
    description: "We are running out of land, we need to expand…",
    directions: {
      yes: "expand31",
      no: "expand34",
    },
  },
  expand34: {
    description: "Perhaps we can build up then",
    directions: {
      yes: "next",
      no: "expand3",
    },
  },
  expand31: {
    description: "Would you like to build a new settlement?",
    directions: {
      yes: "expand33",
      no: "expand32",
    },
  },
  expand32: {
    description: "Expansion would make us more powerful...Should we expand?",
    directions: {
      no: "next",
      yes: "expand0",
    },
  },
  expand33: {
    description: "Expansion may cause more trouble...Should we expand",
    directions: {
      yes: "expand35",
      no: "expand3",
    },
  },
  expand35: {
    description: "A new city is available! Type EMPIRE to unlock.",
    directions: {
      yes: "expand35",
      no: "expand32",
    },
  },
  expand36: {
    description: "We lost " + number + " troops to found our new city.",
    directions: {
      yes: "very large room torch",
      no: "very large room north",
    },
  },
  expand4: {
    description: "The enemy is getting close…",
    directions: {
      yes: "expand41",
      no: "expand42",
    },
  },
  expand41: {
    description: "We can demand tribute (money)...",
    directions: {
      yes: "expand42",
      no: "expand43",
    },
  },
  expand42: {
    description: "Type TRIBUTE to make a deal",
    directions: {
      yes: "expand42",
      no: "expand43",
    },
  },
  expand43: {
    description: "We can pay tribute (money)..",
    directions: {
      yes: "expand44",
      no: "expand45",
    },
  },
  expand44: {
    description: "Type TRIBUTE to make a deal",
    directions: {
      yes: "expand44",
      no: "expand45",
    },
  },
  expand45: {
    description: "We can go to war…",
    directions: {
      yes: "expand46",
      no: "expand47",
    },
  },
  expand46: {
    description: "Type BATTLE, to send the army?",
    directions: {
      yes: "expand23",
      no: "expand24",
    },
  },
  expand47: {
    description: "Shall we try to ignore them then?",
    directions: {
      yes: "next",
      no: "expand4",
    },
  },
  expand5: {
    description: "Expand level 6",
    directions: {
      yes: "next",
      no: "next",
    },
  },
  wisdom0: {
    description: "Our citizens have become unruly…",
    directions: {
      yes: "wisdom01",
      no: "wisdom01",
    },
  },
  wisdom011: {
    description: "Cut from story - You're right, they are perfect angels!",
    directions: {
      yes: "next",
      no: "wisdom01",
    },
  },
  wisdom01: {
    description: "We should display our rules on stone tablets…",
    directions: {
      yes: "wisdom02",
      no: "next",
    },
  },
  wisdom02: {
    description: "(of course we will have to teach them to read first)...",
    directions: {
      yes: "wisdom04",
      no: "wisdom021",
    },
  },
  wisdom021: {
    description: "You're right, why would they need to learn to read.",
    directions: {
      yes: "next",
      no: "next",
    },
  },
  wisdom03: {
    description: "We could build a great library…",
    directions: {
      yes: "wisdom04",
      no: "wisdom0",
    },
  },
  wisdom04: {
    description: "Type LIBRARY to build your Great Library",
    directions: {
      yes: "wisdom04",
      no: "wisdom0",
    },
  },
  wisdom1: {
    description: "A citizen would like to give you wisdom…",
    directions: {
      yes: "wisdom12",
      no: "wisdom11",
    },
  },

  wisdom11: {
    description: "Of course you are too busy for that...",
    directions: {
      yes: "next",
      no: "wisdom1",
    },
  },
  wisdom12: {
    description: "A story of a prophecy...",
    directions: {
      yes: "wisdom13",
      no: "wisdom11",
    },
  },
  wisdom13: {
    description: "...It is said that one day and young ruler will rise...",
    directions: {
      yes: "wisdom14",
      no: "wisdom11",
    },
  },
  wisdom14: {
    description: "...and lay claim over all known lands.",
    directions: {
      yes: "wisdom15",
      no: "wisdom11",
    },
  },
  wisdom15: {
    description: "Type PROPHECY to fullful your destiny.",
    directions: {
      yes: "wisdom15",
      no: "wisdom11",
    },
  },
  wisdom2: {
    description: "The Wise Ol' Man is back your Highness...",
    directions: {
      yes: "wisdom24",
      no: "wisdom23",
    },
  },
  wisdom23: {
    description: "Of course you are too busy for that...",
    directions: {
      yes: "next",
      no: "wisdom24",
    },
  },
  wisdom24: {
    description:
      "The educated differ from the uneducated as much as the living from the dead.",
    directions: {
      yes: "wisdom25",
      no: "wisdom294",
    },
  },
  wisdom25: {
    description: "A friend to all is a friend to none.",
    directions: {
      yes: "wisdom27",
      no: "wisdom294",
    },
  },
  wisdom26: {
    description: "He who has overcome his fears will truly be free.",
    directions: {
      yes: "wisdom27",
      no: "wisdom294",
    },
  },
  wisdom27: {
    description:
      "Test #1 (spelling counts) - The educated differ from the uneducated as much as the living from the ________...",
    directions: {
      dead: "wisdom28",
      yes: "wisdom27",
      no: "wisdom294",
    },
  },
  wisdom28: {
    description:
      "Test #2 (spelling counts) - A friend to all is a friend to ___________ ",
    directions: {
      none: "wisdom291",
      yes: "wisdom28",
      no: "wisdom294",
    },
  },
  wisdom29: {
    description:
      "Test #3 (spelling counts) - He who has overcome his ________ will truly be free.",
    directions: {
      fears: "wisdom291",
      yes: "wisdom29",
      no: "wisdom294",
    },
  },
  wisdom291: {
    description: "That is all for our lessons today, well done.",
    directions: {
      yes: "wisdom292",
      no: "wisdom293",
    },
  },
  wisdom292: {
    description: "..and you have learned respect, try typing KNOWLEDGE.",
    directions: {
      yes: "wisdom292",
      no: "wisdom293",
    },
  },
  wisdom293: {
    description:
      "Well that is sweet you would like to continue, try typing KNOWLEDGE.",
    directions: {
      yes: "wisdom293",
      no: "wisdom294",
    },
  },
  wisdom294: {
    description: "QUIET! (like Cobra Kai)",
    directions: {
      yes: "wisdom24",
      no: "next",
    },
  },
  wisdom3: {
    description: "A citizen would like to try and make you laugh…",
    directions: {
      yes: "wisdom311",
      no: "wisdom32",
    },
  },
  wisdom311: {
    description: "I have a joke for you...",
    directions: {
      yes: "wisdom31",
      no: "wisdom32",
    },
  },
  wisdom31: {
    description: "- Mortal fate is hard. You'd best get used to it. -",
    directions: {
      yes: "wisdom312",
      no: "wisdom33",
    },
  },
  wisdom312: {
    description: "You like my joke!!!",
    directions: {
      yes: "wisdom313",
      no: "wisdom331",
    },
  },
  wisdom313: {
    description: "Will you build a comedy school, I can do better!",
    directions: {
      yes: "wisdom314",
      no: "wisdom36",
    },
  },
  wisdom314: {
    description: "Type COMEDY to build the school",
    directions: {
      yes: "wisdom314",
      no: "wisdom36",
    },
  },
  wisdom33: {
    description: "Are you saying motal fate is easy!?",
    directions: {
      yes: "wisdom34",
      no: "wisdom331",
    },
  },
  wisdom331: {
    description: "Are you saying my joke isn't funny?",
    directions: {
      yes: "wisdom34",
      no: "very large room north",
    },
  },
  wisdom34: {
    description: "So you think you can do better?!",
    directions: {
      yes: "wisdom35",
      no: "very large room north",
    },
  },
  wisdom35: {
    description: "Type JOKE to write in your own joke.",
    directions: {
      yes: "wisdom35",
      no: "wisdom36",
    },
  },
  wisdom36: {
    description: "You're no fun :|",
    directions: {
      yes: "next",
      no: "next",
    },
  },
  wisdom32: {
    description: "Of course you are too busy for that...",
    directions: {
      yes: "next",
      no: "wisdom3",
    },
  },
  wisdom4: {
    description: "Wisdom level 5",
    directions: {
      yes: "next",
      no: "next",
    },
  },
  wisdom5: {
    description: "Wisdom level 6",
    directions: {
      yes: "next",
      no: "next",
    },
  },
  politics0: {
    description: "A local tyrant is rising in popularity…",
    directions: {
      yes: "politics02",
      no: "politics01",
    },
  },
  politics01: {
    description: "Shall we ignore them?",
    directions: {
      yes: "next",
      no: "politics02",
    },
  },
  politics02: {
    description: "We can give them more power…",
    directions: {
      yes: "politics05",
      no: "politics03",
    },
  },
  politics03: {
    description: "We can take power away…",
    directions: {
      yes: "politics04",
      no: "politics01",
    },
  },
  politics04: {
    description: "Type STOP, to stop the tyrant from gaining more power",
    directions: {
      yes: "politics04",
      no: "politics01",
    },
  },
  politics05: {
    description: "Type ENCOURAGE, to give the tyrant more power.",
    directions: {
      yes: "politics05",
      no: "politics01",
    },
  },
  politics1: {
    description: "Should we make contact with an outside community?",
    directions: {
      yes: "politics17",
      no: "politics16",
    },
  },
  politics16: {
    description: "Contacting Outsiders may help us grow, should I try?",
    directions: {
      yes: "politics17",
      no: "next",
    },
  },
  politics17: {
    description: "We have made contact, should I bring them in?",
    directions: {
      yes: "politics11",
      no: "politics16",
    },
  },
  politics11: {
    description: "Greetings, we are from a far away land...",
    directions: {
      yes: "politics18",
      no: "politics12",
    },
  },

  politics18: {
    description: "They have brought us a gift, shall we give them a gift?",
    directions: {
      yes: "politics19",
      no: "politics110",
    },
  },
  politics19: {
    description: "They loved your gift, type FRIENDS to stay in touch.",
    directions: {
      yes: "politics19",
      no: "politics13",
    },
  },
  politics110: {
    description: "They are offended.",
    directions: {
      yes: "next",
      no: "next",
    },
  },
  politics12: {
    description: "I asure you, land DOES exist outside your kingdom...",
    directions: {
      yes: "politics18",
      no: "politics13",
    },
  },
  politics13: {
    description: "Are you messing with me?",
    directions: {
      yes: "politics18",
      no: "politics110",
    },
  },

  politics14: {
    description: "The outsider has left",
    directions: {
      yes: "next",
      no: "politics15",
    },
  },
  politics15: {
    description: "YOU WILL PAY FOR TRAPPING ME HERE!!!",
    directions: {
      yes: "next",
      no: "next",
    },
  },
  politics2: {
    description: "Some foregn merchants would like to build a trading post…",
    directions: {
      yes: "politics22",
      no: "politics23",
    },
  },
  politics22: {
    description: "They will need some soldiers to defend it…",
    directions: {
      yes: "politics26",
      no: "politics25",
    },
  },
  politics23: {
    description: "Do you think these outsiders can be trusted?",
    directions: {
      yes: "politics2",
      no: "next",
    },
  },
  politics24: {
    description: "The trading post might benifit us too...",
    directions: {
      yes: "politics2",
      no: "next",
    },
  },
  politics25: {
    description: "I negotiated a lower price, should we build it now?",
    directions: {
      yes: "politics27",
      no: "next",
    },
  },
  politics26: {
    description: "Type TRADE to add a trading post?",
    directions: {
      yes: "politics26",
      no: "politics24",
    },
  },
  politics27: {
    description: "Type FREETRADE To add a cheaper trading post?",
    directions: {
      yes: "politics27",
      no: "next",
    },
  },
  politics3: {
    description: "A leadership council is being created…",
    directions: {
      yes: "politics34",
      no: "politics31",
    },
  },
  politics31: {
    description: "...I see your head is in the sand as usual...",
    directions: {
      yes: "politics33",
      no: "politics32",
    },
  },
  politics32: {
    description: "......",
    directions: {
      yes: "next",
      no: "next",
    },
  },
  politics33: {
    description: "At least you are honest",
    directions: {
      yes: "politics3",
      no: "next",
    },
  },
  politics34: {
    description: "Shall we attend?",
    directions: {
      yes: "politics35",
      no: "politics36",
    },
  },
  politics36: {
    description:
      "Being part of the council will help us keep an eye on our enemies, should we go?",
    directions: {
      yes: "politics35",
      no: "next",
    },
  },
  politics35: {
    description: "They would like to meet in our enemy's territory…",
    directions: {
      yes: "politics38",
      no: "politics37",
    },
  },
  politics37: {
    description: "Should we have them meet in our territory?",
    directions: {
      yes: "politics39",
      no: "politics36",
    },
  },
  politics38: {
    description: "Type EMBASSY to build a foregn embassy.",
    directions: {
      yes: "politics38",
      no: "politics3",
    },
  },
  politics39: {
    description: "Type HOST to host our enemies here.",
    directions: {
      yes: "politics39",
      no: "politics3",
    },
  },
  politics4: {
    description: "Democracy is achieved!!! Type DEMOCRACY to end the game.",
    directions: {
      yes: "politics4",
      no: "politics4",
    },
  },
  politics5: {
    description: "Politics level 6",
    directions: {
      yes: "next",
      no: "next",
    },
  },
  "very large room win": {
    description:
      "You strike with your spear. The Cave Bear is down. This hunt will feed your village for weeks. You have won cave exploration! Type in the code: artrocks to receive your prize.",
    directions: {},
  },
};

