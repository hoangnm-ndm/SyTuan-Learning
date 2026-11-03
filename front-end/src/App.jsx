import { useState } from "react";
import "./App.css";

const cart = {
  items: [],
  amount: 0,
  total: 0,
};

function useState(inititalState) {
  let state = inititalState;
  function setState(state) {
    // * cap nhat gia tri cua state
    // * trigger re-render component có chứa state
  }
  return [state, setState];
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // count = count + 1;
    // console.log(count);
    // const countElement = document.getElementById("count");

    // // * 1000 dòng HTML
    // countElement.innerText = count;
    // Cách 1: sử dụng useState với biểu thức hoặc giá trị
    // setCount(count + 1);
    // setCount(count + 10);
    // setCount(count + 100);
    // logic thay đổi state đơn giản, dự đoán được, biết trước kết quả

    // Cách 2: sử dụng useState với callback
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 10);
    setCount((prev) => prev + 100);
    // previous;
    // truyền callback khi logic tính toán state phức tạp, chưa nắm được trạng thái hiện tại state
  };

  console.log("re-render");
  return (
    <>
      <p id="count">{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default App;
