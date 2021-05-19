import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PinCard from '../components/Cards/PinCard';
import { boardsAndPins } from '../helpers/data/BoardPinsData';
import { getBoards } from '../helpers/data/BoardsData';

const BoardPinContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;

export default function SingleBoardView({ user }) {
  const [boardPins, setBoardPins] = useState([]);
  const [boards, setBoards] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    boardsAndPins(id).then((response) => setBoardPins(response.pins));
    getBoards(user.uid).then((response) => setBoards(response));
  }, []);
  console.warn(boards);
  return (
    <BoardPinContainer className="card-container align-content-center" id="pin-cards">
        {boardPins.map((pin) => (
          <PinCard
            key={pin.firebaseKey}
            pins={boardPins}
            boardId={id}
            boards={boards}
            user={user}
            {...pin}
          />
        ))}
      </BoardPinContainer>
  );
}

SingleBoardView.propTypes = {
  user: PropTypes.any
};
