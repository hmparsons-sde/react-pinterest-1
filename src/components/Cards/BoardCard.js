// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import React from 'react';
import {
  Button,
  Card,
  CardSubtitle,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteBoard } from '../../helpers/data/BoardsData';

function BoardCard({
  imageUrl,
  title,
  firebaseKey,
  user,
  setBoards
}) {
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteBoard(firebaseKey, user.uid).then((boardArray) => setBoards(boardArray));
        break;
      default: console.warn('nothing selected');
    }
  };
  return (
    <Card body>
      <CardImg id="pinImg" src={imageUrl}></CardImg>
      <CardSubtitle tag="h5">{title}</CardSubtitle>
      <Button color="info" onClick={() => handleClick('view')}>View Pins</Button>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Board</Button>
    </Card>
  );
}

BoardCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setBoards: PropTypes.func,
  handleClick: PropTypes.func,
  user: PropTypes.any
};

export default BoardCard;
