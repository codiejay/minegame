// following API - this is how to not write an API
import _ from "lodash";

type State = "idle" | "progress" | "cashout" | "busted";

export type CasinoGameMines = {
  minesCount: number;
  mines: number[];
  revealedTiles: number[];
  state: State;
};

export const wait = () =>
  new Promise<void>(resolve => setTimeout(resolve, Math.random() * 500 + 200));

let gameState: CasinoGameMines = {
  minesCount: 5,
  mines: [],
  revealedTiles: [],
  state: "idle"
};

const minesFields = _.range(0, 25);

export const minesBet = async () => {
  await wait();

  const newRoundTiles = _.shuffle(minesFields);
  gameState.mines = newRoundTiles.slice(0, 5);
  gameState.revealedTiles = [];

  return getGameState("progress");
};

export const minesNext = async (tileToReveal: number) => {
  await wait();

  gameState.revealedTiles.push(tileToReveal);

  if (gameState.mines.includes(tileToReveal)) {
    return getGameState("busted");
  }

  return getGameState("progress");
};

const getGameState = (state: State) => {
  gameState.state = state;

  if (state === "progress") {
    return { ...gameState, mines: [] };
  }

  return gameState;
};

export const minesCashout = async () => {
  await wait();

  return getGameState("cashout");
};
