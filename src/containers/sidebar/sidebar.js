import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { match } from "../../context/matches.js";
import "./sidebar.css";

export function SideBar() {
  const state = useContext(match);
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
        orderedMatches.map((e) => {
          return (
            <div
              className="side-card"
              key={e.name}
              onClick={() => {
                setName(e.name);
                setUrl(e.url);
                setDialog(true);
              }}
            >
              <img className="side-img" src={e.url} alt="Goat matches" />
              <p className="name">{e.name}</p>
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
