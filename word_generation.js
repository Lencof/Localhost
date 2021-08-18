// __Author__ __Lencof__
// word_generation.js

var randomBodyParts = ["eye", "nose", "scull"];
var randomAdjectives = ["smelly", "dull", "stupid"];
var randomWords = ["fly", "otter", "дубина", "monkey", "rat"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];

var randomInsult = "At your place " + randomBodyPart + " as if " + randomAdjective + " " + randomWord + "!!!";
randomInsult;
