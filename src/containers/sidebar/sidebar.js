import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { store } from "../../context/matches.js";
import { ChatContext } from '../../context/chat'
import "./sidebar.css";

export function SideBar() {
  const state = useContext(store);
  const { chatState, chatDispatch } = useContext(ChatContext) 
  const [dialog, setDialog] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const orderedMatches = state.state.matches;

  const closeModal = () => {
    setDialog(false);
  };

  return (
    <div className="sidebar">
      {orderedMatches.length ? (
        orderedMatches.map((match) => {
          return (
            <div
              className="side-card"
              key={match.id}
              onClick={() => {
                console.log(match)
                setName(match.name);
                setUrl(match.url);
                //setDialog(true);
                chatDispatch({
                  type: 'open_chat',
                  payload: {
                    chat_id: match.id
                  }
                })
              }}
            >
              <img className="side-img" src={match.url} alt="Goat matches" />
              <p className="name">{match.name}</p>
            </div>
          );
        })
      ) : (
        <p className="side-text">Your herd is empty 🤠</p>
      )}
      <Modal
        isOpen={dialog}
        onRequestClose={closeModal}
        className="side-modal"
        ariaHideApp={false}
      >
        <p className="side-modal-text">Meet {name}</p>
        <img className="side-modal-img" src={url} alt="Your goat" />
      </Modal>
    </div>
  );
}
