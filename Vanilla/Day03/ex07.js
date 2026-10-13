//* Declaration Function = hàm tường minh (hàm khai báo)
console.log(sum(10, 20));
function sum(a, b) {
  let c = a + b;
  // console.log(c);
  return c;
  console.log("hello");
}

/** default parameter */
function hello(name = "ban") {
  console.log(`hello ${name}`);
}

hello("Tuan");
hello();

function total() {
  console.log(arguments);
  //* là 1 iterator object
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
    sum += arguments[i];
  }
  return sum;
}

console.log({ total: total });

console.log(total(1, 2, 4, 5));

// Đây là toán tử rest - không arguments của hàm.
function myFunc(...args) {
  console.log(args);
  return args.reduce((acc, cur) => (acc += cur));
}

console.log(myFunc(10, 100, 1000));
