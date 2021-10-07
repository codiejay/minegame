import React from "react";

import { minesBet, minesCashout, minesNext } from "./api";
import styled from "styled-components";
import {MineContainer} from './components/MineContainer';


const StyledMainScreen = styled.div`
  background: #0F212E;
  height: auto; 
  border-radius: 0.5rem;
  border: 3px solid #27516f;
  user-select: none;
`;


const Game = () => {
  return (
  <StyledMainScreen>
    <MineContainer/>
  </StyledMainScreen>);
};

export default Game;
