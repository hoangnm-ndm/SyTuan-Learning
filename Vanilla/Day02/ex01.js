/**
 * Khai bao bien
 */
console.log(a);
var a;
{
  {
    {
      {
        {
          var a = 10;
        }
        console.log(a);
        var a = "Trung";
      }
    }
  }
}

var a = "Hoang";
console.log(a);
/**
 * var:
 * - khai báo lại được. (thiếu an toàn/không chặt chẽ)
 * - Hoạt động ở global - tầm hoạt động rộng -> khó kiểm soát.
 * - Hoisting khai báo: lời khai báo được đưa lên trên cùng của phạm vi hoạt động.
 *
 */

// ECMAscript 6 (2015)

// biến
let b = 10;
b = "Hoang";
{
  // console.log(x);
  let x;
  x = 100;
  {
    {
      console.log(x);
    }
  }
}

// hằng số
const pi = undefined;
// pi = 3.16;

/**
 * ! let:
 * * Không thể khai báo lại.
 * * Vùng hoạt động là block-scope
 * * Hoisting: khai báo với let và const thì biến bị rơi vào TDZ
 *
 * ! const:
 * - có các đặc điểm giống let, tuy nhiên:
 * - cần gán gía trị ngay khi khai báo.
 * - không thay đổi được.
 */
