import React from "react";

const HeaderClient = () => {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/policy">Policy</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderClient;
