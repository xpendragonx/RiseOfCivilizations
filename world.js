const line1Element = document.getElementById("line1");
const line2Element = document.getElementById("line2");

const caveExplorationJump = document.getElementById("caveExplorationJump")

let biome = false;
let hungerBiomeSpeed =350;
// 500
// 1000
let animationInterval;

let biomePosition = 6
let jumpPosition = line2Element
let jumping = false

let joustEvent = false;
let horseraceEvent = false;

let biomeArray3 = 
'                                                                                                    ####     ---    -     ---   ---- ###     #          ####     ###      ' +
'   ######         #         ###               ########                  ####           _    A   wwA    __  / \\    A__/\\  %\\  A  _/-              _  /-  A  A  /\\/\\/\\ A /\\/\\ /\\       '+
'          /-      /-  /\\%\\ /\\/\\/\\A /\\/\\A/\\ %\\/\\/\\/\\ /\\A/\\                                                _         ....            <<>> <<>> <<o>   <>  <<>> <<o> <<>>           <<>>'+
'  <<>>    <___________> <___________>@@@@@<======><_______>@@@@@@@@<===>@@@@@@@@##||##||##||##||##@@@@@@@@ ///////  \\\\\\\\\\\\\\\\        @@@@@@@@           @@@@@@@@    //////#########\\\\\\\\\\\\ '+
'           ~~~~~ ~~~~~~~~~~~~  ~~~~~ ~~~~~~~~  --(((O)))-- ~~~~ ~~~~~~~~  ~~~~~ ~~~~~~~~    /////////////|||\\\\\\\\\\\\\\\\\\\\\\M M M M M M M M M M M M M M M M M M M M M=M=M=M=M=M=M=M=M=M=M=M='

let biomeArray4 = 
'_#________#________#____.../.........#....\\....$........#....../..||..../\\.......#....##..#.....#....||....$.......|.....||...#.....#...#...w...||.w.w.$.|..wW.Ww'+
'...wW||Ww.w...w.w.##wwwwwwwww|ww..w..www/\\.www.$.||wwwww...WW/\\...WWWww..|.w.w..WWWWWW/ \\WWW|WW/   \\ww/  \\$   \\ww/     \\/  \\/ \\/   \\w~~~~~~~~~~w/ \\/  \\,| $|,,][][][,|,][][,][(~~~~~~'+
'~~~~~)/\\_/  \\_/\\_/  \\,][][ ][][][| ][][|][ ][][][][ ][|][~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<-$->~~~~~~~~~~~~/ \\~~~~~~~/    \\~~~~cC......][...][...][...<<$>>..][...][...][...><><..>.<.][<'+
'<>>][qp@ @ qp | |qp   @@@ qp | |  qp  ] [    | |  qp | |     ]  [    |    ]  [####||##||##||##||### ]  [ $/////// () \\\\\\\\\\\\\\\\www,,wwww] $[WWWww,,,,wwW,ww]  [Wwww,//////###########\\\\\\\\\\\\'+
'..$.))~~ ~~~~~~~~~~~~~~ ~~~~~~~~ ~~~~~~~~ ~~~~~~~/~/~\\~\\~~~~~~~~~$~~~~~~~~ ~~~~~~~~ ~~~~~~~/////////////|||||\\\\\\\\\\\\\\\\\\\\\\W W W W W W W W W W W W W W W W W W W W W W=W=W=W=W=W=W=W=W=W=$'


let biomeArray1 = 
'                        '
    


let biomeArray2 =
'________________________'


let caveDrawing = [
  '(_)____  |',
  '      /_ |',
  '      ___|',
  '   ___\\  * ',
  ' ___  ',
  ' \\ /   ',
  ' | |___   ',
  ' |    /_  |',
  '__($)_____|',
  '  ___  ',
  '  \\ /  ',
  '  | |     |',
  '__ \\/    |',
  ' /___    *|',
  '    /___  |',
  '       __ |',
  '       \\| |',
  '       || /',
  '       ___|',
  '       \\  ',
  '      _|  ',
  '_($)__\\   ',
  ' ___      ',
  ' \\ |      ',
  '_  /      ',
  '__ \\     |',
  '|____      ',
  '    /_     ',
  '  _____   ',
  '| \\  */  |',
  '| |   |  |',
  '\\_    |  |',
  '| \\_  |  |',
  '|   \\___ |',
  '|_| ($)___|',
  '|*| __\\***',
  '|_______ *|',
  '|____ ____|',
  '|** ___ **|',
  '|   \\ /   |',
  '|____ ____|',
  ' \\  ___  /',
  '  | | ||  ',
  '  ___|_ __| ',
  '  | |*| | ',
  ' _| |*|__ |',
  '_ | |*| | ',
  ' __ |*| | ',
  ' || |*| | ',
  ' || |*| | ',
  '_ | |*| | ',
  '|_____ ___|',
  '_$$$$$____|',
  '           ',
  '           '
]

// Cave Exploration Start

// Cave Exploration variables
let playerPosition = 1;
let tempFloor = 0;
let caveDrop;
let upgrade1 = false;
let upgrade2 = false;
let upgrade3 = false;
let upgrade4 = false;

const fiberLine1Element = document.getElementById("fiberLine1");
const fiberLine2Element = document.getElementById("fiberLine2");
const fiberLine3Element = document.getElementById("fiberLine3");

const caveExplorationMoveLeftElement = document.getElementById(
  "caveExplorationMoveLeft"
);
const caveExplorationMoveRightElement = document.getElementById(
  "caveExplorationMoveRight"
);

function findTreasure() {
  console.log("Treasure Found!!!")
}

function fallToDeath() {
  // test stop biome
  runAnimationInterval() 
    // test stop biome
    fiberLine2Element.style.color = "red";
    fiberLine1Element.innerText = ' '
    fiberLine2Element.innerText = 'You fell from a high place'
    fiberLine3Element.innerText = ' '
    console.log('you fell to your death')
    playerPosition = 1;
    tempFloor = 0;
}

function runCaveExploration() {
  // test stop biome
  clearInterval(animationInterval);
    // test stop biome
  fiberLine2Element.style.color = "white";
  caveExplorationTest();
  caveExplorationMoveLeftElement.style.visibility = "visible";
  caveExplorationMoveRightElement.style.visibility = "visible";
}

function caveExplorationTest() {
  let tempString = [];  
  for (var i = 0; i < caveDrawing[tempFloor].length; i++) {
    if (i == playerPosition) {
      tempString.push("I");
    } else {
      tempString.push(caveDrawing[tempFloor][i]);
    }
    fiberLine1Element.innerText = tempString.join('');
    fiberLine2Element.innerText = caveDrawing[tempFloor+1]
    fiberLine3Element.innerText = caveDrawing[tempFloor+2]
  }
}

// Cave Exploration End

// Start Biome


caveExplorationJump.addEventListener("click", () => { 
  let myTimeout = setTimeout(() => {jumping = false}, hungerBiomeSpeed*2);
  jumping = true
  //jumpPosition = line1Element
})

function startBiome() {
  biome = true;
  line1Element.innerText = biomeArray1;
  line2Element.innerText = biomeArray2;
}

function runBiome() {  
    if (biomeArray3[0] === undefined) {
        biomeArray3 = biomeArray3Origional
        biomeArray4 = biomeArray4Origional
      }
    biomeArray1 = biomeArray1.substring(1);   
    biomeArray1 = biomeArray1.concat(biomeArray3[0]);
    biomeArray3 = biomeArray3.substring(1);
    if (jumping) {
      let tempString = [];  
      for (var i = 0; i < biomeArray1.length; i++) {
        
        if (i == biomePosition) {
          tempString.push("M");
        } 
        else if (i == biomePosition+1) {
          if (biomeArray1[i] === "#" || biomeArray1[i] === "/" || biomeArray1[i] === "\\" || biomeArray1[i] === "-"){
            

          }
          tempString.push("e");
        } else {
          tempString.push(biomeArray1[i]);
        }
      }
    line1Element.innerText = tempString.join('');
    } else {
      line1Element.innerText = biomeArray1; 
    }
        
    biomeArray2 = biomeArray2.substring(1);
    biomeArray2 = biomeArray2.concat(biomeArray4[0]);
    biomeArray4 = biomeArray4.substring(1);
    if (jumping) {
      line2Element.innerText = biomeArray2;
    } else {
      let tempString = [];  
      for (var j = 0; j < biomeArray2.length; j++) {
        if (j == biomePosition) {
          tempString.push("M");
        } 
        else if (j == biomePosition+1) {
          if (biomeArray2[j] === "#" || biomeArray2[j] === "\\" || biomeArray2[j] === "-"){
            clearInterval(animationInterval)
            biome = false
            horseCrash()
          }
          if (biomeArray2[j] === "/"){
            caveExplorationJump.click()
          }
          if (biomeArray2[j] === "$"){
            clearInterval(animationInterval)
            biome = false

            defenderHorsemen = defenderHorsemen + 5;
            soldiers = 5;
            defenderHorsemenElement.innerText = defenderHorsemen
            horseFinish()
            declareWinner.innerText = "+5 Horsemen!"
            document.getElementById("horsemenText").style.visibility = "visible"
  defenderHorsemenBtnElement.style.visibility = "visible"
          }
          tempString.push("e");
        } else {
          tempString.push(biomeArray2[j]);
        }
      }
      line2Element.innerText = tempString.join('');
    }    
}

function horseFinish() {
//   let joustEvent = false;
// let horseraceEvent = false;
  if (joustEvent) {
    joustEvent = false;
  currentRoom = "room0 torch0"
  $("#game-text").hide().text( rooms[currentRoom].description).fadeIn(1000);
}
  if (horseraceEvent) {
    horseraceEvent = false;
    defenderHorsemen = defenderHorsemen + 5;
  defenderHorsemenElement.innerText = defenderHorsemen;
      currentRoom = "culture1501"
  $("#game-text").hide().text( rooms[currentRoom].description).fadeIn(1000);
      }
}

function horseCrash() {
  if (joustEvent) {
    joustEvent = false;

  currentRoom = "room0 torch3"
  $("#game-text").hide().text( rooms[currentRoom].description).fadeIn(1000);
  }
  if (horseraceEvent) {
    horseraceEvent = false;      
      currentRoom = "culture1500"
  $("#game-text").hide().text( rooms[currentRoom].description).fadeIn(1000);
      }
}


//startBiome()


