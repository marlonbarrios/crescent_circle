const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()





const settings = {

  pixelsPerInch: 300,
   // Tell canvas-sketch we're using p5.js
   p5: true,
   // Turn on a render loop (it's off by default in canvas-sketch)

   duration: 3,

    animate: false,
 
    // We can specify dimensions if we want a fixed size on the first render
    dimensions:[512, 512],
    // orientation: 'landscape',
    bleed: 1 / 8,
    // attributes: {
    // antialias: true
    // }
};


canvasSketch(() => {
  
angleMode(DEGREES);
  // colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);

  noStroke();

  return ({ width, height }) => {
clear();
  
    linearGradient(
    width/2-200, height/2, //Start point
    width/2+200, height/2, //End point3
     color(0, 0, 0), //Start color
    color(255, 255,255), //End color
  );
  circle(width/2, height/2, 450, 450, 50);
}

function linearGradient(sX, sY, eX, eY, colorS, colorE){
  let gradient = drawingContext.createLinearGradient(
    sX, sY, eX, eY
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
}
},  settings);
