import React, { useState } from "react";
import { MenuItems } from "../MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item) => {
          return (
            <li
              key={
                Date.now().toString(36) + Math.random().toString(36).substr(2)
              }
            >
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
