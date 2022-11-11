import React from "react";

const Header = () => {
  return (
    <div className="flex mt-5 justify-around align-middle">
      <img className="w-24" src="indie-logo.png" alt="" />
      <ul className="flex space-x-4 py-6">
        <li>Home</li>
        <li>About</li>
        <li>desings</li>
        <li>Contact</li>
      </ul>

      <div className="flex space-x-2 align-middle py-7">
        <img className="w-4 h-4" src="instagram.png" alt="" />
        <img className="w-4 h-4" src="facebook.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
