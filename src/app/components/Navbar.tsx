import React from "react";
import { IoMoon } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <h1>Where in the world?</h1>
      </a>
      <div className="toggle">
        <div className="toggle-dark">
          <IoMoon />
          <p>Dark Mode</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
