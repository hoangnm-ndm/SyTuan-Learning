function hello(name = "ban") {
  console.log(`Hello, ${name}!`);
}

/**
 * * DOM Manipulation - thao tác DOM là tác động vào nội dung của website (bao gồm cả text và style) thông qua các phương thức của DOM API.
 * Bước 1: Tìm, truy vấn đề phần tử.
 * Bước 2: Sinh nội dung mới nếu cần.
 * Bước 3: Thay đổi nội dung của phần tử.
 */

// const btnElement = document.getElementById();
// const btnElement = document.getElementsByClassName();
// const btnElement = document.querySelector();
// const btnElement = document.querySelectorAll();

const btnElements = document.getElementsByTagName("button");
console.log(btnElements);
console.log(Array.isArray(btnElements));

for (let i = 0; i < btnElements.length; i++) {
  btnElements[i].style.backgroundColor = "red";
}

/**
 * Kiến thức nền tảng của lập trình (ngôn ngữ lập trình nào cũng gặp)
 * - khai báo biến.
 * - kiểu dữ liệu
 * - phân phát bộ nhớ, dữ liệu tham chiếu.
 * - cấu trúc rẽ nhánh
 * - vòng lặp
 * - function/class
 * - ESM (ECMAScript Module)
 * - Tính kế thừa, phương thức (Object, Array)
 */

// * pseu-do code
// if 3>2 print("3 thi lon hon 2")
