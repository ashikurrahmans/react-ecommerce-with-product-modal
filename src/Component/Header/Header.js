import React from "react";
import "./Header.css";
import { BsFillCartFill } from "react-icons/bs";

const Header = (props) => {
  return (
    <nav>
      <h2>Kopa Samsu Store</h2>
      <div className="icon">
        <BsFillCartFill onClick={props.openModal} />
      </div>
    </nav>
  );
};

export default Header;
