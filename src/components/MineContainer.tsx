import React from 'react';
import { Mines } from './Mines';
import styled from "styled-components";
import {minesBet, minesNext, minesCashout} from '../api'
import { MineContainerResults } from './MineContainerResults';

//styled components
const StyledMineDiv = styled.div`
  width: 100%;
  display: grid; 
  grid-template-columns: repeat(5,1fr);
  gap: 1em;
`;

const StyledMainDiv = styled.div`
  box-sizing: border-box;
  padding: 5% 0 5% 0;
  width: fit-content;
  margin: 0 auto;
  display: grid; 
  grid-template-columns: 3fr 7fr ;
  gap: 1em;
  
  @media only screen and (max-width: 700px) { 
    display: block;
  }
`;

const StyledBetBttn = styled.button`
  background: ${props => props.disabled ? "#118911" : "#00b801"};
  width: 100%;
  font-family: 'Inter', sans-serif;
  margin-top: 70%;
  color: ${props => props.disabled ? "grey" : "#fff"};
  font-weight: bolder;
  border: 0px solid transparent;
  margin-bottom: 1rem;
  padding: 1em 0;
  border-radius: 0.3em;
  cursor: pointer;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  transition: background 0.3s ease-out;
    &:hover { 
      background: #118911;
    }
  @media only screen and (max-width: 700px) { 
    margin-top: 10%;
  }

`;

const StyledCashOutBttn = styled.button`
background: ${props => props.disabled ? "#007bff" : "#1164bd"};
width: 100%;
font-family: 'Inter', sans-serif;
color: ${props => props.disabled ? "#fff" : "grey"};
font-weight: bolder;
border: 0px solid transparent;
margin-bottom: 1rem;
padding: 1em 0;
border-radius: 0.3em;
cursor: ${props => props.disabled ? "pointer" : "not-allowed"};
transition: background 0.3s ease-out;
  &:hover { 
    background: #1164bd;
  }

`;


export const MineContainer = () => { 

  //Reach hooks
  const [gameInProgress, setGameInProgress] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState<{state: string} | any >("");
  const [mineBoxCount] = React.useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]);
  const [initRefresh, setInitRefresh] = React.useState(new Date().getTime());
  const [showResults, setShowResults] = React.useState(false);
  const [allMines, setAllMines] = React.useState([]);

  //Functions 
  const handleBetClick = () => {
    minesBet().then((data) => {
      setGameInProgress(true);
      setGameStatus(data.state);
      setShowResults(false)
    })
  }; 

  const handleReturnedMineClick = (state:{state: string}) => {
    setGameStatus(state);
    if(state === "busted") {
      setShowResults(!showResults);
      setGameInProgress(false);
      setInitRefresh(new Date().getTime())
      
    }
  };

  const handlereturnDataFromMineClick = (data: {data: any}) => {
    setAllMines(data);
  }

  return ( 
    <div>
    <StyledMainDiv>
      <div>
        { 
          gameInProgress ? 
          <StyledBetBttn disabled>Bet</StyledBetBttn>
        :
        <StyledBetBttn onClick={handleBetClick}>Bet</StyledBetBttn>
        }
        { 
          !gameInProgress ? 
        <StyledCashOutBttn onClick={() => {
          minesCashout().then((data) => {
            // end the game here and alert how many times they got right.  

          })
        }}>Cashout</StyledCashOutBttn>
        :
        <StyledCashOutBttn disabled>Cashout</StyledCashOutBttn>
        }
      </div>
      { 
        !showResults ?  
          <StyledMineDiv key={JSON.stringify(initRefresh)}>
          { 
            mineBoxCount.map((item, index) => {
              return ( 
                <Mines 
                  handleReturnedMineClick={handleReturnedMineClick}
                  itemindex={index} 
                  gamestatus={gameStatus} 
                  key={index}  
                  returnData={handlereturnDataFromMineClick}
                />
              )
            })
          }
        </StyledMineDiv>
        : 
        <MineContainerResults allMines={allMines.mines} allRevealedMines={allMines}/>
      }
    </StyledMainDiv>
    </div>
  );
}