import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { createBoard } from '../helpers/data/BoardsData';

export default function BoardForm({ user }) {
  const [board, setBoard] = useState({
    title: '',
    imageUrl: '',
    uid: user.uid
  });

  const handleInputChange = (e) => {
    setBoard((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = (type) => {
    switch (type) {
      case 'add-board':
        createBoard(board, user.uid).then((boardsArray) => (boardsArray));
        break;
      default:
        console.warn('no');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBoard(board, user.uid).then((boardsArray) => console.warn(boardsArray));
    // above console warn to be setBoard when board cards can be READ
    // boards are printing to Firebase
  };

  return (
    <div className='board-form-container'>
      <Button color="secondary" onClick={() => handleClick('add-board')}>
          {board ? 'add-board' : 'Close Form' }
      </Button>
      <form
        className='add-board-form'
        autoComplete='off'
      >
        <h1>Add New Board</h1>
        <label>Title:</label>
          <input
            name='title'
            type='text'
            placeholder='Title'
            value={board.title}
            onChange={handleInputChange}
          >
          </input>
          <label>Image URL</label>
          <input
            name='imageUrl'
            type='url'
            placeholder='Image URL'
            value={board.imageUrl}
            onChange={handleInputChange}
          >
          </input>
          <Button color="danger" type='submit' onClick={handleSubmit} className='mt-4'>Submit</Button>
      </form>
    </div>
  );
}

BoardForm.propTypes = {
  user: PropTypes.any
};
