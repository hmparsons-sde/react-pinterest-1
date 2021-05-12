import React from 'react';
import { useHistory } from 'react-router-dom';
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
}) => {
  const [updating, setUpdating] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePin(firebaseKey, uid)
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
      <CardSubtitle tag="h5">{title}</CardSubtitle>
      <CardText>{favorite}</CardText>
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
        uid={uid}
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
  handleClick: PropTypes.func
};

export default PinCard;
