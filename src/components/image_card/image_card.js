import React, { useContext } from "react";
import { match } from "../../context/matches.js";
import { store } from "../../context/cards.js";
import TinderCard from "react-tinder-card";
import "./image_card.css";



export function ImageCard(props) {
  const { matchDispatch } = useContext(match);
  const { state, cardDispatch } = useContext(store);
  const characters = state.cards;

  // const alreadyRemoved = []

  // const childRefs = useMemo(() => Array(characters.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, character) => {
    if (direction === "right" && character.match) {
      matchDispatch({ type: "MATCH", matches: character });
      props.toastHandler("toast");
    }
    cardDispatch({ type: "REMOVE", character });
  };

  // const swipe = (dir) => {
  //   const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
  //   if (cardsLeft.length) {
  //     const toBeRemoved = cardsLeft[cardsLeft.length - 1].name
  //   const index = characters.map(person => person.name).indexOf(toBeRemoved)
  //   childRefs[index].current.swipe(dir) // Swipe the card!
  //   }
  // }
  
  return (
    <>
    <div className="image-card-container">
      {characters.map((character, index) => (
        <TinderCard
          className="swipe"
          key={character.name}
          // ref={childRefs[index]}
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
     
    </>
  );
}
