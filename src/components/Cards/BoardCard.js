import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, CardSubtitle, Card, CardImg
} from 'reactstrap';
import styled from 'styled-components';
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
  const handleDelete = (type) => {
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

  const history = useHistory();
  const handleClick = () => {
    history.push(`boards/${firebaseKey}`);
  };

  const BoardItem = styled.div`
    width: 300px;
    height: auto;
    margin: 15px;
    box-shadow: 50px;
  `;

  return (
  <BoardItem>
    <Card body id="boardCard">
      <CardImg id="cardImg" src={imageUrl}></CardImg>
      <CardSubtitle tag="h5" className="text-center mt-1 mb-3">{title}</CardSubtitle>
      <div className='btn-group-md justify-content-between'>
        <Button className='btn-md' color="danger" onClick={() => handleDelete('delete')}><i className="far fa-trash-alt"></i></Button>
        <Button className='btn-md mr-1 ml-5 p-2' color="danger" onClick={() => handleClick()}>View Pins</Button>
      </div>
    </Card>
</BoardItem>
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
