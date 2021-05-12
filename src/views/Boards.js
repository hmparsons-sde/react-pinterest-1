import React from 'react';
import PropTypes from 'prop-types';
import BoardCard from '../components/Cards/BoardCard';

function BoardsView({ boards, setBoards }) {
  return (
    <>
      <div className="card-container" id="board-cards">
        {boards.map((boardInfo) => (
          <BoardCard
            key={boardInfo.firebaseKey}
            firebaseKey={boardInfo.firebaseKey}
            imageUrl={boardInfo.imageUrl}
            title={boardInfo.title}
            // user={user}
            setBoards={setBoards}
            // {...boards}
          />
        ))}
      </div>
    </>
  );
}

BoardsView.propTypes = {
  boards: PropTypes.array.isRequired,
  setBoards: PropTypes.func.isRequired,
  // user: PropTypes.any
};

export default BoardsView;
