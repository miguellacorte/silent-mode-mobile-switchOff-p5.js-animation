let switchX;
let switchY;
let switchWidth = 28;
let switchHeight = 3;
let switchDirection = 'UP'; // Possible values: "UP", "DOWN"
let lastSwitchTime;

function setup() {
  createCanvas(400, 100);
  switchX = width / 3;
  switchY = height / 2;
  lastSwitchTime = millis();
}

function draw() {
  background(255);
  
  // Draw text
  fill(0);
  textSize(16);
  text("Turn silent mode off", 10, 20);
  
  // Draw iPhone Switch background
  fill(255);
  stroke(0);
  rect(switchX - 50, height / 2 - 10, 300, 20, 8);
  
  // Draw orange square
  fill(206, 87, 56);
  rect(switchX - switchWidth / 2, height / 2 - 2, switchWidth, switchHeight);
  
  fill(161);
  rect(switchX + switchWidth + 5, height / 2 - 2, switchWidth, switchHeight);
  
   fill(161);
  rect(switchX + switchWidth + 40, height / 2 - 2, switchWidth, switchHeight);
  
  // Draw iPhone Switch toggle (always gray)
  fill(242, 242, 242);
  stroke(0)
  rect(switchX - switchWidth / 2, switchY, switchWidth, switchHeight);
  
  // Control the timing for the switch toggle
  if (millis() - lastSwitchTime > 1000) {
    // Animate the switch toggle
    if (switchDirection === 'UP') {
      switchY -= 1;
      if (switchY <= height / 2 - 1) {
        switchDirection = 'DOWN';
        lastSwitchTime = millis();
      }
    } else {
      switchY += 1;
      if (switchY >= height / 2 + 1) {
        switchDirection = 'UP';
        lastSwitchTime = millis();
      }
    }
  }
}
