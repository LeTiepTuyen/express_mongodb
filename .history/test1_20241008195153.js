var a = 12;
var b = 20;

if (a < b) {
  let tmp = a;
  a = b;
  b = tmp;
}

// document.write(a);
// document.write(b);
// document.write(tmp); // ReferenceError: tmp is not defined

console.log(a); // 20
console.log(b); // 12
console.log(tmp); // ReferenceError: tmp is not defined
