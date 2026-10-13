// for (let i = 2; i <= 9; i++) {
//   for (let j = 2; j <= 9; j++) {
//     console.log(`${i} * ${j} = ${i * j} \n`);
//   }
//   console.log("-----------");
// }
// console.log("*".repeat(10));

function printTrigangle(n, character = "*") {
  for (let i = 0; i < n; i++) {
    // C1:
    // console.log(character.repeat(i) + `\n`);

    // C2:
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += character;
    }
    console.log(`${str} \n`);
  }
}

printTrigangle(5, "t");
