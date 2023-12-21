import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [modal, setModal] = useState(false);

  const getModalStyle = (modal) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !modal && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <div style={{display: "flex"}}><h2>RealHomes</h2>
        <div className="blueCircle"></div>
        </div>
      
        <OutsideClickHandler 
        onOutsideClick={() => {
          setModal(false)
        }}
        >
          <div className="h-menu flexCenter" style={getModalStyle(modal)}>
            <a href="">Residencies</a>
            <a href="">Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setModal((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
