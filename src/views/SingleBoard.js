import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleBoard } from '../helpers/data/BoardsData';
import { boardsAndPins } from '../helpers/data/BoardPinsData';
import PinCard from '../components/Cards/PinCard';

export default function SingleBoard() {
  const [board, setBoard] = useState({});
  const [boardPins, setBoardPins] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getSingleBoardInfo = getSingleBoard(id);
    const getPins = boardsAndPins(id);
    Promise.all([getSingleBoardInfo, getPins]).then((response) => {
      const [boardObject, pins] = response;
      setBoard(boardObject);
      setBoardPins(pins);
    }, []);
    return (
    <div className="boardPinContainer">
      <h2>{board.title}</h2>
      <div className="pins-board">
        {boardPins.map((boardPinArray) => (
          <PinCard
            key={boardPinArray.firebaseKey}
            user={boardPinArray.user}
            setBoardPins={setBoardPins}
          />
        ))};
      </div>
    </div>
    );
  });
}
