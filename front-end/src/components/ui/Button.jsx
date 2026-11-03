import React from "react";

const sizeOptions = {
  big: { padding: "24px 48px", fontSize: "24px", fontWeight: 800 },
  medium: { padding: "18px 24px", fontSize: "18px", fontWeight: 700 },
  small: { padding: "8px 16px", fontSize: "16px", fontWeight: 500 },
};

const Button = ({ color, size, children }) => {
  return (
    <button style={{ backgroundColor: color, ...sizeOptions[size] }}>
      {children}
    </button>
  );
};

export default Button;
