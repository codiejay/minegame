import React from 'react';
import styled, {keyframes} from "styled-components";
import {Gem} from '../assets';
import {Mine} from '../assets';


//styled components  amd animations
const gemAnimation = keyframes` 
  from { transform: scale(4); }
  to { transform: scale(2.3);}
`

const mineAnimation = keyframes` 
  0% { transform: translate(1px, 1px) rotate(0deg) scale(2); }
  10% { transform: translate(-1px, -2px) rotate(-1deg) scale(2); }
  20% { transform: translate(-3px, 0px) rotate(1deg) scale(2); }
  30% { transform: translate(3px, 2px) rotate(0deg) scale(2); }
  40% { transform: translate(1px, -1px) rotate(1deg) scale(4.4); }
  50% { transform: translate(-1px, 2px) rotate(-1deg) scale(3.6); }
  60% { transform: translate(-3px, 1px) rotate(0deg) scale(2.1); }
  70% { transform: translate(3px, 1px) rotate(-1deg) scale(2.4); }
  80% { transform: translate(-1px, -1px) rotate(1deg) scale(1.3); }
  90% { transform: translate(1px, 2px) rotate(0deg) scale(2.3); }
  100% { transform: translate(1px, -2px) rotate(-1deg) scale(2.3);
`

const MineDiv = styled.div`
  width: 88px;
  height: 88px; 
  background: #304a5d;
  border-bottom: 5px solid #3c637f;
  cursor: pointer;
  border-radius: 0.5em;
  transition: border 0.3s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active { 
    border-bottom: none;
  }
`;

const MinesStyledDiv = styled.div`
  transform: scale(2.3);
  margin-top: 1em;
  animation-name: ${mineAnimation};
  animation-duration: 0.4s;
  animation-iteration-count: once;
`

const GemStyledDiv = styled.div`
  transform: scale(2.3);
  margin-top: 1em;
  animation-name: ${gemAnimation};
  animation-duration: 0.4s;
  animation-iteration-count: once;
`

//Audio 

export const MinesResults = (
  {
    type,
    revealed,
  }
    : 
    {
      type: string,
      revealed: boolean,
    }) => 
    { 
  //react hook

  //small components
  const MineContainerDiv = () => {
    return (
      <div style={{opacity: !revealed ? 1 : 0.3}}>
        { 
          type !== 'gem' ? 
            <MinesStyledDiv>
              <Mine/>
            </MinesStyledDiv>
          :
            <GemStyledDiv>
              <Gem/>
            </GemStyledDiv>
        }
      </div>
    )
  }


  return ( 
    <MineDiv>
      { 
        <MineContainerDiv/>
      }
    </MineDiv>
  )
}