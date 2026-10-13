// "use strict";

/**
 * Bước 1:
 */

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 3;
// for (;;) {
//   if (i <= 5) {
//     console.log(i++);
//   } else {
//     break;
//   }
// }
/**
 * * Bước 1: Khai báo biến đếm i
 * * Bước 2: Kiểm tra điều kiện đúng (sai thì thoát luôn).
 * * Bước 3: Nếu điều kiện đúng: thực hiện khối lệnh và bước nhảy. Quay lại bước 2.
 */

// let i = 1;
// while (i <= 10) {
//   console.log(i++);
// }

// do {
//   console.log(i++);
// } while (i <= 0);

/**
 * * Hãy in ra các số chẵn từ 1 đến 10.
 */

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  } else {
    console.log(i);
  }
}
