import React from 'react';
import {
  Button,
  Card,
  CardSubtitle,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteBoardsPins } from '../../helpers/data/BoardPinsData';
import { getPins } from '../../helpers/data/PinsData';

function BoardCard({
  imageUrl,
  title,
  firebaseKey,
  user,
  setBoards,
  setPins
}) {
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteBoardsPins(firebaseKey, user.uid)
          .then(setBoards)
          .then(() => getPins(user.uid))
          .then(setPins);
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
  user: PropTypes.any,
  setPins: PropTypes.func
};

export default BoardCard;
