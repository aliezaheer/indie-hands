import React from "react";

const Header = () => {
  return (
    <div
      id="header-main"
      className="flex py-8 justify-center border-b border-borderColor"
    >
      <ul className="flex space-x-28">
        <li>Home</li>
        <li>About</li>
        <li>desings</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
