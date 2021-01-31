import React from "react";
import tap from "../../../../Images/tap.png";
import balloon from "../../../../Images/balloon.png";
import socialMedia from "../../../../Images/social_media.png";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="topEvent">
        <div className="event">
          <span className="first">❤︎ Relaxing Valentine's Day ❤︎ </span>
          <span className="second">단 7일간 얼리버드 기간만 </span>
          <span className="third">세이브 콘돔 추가 증정!🎁</span>
        </div>
      </div>
      <div className="navBar">
        <div className="inner">
          <ul className="firstBox">
            <li>ABOUT</li>
            <li>SHOP</li>
            <li>CAMPAIGN</li>
            <li>
              SAIB-SAID
              <img src={tap} alt="tap" />
            </li>
          </ul>
          <p className="logo">S A I B</p>
          <ul className="secondBox">
            <li>FAQ</li>
            <li>LOGIN</li>
            <img className="balloon" src={balloon} alt="balloon" />

            <li>CART</li>
            <li>MY PAGE</li>
            <img className="socialM" src={socialMedia} alt="social_media" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
