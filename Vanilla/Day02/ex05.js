/**
 * <=4 -> "Yeu"
 * >4, <= 6: "TB",
 * <6, <=8: "Kha",
 * >8: "Gioi"
 */

let score = 7;
if (score <= 4) {
  console.log("Yeu");
} else if (score <= 6) {
  console.log("TB");
} else if (score <= 8) {
  console.log("Kha");
} else {
  console.log("Gioi");
}

switch (3 > 2) {
  case true:
    console.log("3 lon hon 2");
    break;
  default:
    console.log("3 khong lon hon 2");
}

switch (true) {
  case score <= 4:
    console.log("Yeu");
    break;
  case score <= 6:
    console.log("TB");
    break;
  case score <= 8:
    console.log("Kha");
    break;
  default:
    console.log("Gioi");
}

/**
 * Bai 1, bai 9, bai 10
 */

let input = window.prompt("hoi 1 cau hoi");
console.log(Number(input));

function calcBMI(cm, kg) {}
