let a=1;
++a;
a=++a;
let b=2;
b=++a + ++b;
++b;
console.log(a);
console.log(b);