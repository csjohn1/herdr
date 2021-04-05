import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MatchProvider } from "./context/matches.js";
import { CardProvider } from "./context/cards.js";
import "./assets/fonts/circular-std/CircularStd-Black.ttf";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <CardProvider>
      <MatchProvider>
        <App />
      </MatchProvider>
    </CardProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
