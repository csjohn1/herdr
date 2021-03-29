import React from "react";
import goat from "../../assets/goat.png";
import arrow from "../../assets/arrow.svg";
import "./topbar.css";

export function TopBar(props) {
  return (
    <div className="topbar">
      <div className="top-title-logo">
        <img src={goat} height="45px" alt="goat" />
        <div className="top-title">herdr</div>
      </div>
      <div className="top-arrow-container">
        {props.dropdown && (
          <img
            className="top-arrow"
            onClick={() => {
              props.openMessages
                ? props.setOpenMessages(false)
                : props.setOpenMessages(true);
            }}
            src={arrow}
            height="25px"
            alt="arrow"
          />
        )}
      </div>
    </div>
  );
}
