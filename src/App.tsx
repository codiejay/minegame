import * as React from "react";
import Instructions from "./Intructions";
import Game from "./Game";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Instructions />
      <Game />
    </div>
  );
}
