import React from "react";

import styled from "styled-components";

import { Gem, Mine } from "./assets";

import idle from "./assets/idle.png";
import cashout from "./assets/cashout.png";
import busted from "./assets/busted.png";

const StyledInstruction = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  background: papayawhip;
  border: 3px solid #ffdba5;
  border-radius: 0.5em;
  margin-bottom: 1em;

  > h2 {
    > * + * {
      margin-left: 0.5em;
    }
  }
`;

const steps = [
  <div>
    <p>Mines game is a 5 to 5 grid game (5 columns, 5 rows)</p>
    <img width="200" alt="idle" src={idle} />
  </div>,
  <div>
    <p>
      Once a mine is revealed game ends, if it's a gem (not a mine) game
      continues. Following screenshot is a game that ended (due to clicking on
      mine). You can differentiate between gems & mines that got revealed.
    </p>
    <img width="200" alt="busted" src={busted} />
  </div>,
  <div>
    <p>
      You can cashout at any time and the game state will be revealed. Don't
      implement 1.29x payout image.
    </p>
    <img width="200" alt="cashout" src={cashout} />
  </div>,
  <div>
    <p>
      Create "Bet" button (possible to click at all times except "progress" and
      loading state)
    </p>
    <button>Bet</button>
  </div>,
  <div>
    <p>
      Create "Cashout" button (only possible to click on cashout if you are in
      the middle of the game state "progress" and you have revealed at least of
      the tiles and you are not waiting for a server response (eg. to reveal
      next tile))
    </p>
    <button>Cashout</button>
  </div>,
  <div>
    <p>
      As any real world application the game has asynchronous calls, make sure
      you handle loading states appropriately
    </p>
  </div>,
  <div>
    <p>USE "assets" folder to get gem and mine image.</p>
    <div>
      <Gem />
      <Mine style={{ marginLeft: "0.5em" }} />
    </div>
  </div>,
  <div>
    <p>
      USE "api.ts" file to call external api. We have three mutations available,
      you will need to use them all.
    </p>
  </div>,
  <div>
    <p>
      Play a sound when mine or gem is revealed. Use gem.mp3 and mine.mp3 from
      assets.
    </p>
  </div>,
  <div>
    <p>
      By default game has a 5 mines (if you can make it possible to play with
      more it's a plus, but not mandatory)
    </p>
  </div>,
  <div>
    <p>
      Try to focus on great user experience and add some animations that make
      the game exciting
    </p>
  </div>,
  <div>
    <p>
      You can try to play mines on{" "}
      <a
        href="https://parmaday.club/casino/games/mines"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stake
      </a>
      &nbsp;staging environment (password: "jollygoodsport") to get an idea how
      the game works
    </p>
  </div>
];

const Instructions = () => {
  const [step, setStep] = React.useState(0);

  const toNext = () => setStep((s) => s + 1);
  const toPrevious = () => setStep((s) => s - 1);
  return (
    <StyledInstruction>
      <h2>
        <Gem />
        <span>Mines</span>
        <Mine />
      </h2>
      <div>
        <button onClick={toPrevious} disabled={step === 0}>
          Previous
        </button>
        <button onClick={toNext} disabled={step === steps.length - 1}>
          Next
        </button>
      </div>
      {steps[step]}
    </StyledInstruction>
  );
};

export default Instructions;
