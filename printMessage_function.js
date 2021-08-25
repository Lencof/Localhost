// __Author__ __Lencof__
// printMessage_function.js

var counter = 1;

var printMessage = function () {
  console.log("You are already looking at the console " + counter + " sec");
  counter++;
};

var intervalId = setInterval(printMessage, 1000);

// You are already looking at the console 1 sec
// You are already looking at the console 2 sec
