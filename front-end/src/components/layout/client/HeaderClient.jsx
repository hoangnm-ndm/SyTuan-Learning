import React from "react";
import { Link } from "react-router";

const HeaderClient = () => {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/policy">Policy</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderClient;
