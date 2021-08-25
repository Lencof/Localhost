// __Author__ __Lencof__
// printMessage_function.js

var counter = 1;

var printMessage = function () {
  console.log("You are already looking at the console " + counter + " sec");
  counter++;
};

var intervalId = setInterval(printMessage, 1000);
