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
      <CardImg id="boardImg" src={imageUrl}></CardImg>
      <div className="btn-group-md justify-content-around mb-4 mt-auto">
        <CardSubtitle tag="h5" className="my-3">{title}</CardSubtitle>
        <Button color="danger" onClick={() => handleClick('delete')} className="btn-md mx-4"><i className="far fa-trash-alt"></i></Button>
        <Button color="danger" onClick={() => handleClick('view')} className="mx-4">View Pins</Button>
      </div>
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
