import React from 'react';
import {
  Button,
  Card,
  CardImg,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';

const PinCard = ({
  imageUrl,
  title,
  favorite,
  handleClick
}) => (
  <Card body>
      <CardImg id="pinImg" src={imageUrl} alt="pin cover photo"></CardImg>
      <CardSubtitle tag="h5" className="mt-2">{title}</CardSubtitle>
      <CardText>{favorite}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Pin</Button>
  </Card>
);

PinCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  handleClick: PropTypes.func
};

export default PinCard;
