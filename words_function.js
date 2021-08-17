// __Author__ __Lencof__
// words_function.js

var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

var randomWords = ["Planet", "Lopo", "Apple", "Bleu"];

pickRandomWord(randomWords);
