var x = 1, m = 0, n = 5, q = 9, a = 8;
let y = 2;
const z = 3;

function foo() {
  for (var i = 0; i < 10; i++) {
    a++;
    console.log(i);
  }
}

console.log(x, y, z);
