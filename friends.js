// __Author__ __Lencof__
// friends.js

var anna = { name: "anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "dave", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "kate", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];

friends[0];
// { name: "anna", age: 11, luckyNumbers: [2, 4, 8, 16] };

friends[1];
// { name: "dave", age: 5, luckyNumbers: [3, 9, 40] };

friends[2];
// { name: "kate", age: 9, luckyNumbers: [1, 2, 3] };

friends[2].name
// "kate"

friends[1].name
// "dave"

friends[0].name
// "anna"

friends[0].luckyNumbers[0]
// 2

friends[1].luckyNumbers[0]
// 3
