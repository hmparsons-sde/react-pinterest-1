import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getSingleBoard } from '../helpers/data/BoardsData';
// import { boardsAndPins } from '../helpers/data/BoardPinsData';
import PinCard from '../components/Cards/PinCard';
import { getBoardPins } from '../helpers/data/PinsData';

const BoardPinContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;
export default function SingleBoard({ firebaseKey, user }) {
  const [board, setBoard] = useState({});
  const [boardPins, setBoardPins] = useState([]);

  useEffect(() => {
    getSingleBoard(firebaseKey).then(setBoard);
  }, []);

  useEffect(() => {
    getBoardPins(firebaseKey).then(setBoardPins);
  }, []);

  return (
    <BoardPinContainer>
      <h2>{board.title}</h2>
      <div className="pins-board">
        {boardPins.map((pin) => (
          <PinCard
          key={pin.firebaseKey}
          user={user}
          setBoardPins={setBoardPins}
          board={board}
          {...pin}
        />
        ))};
      </div>
    </BoardPinContainer>
  );
}

SingleBoard.propTypes = {
  firebaseKey: PropTypes.string,
  boardId: PropTypes.string,
  user: PropTypes.any
};
