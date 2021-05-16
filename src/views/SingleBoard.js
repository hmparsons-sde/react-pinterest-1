import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getSingleBoard } from '../helpers/data/BoardsData';
// import { boardsAndPins } from '../helpers/data/BoardPinsData';
import PinCard from '../components/Cards/PinCard';

const BoardPinContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;
export default function SingleBoard({ firebaseKey }) {
  const [board, setBoard] = useState({});
  const [boardPins, setBoardPins] = useState([]);

  useEffect(() => {
    getSingleBoard(firebaseKey).then(setBoard);
  }, []);
  // const getPins = boardsAndPins(boardId);
  // Promise.all([getSingleBoardInfo, getPins]).then((response) => {
  //   const [boardObject, pins] = response;
  //   setBoard(boardObject);
  //   setBoardPins(pins);
  // }, []);
  return (
    <BoardPinContainer>
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
    </BoardPinContainer>
  );
}

SingleBoard.propTypes = {
  firebaseKey: PropTypes.string,
  boardId: PropTypes.string,
};
