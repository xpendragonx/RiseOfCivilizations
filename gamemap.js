let redScore;
let blueScore;

var ctx = null;
mapOff = true;
const cultureElement = document.getElementById("culture");
const enemyCultureElement = document.getElementById("enemyCulture");

var gameMap = [
         //Insert Level Code Here!!!
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0, 
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0, 
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0, 
0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0, 
0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0, 
0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0, 
0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1, 
0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1, 
0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1, 
0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1, 
0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1, 
1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1, 
1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1, 
1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1, 
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1, 
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1, 
0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1, 
0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1, 
0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1, 
0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1, 
1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1, 
0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1, 
0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0, 
0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0, 
0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0, 
0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0, 
0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0, 
0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0, 
0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0, 
0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0, 
0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0, 
0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0, 
0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0, 
0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0, 
0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0, 
0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0, 
0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0, 
0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0, 
0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0, 
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0, 
      

         // Insert Level Code Here!!!
   ];
var tileW = 5,
  tileH = 5;
var mapW = 40,
  mapH = 40;

function loadMap() {
  
  ctx = document.getElementById("game").getContext("2d");
  gameMapCanvas = document.getElementById("game");
  drawGame()
  if (gameMapCanvas.style.display === "none") {
    gameMapCanvas.style.display = "block";
  }
}

function drawGame() {
  if (ctx == null) {
    return;
  }
  let blueCount = 0;
  let redCount = 0;
  for (var y = 0; y < mapH; ++y) {
    for (var x = 0; x < mapW; ++x) {
      switch (gameMap[y * mapW + x]) {
        case 0:
          //Wall Color
          ctx.fillStyle = "black";
          //Wall Color
          break;
        case 1:
          //Wall Color
          ctx.fillStyle = "white";
          //Wall Color
          break;
        case 2:
          //Wall Color
          ctx.fillStyle = "blue";
          blueCount++
          //Wall Color
          break;
        case 3:
          //Wall Color
          ctx.fillStyle = "red";
          redCount++
          //Wall Color
          break;
        case 4:
          //Path Color
          ctx.fillStyle = "#088849";
          //Path Color
          break;
        case 5:
          //Fake Wall Color
          ctx.fillStyle = "#18ce75";
          //Fake Wall Color
          break;
        case 6:
          //Fake Wall Color
          ctx.fillStyle = "#d9d9d9";
          //Fake Wall Color
          break;
        case 7:
          //Fake Wall Color
          ctx.fillStyle = "#a77763";
          //Fake Wall Color
          break;
        case 8:
          //Fake Wall Color
          ctx.fillStyle = "#eece1a";
          //Fake Wall Color
          break;
        case 9:
          //Win Tile Color
          ctx.fillStyle = "#f15e22";
          //Win Tile Color
          break;
        case 10:
          //Fake Wall Color
          ctx.fillStyle = "black";
          //Fake Wall Color
          break;
      }
      
      ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
    }
  }
  
  cultureElement.innerHTML = blueCount;
  enemyCultureElement.innerHTML = redCount;
  blueScore = blueCount;
  redScore = redCount;
  
}

function fillMap(color) {
  //let colorCount = 0;
  let tempNumber = 0;
  var number = Math.floor(Math.random() * 800);
  for(i = 0;i < gameMap.length; i++) {
    if (gameMap[i] == 1) {
      tempNumber++
      if(tempNumber == number) {
        gameMap[i] = color
      }
    }
    if (gameMap[i] == color) {
      //colorCount++
    }
  }
  drawGame()
  //console.log(colorCount)
}

function growCity(color) {
  //let colorCount = 0;
  let tempArray = []
  for(i = 0;i < gameMap.length; i++) {
    if (gameMap[i] == color && gameMap[i+1] == 1) { 
      tempArray.push(i+1)
    }
    if (gameMap[i] == color && gameMap[i-1] == 1) { 
      tempArray.push(i-1)
    }
    if (gameMap[i] == color && gameMap[i-40] == 1) { 
      tempArray.push(i-40)
    }
    if (gameMap[i] == color && gameMap[i+40] == 1) { 
      tempArray.push(i+40)
    }
  }
  for(j = 0;j < tempArray.length; j++) {
    let k = tempArray[j]
    gameMap[k] = color    
    //console.log(tempArray[j])
  }  
  drawGame()
  //console.log(colorCount)
}

fillMap(2)
fillMap(3)



