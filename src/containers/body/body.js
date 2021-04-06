import React, { useContext } from "react";
import "./body.css";
import { ImageCard } from "../../components/image_card/image_card.js";
import { ChatContext } from '../../context/chat'
import Chat from './Chat'
// import { Button } from "../../components/button/button.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Body() {
  const { chatState } = useContext(ChatContext) 
  const notify = () =>
    toast.dark("You just matched - you're the GOAT!", {
      hideProgressBar: true,
      autoClose: 2000,
    });

  const toastHandler = (action) => {
    if (action === "toast") {
      notify();
    }
  };

  return (
    <div className="body-root">
      <div className="body-wrapper">
        { chatState.open ? (
          <Chat id={chatState.id} />
        ) : (
          <>
            <ImageCard toastHandler={toastHandler} />
            <div className="body-instructions">
              <p className="body-instructions-text">
                👈 Swipe left to <b>pass</b>
              </p>
              <p className="body-instructions-text">
                Swipe right to <b>match</b> 👉
              </p>
            </div>
            {/* <div className="buttons">
              <Button />
              <Button />
            </div> */}
            <ToastContainer position="bottom-center" />
          </>
        )}

      </div>
    </div>
  );
}
