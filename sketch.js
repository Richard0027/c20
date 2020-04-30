
var r = 100;
var g = 255;
var b = 60;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
background(r, g, b);

 Fill(250,118,222);
ellipse(mouseX,200,64,64);

r = map(mouseX, 190, 400, 200, 205);
g = map(mouseX, 70, 400, 20, 220);
b = map(mouseX, 200, 400,200, 220);
// change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}
