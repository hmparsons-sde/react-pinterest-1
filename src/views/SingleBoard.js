import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import PinCard from '../components/Cards/PinCard';
import { boardsAndPins } from '../helpers/data/BoardPinsData';
import { getBoards } from '../helpers/data/BoardsData';

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
    <div className="card-container align-content-center" id="pin-cards">
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
      </div>
  );
}

SingleBoardView.propTypes = {
  user: PropTypes.any
};
