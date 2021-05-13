import React from 'react';
import PropTypes from 'prop-types';
import BoardCard from '../components/Cards/BoardCard';
import BoardForm from '../components/Forms/BoardForm';

function BoardsView({ user, boards, setBoards }) {
  return (
    <>
      <div className="card-container" id="board-cards">
        {boards.map((boardInfo) => (
          <BoardCard
            key={boardInfo.firebaseKey}
            firebaseKey={boardInfo.firebaseKey}
            imageUrl={boardInfo.imageUrl}
            title={boardInfo.title}
            user={user}
            setBoards={setBoards}
            // {...boards}
          />
        ))}
      </div>
      <div>
      <h1>Boards</h1>
      <BoardForm
        user={user}
        formTitle='Add a Board'
      />
    </div>
    </>
  );
}

BoardsView.propTypes = {
  boards: PropTypes.array.isRequired,
  setBoards: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default BoardsView;
