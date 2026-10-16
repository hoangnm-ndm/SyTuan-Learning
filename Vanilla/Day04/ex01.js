/**
 * Buổi 4:
 * Generate function: yeild
 * callback function
 * async function
 * IIFE: Immediately Invoked Function Expression
 *
 * DOM ->
 * Làm một bài toán về DOM thuần
 * fetch
 *
 * Buổi 5: NodeJS
 */

// function* generatorSequence() {
//   // logic
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = generatorSequence();
// console.log(gen.next()); // {value: 1, done: false}
// console.log(gen.next()); // {value: 1, done: false}
// console.log(gen.next()); // {value: 1, done: false}
// console.log(gen.next()); // {value: 1, done: false}

// * callback
function taskA(callback) {
  console.log("task A doing");
  //* Công việc A này mất 2s để làm dẫn đến bất đồng bộ và nó hoàn thành xong sau cả công việc B. ()
  //* Nếu việc B cần việc A làm xong mới bắt đầu thì phải đồng bộ lại
  setTimeout(() => {
    console.log("task A done");
    callback();
  }, 2000);
  // 2000 ms
}
/**
 * * WEB API (Application Programming Interface = Giao diện lập trình ứng dụng)
 * * Bộ tiêu chuẩn, quy ước, nguyên tắc để các phần mềm có thể giao tiếp, trao đổi với nhau.
 */

function taskB(callback) {
  console.log("task B doing");
  console.log("task B done");
  callback();
}

function taskC() {
  console.log("task C");
}

// taskA();
// taskB();

taskA(() => taskB(taskC));
// * callback hell là tình trạng lạm dụng kỹ thuật callback để lồng nhau nhiều công việc cần xử lý tuần tự dẫn đến code khó đọc, khó bảo trì.
// ? -> Dùng promise, hoặc async/await

const numbers = [1, 2, 3, 4];

const result = numbers.map((item) => item * 2);
console.log(result);
// Array.prototype.map2 = function() {
// }
