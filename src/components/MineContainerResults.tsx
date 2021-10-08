import React from 'react';
import { MinesResults } from './MinesResults';
import styled from "styled-components";

//styled components
const StyledMineDiv = styled.div`
  display: grid; 
  grid-template-columns: repeat(5,1fr);
  gap: 1em;
`;

const StyledMainDiv = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: block; 
`;


export const MineContainerResults = ({allMines, allRevealedMines}:{allMines: any, allRevealedMines: any}) => { 

  //Reach hooks
  const [mineBoxCount] = React.useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]);

  return ( 
    <StyledMainDiv>
      <StyledMineDiv>
        { 
          mineBoxCount.map((item, index) => {
            return ( 
              <MinesResults 
                itemindex={index} 
                key={index}  
                type={allMines.indexOf(index) === -1 ? "gem" : "mine"}
                revealed={allRevealedMines.revealedTiles.indexOf(index) === -1 ? true : false}
              />
            )
          })
        }
      </StyledMineDiv>
    </StyledMainDiv>
  );
}