// these are the variables you can use as inputs to your algorithms

// --> remove this once you want to publish your patch <--
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()
// --> remove this once you want to publish your patch <--

// note about the fxrand() function
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

// ----------------------
// defining features
// ----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]

window.$fxhashFeatures = {
  "Background": "Black",
  "Number of lines": 10,
  "Inverted": true
}

function setup() {
  // create square canvas
  createCanvas(windowHeight, windowHeight);
}

// resize window if window size changes
function windowResized() {
  resizeCanvas(windowHeight, windowHeight)
}

function draw() {
  background(220);
  fill("black");
  textAlign("center");
  // use fxhash as a variable anywhere:
  // use to print fxhash in the canvas
  text(`fxhash: ${fxhash}`,width/2,height/2-10);
  // use to print fxrand() to the canvas
  text(`fxrand(): ${fxrand()}`,width/2,height/2+10);
}
