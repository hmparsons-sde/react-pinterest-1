import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardSubtitle,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';

const BoardCard = ({
  imageUrl,
  title,
  firebaseKey,
  // setPins
}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`boards/${firebaseKey}`);
  };
  return (
  <Card body id="boardCard">
      <CardImg id="cardImg" src={imageUrl}></CardImg>
      <CardSubtitle tag="h5">{title}</CardSubtitle>
      <Button color="dark" onClick={() => handleClick()}>View Pins</Button>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Board</Button>
  </Card>
  );
};
BoardCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // setPins: PropTypes.func,
  handleClick: PropTypes.func,
};

export default BoardCard;
