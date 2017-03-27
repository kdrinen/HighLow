var currentNumber = 0;
var previousNumber = 0;
var scoreNumber = 0;
var highScore = 0;


function setup() {

 createCanvas(windowWidth,windowHeight);

}

function draw() {

  background(0);
  textFont("Avant Garde")

  textSize(30);
  textAlign(CENTER);
  fill(255);
  text("Will the Next Number be Higher or Lower?",width/2,height/10);


  textSize(18);
  textAlign(CENTER);
  fill(255);
  text("Press the Up Arrow to Select 'Higher' ",width/2,height/2+200);

  textSize(18);
  textAlign(CENTER);
  fill(255);
  text("Press the Down Arrow to Select 'Lower' ",width/2,height/2+230);

  textSize(10);
  textAlign(CENTER);
  fill(255);
  text("**Number Range from 1 to 20**",width/2,height/2+290);


  // Shown Number
  textSize (80);
  textAlign(CENTER);
  fill(255);
  text(int (currentNumber), width/2,height/2+10);


  fill(255);
  textSize(22);
  textAlign(LEFT);
  text(int (scoreNumber),width/20+60,height/2-25);
  textSize(22);
  text("Score:",width/20,height/2-25);



  fill(255);
  textSize(18);
  textAlign(LEFT);
  text(int (highScore),width/20+90,height/2+25);
  textSize(18);
  text("High Score:",width/20,height/2+25);



}



function keyReleased(){
    previousNumber = currentNumber;
    currentNumber = round(random(1,20))

if (keyCode === UP_ARROW && currentNumber > previousNumber) {
    scoreNumber++
    fill(255)
    text("Correct!",width/15,height/8)

  } else if (keyCode === UP_ARROW && currentNumber < previousNumber) {
    scoreNumber=0
    fill(255)
    text("Nope...Try Again!",width/15,height/8)
  }

if (keyCode === DOWN_ARROW && currentNumber < previousNumber) {
  scoreNumber++
  text("Correct!",width/2,height/8)
} else if (keyCode === DOWN_ARROW && currentNumber > previousNumber) {
  scoreNumber=0
  text("Nope...Try Again!",width/2,height/8)
  }
  if (keyCode === UP_ARROW && currentNumber == previousNumber) {
    scoreNumber++
    text("Free Point for Doubles!",width/2,height/8)
    }
    if (scoreNumber > highScore){
      highScore = scoreNumber
    }


    console.log("current number is " + currentNumber);
    console.log("previous number is " + previousNumber);
    console.log("score=" + scoreNumber);
    console.log("best=" + highScore);
}


  if (highScore < scoreNumber) {
    highScore = scoreNumber;
  } else {
    highScore = highScore;
  }
