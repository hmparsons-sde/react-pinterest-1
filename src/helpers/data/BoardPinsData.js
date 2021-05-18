import { deleteBoard, getSingleBoard } from './BoardsData';
import { deletePin, getBoardPins } from './PinsData';

// DELETE ALL THE PINS BELONGING TO A SPECIFIED BOARD
const deleteBoardsPins = (boardId, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardsPinsArray) => {
    const deletePins = boardsPinsArray.map((pins) => deletePin(pins.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});

// SHOW PINS ASSOCIATED WITH SINGLE BOARD
const boardsAndPins = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);
  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve({ board: boardResponse, pins: boardPinsResponse }))
    .catch((error) => reject(error));
});

export {
  boardsAndPins,
  deleteBoardsPins,
};
