import React, { useContext } from "react";
import { store } from "../../context/matches.js";
import TinderCard from "react-tinder-card";
import { db } from "../../data/data.js";
import "./image_card.css";

export function ImageCard(props) {
  const state = useContext(store);
  const { dispatch } = state;
  const characters = db;

  const swiped = (direction, character) => {
    if (direction === "right" && character.match) {
      dispatch({ type: "MATCH", matches: character });
      props.toastHandler("toast");
    }
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
