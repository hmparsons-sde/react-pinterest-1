import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Card,
  Button,
  ButtonGroup,
  CardImg,
  CardText,
  CardSubtitle
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
    <Wrapper>
      <Container>
        <Card body>
          <CardImg className="mx-auto d-block" id="pinImg" src={imageUrl} alt="pin cover photo"></CardImg>
          <CardSubtitle className="h5 mt-2">{title}</CardSubtitle>
          <CardText className="text-center mb-2">{favorite ? '❤️' : ''}</CardText>
          <ButtonGroup>
          <Button color="transparent" size="sm" onClick={() => handleClick('delete')}>🗑️</Button>
          <Button color="transparent" size="sm" onClick={() => handleClick('update')}>
            {updating ? 'X' : '✏️'}
          </Button>
          </ButtonGroup>
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
      </Container>
    </Wrapper>
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

const Wrapper = styled.div`
display: inline-flex;
padding: 8px;
`;

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
box-sizing: border-box;
cursor: pointer;
width: 300px;
img {
display: flex;
width: 100%;
cursor: zoom-in;
border-radius: 16px;
object-fit: fill;
}
`;
