import React, { useContext } from "react";
import goat from "../../assets/goat.png";
import arrow from "../../assets/arrow.svg";
import "./topbar.css";
import { ChatContext } from '../../context/chat'

export function TopBar(props) {
  const { chatDispatch } = useContext(ChatContext) 
  return (
    <div className="topbar">
      <div className="top-title-logo" onClick={() => { chatDispatch({ type: 'close_chat' })}}>
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
