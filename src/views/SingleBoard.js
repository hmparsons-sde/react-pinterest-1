import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleBoard } from '../helpers/data/BoardsData';
import { boardsAndPins } from '../helpers/data/BoardPinsData';
import PinCard from '../components/Cards/PinCard';

export default function SingleBoard() {
  const [board, setBoard] = useState({});
  const [boardPin, setBoardPin] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSingleBoard(id).then(setBoard);
    boardsAndPins(id).then((data) => setBoardPin(data));
  }, []);

  return (
    <div className="boardPinContainer">
      <h2>{board.title}</h2>
      <div className="pins-board">
        {boardPin.map((boardPinArray) => (
          <PinCard
            key={boardPinArray.firebaseKey}
            user={boardPinArray.user}
            setPins={boardPinArray.setPins}
          />
        ))};
      </div>
    </div>
  );
}
