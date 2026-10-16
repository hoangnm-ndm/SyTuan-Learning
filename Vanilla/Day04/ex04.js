/**
 * * HTML DOM = Document Object Model - mô hình hoá tài liệu HTML dạng đối tượng
 * * DOM Tree là mô hình DOM dạng cây.
 * * DOM có 3 loại node chính: Element Node (Node phần tử - thẻ HTML), Attribute Node (Node thuộc tính), Text Node (Node nội dung)
 * * 1. Các thao tác chung
 * * 2. Các thao tác với Element Node
 * * 3. Các thao tác với Attribute Node
 * * 4. Các thao tác với Text node
 */

console.log({ body: document.body });

const pElement = document.createElement("p");
pElement.innerText = "noi dung doan van";
document.body.appendChild(pElement);

const btnElement = document.getElementById("btn");

// setTimeout(() => {
//   document.body.removeChild(btnElement);
// }, 3000);

/**
 * * Các thao tác truy vấn HTML Node
 */

const btnElement1 = document.getElementById("btn");
// * id = identify
const btnElement2 = document.getElementsByTagName("button")[0];
const btnElement3 = document.getElementsByClassName("login-btn")[0];
const btnElement4 = document.querySelector("button#btn.login-btn");
const btnElement5 = document.querySelectorAll("button#btn.login-btn")[0];
console.log(btnElement1, btnElement2, btnElement3, btnElement4, btnElement5);
btnElement1.innerText = "Login Now!";
