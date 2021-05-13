import React, { useState } from 'react';
import {
  Button,
  Card,
  CardImg,
  CardSubtitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePin } from '../../helpers/data/PinsData';
import PinForm from '../Forms/PinForm';

const PinCard = ({
  imageUrl,
  title,
  favorite,
  firebaseKey,
  user,
  setPins,
  boardId
}) => {
  const [updating, setUpdating] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePin(firebaseKey, user.uid)
          .then(setPins);
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
      <CardImg id="pinImg" src={imageUrl} alt="pin cover photo"></CardImg>
      <CardSubtitle tag="h5" className="mt-2">{title}</CardSubtitle>
      <CardText>{favorite ? 'Favorite' : ''}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Pin</Button>
      <Button color="info" onClick={() => handleClick('update')}>
        {updating ? 'Close Form' : 'Edit Pin'}
      </Button>
      {
        updating && <PinForm
        formTitle='Update Pin'
        setPins={setPins}
        firebaseKey={firebaseKey}
        boardId={boardId}
        user={user}
        imageUrl={imageUrl}
        title={title}
        />
      }
    </Card>
  );
};

PinCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  handleClick: PropTypes.func,
  firebaseKey: PropTypes.string,
  user: PropTypes.any,
  setPins: PropTypes.func,
  boardId: PropTypes.string,
};

export default PinCard;
