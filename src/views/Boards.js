import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import BoardCard from '../components/Cards/BoardCard';
import BoardForm from '../components/Forms/BoardForm';

const BoardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;
function BoardsView({ user, boards, setBoards }) {
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    setShowButton((prevState) => !prevState);
  };
  return (
    <>
      <section className="header mt-2">
      { !showButton
        ? <Button className="m-2 btn-lg" color='danger' onClick={handleClick}>Add Board</Button>
        : <div>
        <Button className="m-2 btn-lg" color='secondary' onClick={handleClick}>Close</Button>
          <BoardForm className="justify-content-center mt-3" setBoards={setBoards} user={user} boards={boards}/>
        </div>
        }
      </section>
      <BoardContainer className="card-container" id="board-cards">
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
      </BoardContainer>
    </>
  );
}

BoardsView.propTypes = {
  boards: PropTypes.array.isRequired,
  setBoards: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default BoardsView;
