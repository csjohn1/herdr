import React, { useContext } from "react";
import { match } from "../../context/matches.js";
import { store } from "../../context/cards.js";
import TinderCard from "react-tinder-card";
import "./image_card.css";

export function ImageCard(props) {
  const { matchDispatch } = useContext(match);
  const { state, cardDispatch } = useContext(store);
  const characters = state.cards;

  const swiped = (direction, character) => {
    if (direction === "right" && character.match) {
      matchDispatch({ type: "MATCH", matches: character });
      props.toastHandler("toast");
    }
    cardDispatch({ type: "REMOVE", character });
  };
  
  return (
    <div className="image-card-container">
      {characters.map((character) => (
        <TinderCard
          className="swipe"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character)}
        >
          <div
            style={{ backgroundImage: "url(" + character.url + ")" }}
            className="image-card"
          >
            <h2>{character.name}</h2>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
