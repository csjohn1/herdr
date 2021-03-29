import React from "react";
import heart from "../../assets/heart.svg";
import "./button.css";

export function Button() {
  return (
    <button className="custom-button" onClick={() => swipe("right")}>
      <img src={heart} height="50px" alt="React Logo" />
    </button>
  );
}
