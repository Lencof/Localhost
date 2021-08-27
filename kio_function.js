// __Author__ __Lencof__
// kio_function.js

function kio(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

   console.log(arguments[2]);
  // expected output: 3
}

kio(1, 2, 3);
/*
1
2
3
*/
