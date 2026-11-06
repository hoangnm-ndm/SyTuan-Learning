import React from "react";
import { Link } from "react-router";

const SidebarAdmin = () => {
  return (
    <div style={{ flex: "1 1 200px" }}>
      <nav>
        <ul>
          <li>
            <Link to="">Dashboard</Link>
          </li>

          <li>
            <Link to="products">Products</Link>
          </li>

          <li>
            <Link to="users">Users</Link>
          </li>

          <li>
            <Link to="categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
