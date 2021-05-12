import React from 'react';
import PropTypes from 'prop-types';
import BoardCard from '../components/Cards/BoardCard';

function Boards({ boards, setBoards }) {
  return (
    <>
      <div className="card-container">
        {boards.map((boardInfo) => (
          <BoardCard
            key={boardInfo.firebaseKey}
            firebaseKey={boardInfo.firebaseKey}
            title={boardInfo.title}
            pins={boardInfo.pins}
            setBoards={setBoards}
          />
        ))}
      </div>
    </>
  );
}

Boards.propTypes = {
  boards: PropTypes.array.isRequired,
  setBoards: PropTypes.func.isRequired
};

export default Boards;
