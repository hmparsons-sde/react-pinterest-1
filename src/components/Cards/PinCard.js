import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { deletePin } from '../../helpers/data/PinsData';
import PinForm from '../Forms/PinForm';

const PinnedItem = styled.div`
  width: 300px;
  height: auto;
  margin: 15px;
  box-shadow: 50px;
`;

const PinCard = ({
  imageUrl,
  title,
  favorite,
  firebaseKey,
  user,
  setPins,
  boardId,
  boards
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
    <PinnedItem className='card'>
      <img id="pinImg" src={imageUrl} alt="pin cover photo"></img>
      <div className='card-body'>
      <h5 tag="h5" className="mt-2">{title}</h5>
      <div className='btn-group-md justify-content-between'>
      <p className='card-text'>{favorite ? '❤️' : ''}</p>
      <Button className='btn-md mr-1 ml-5 p-2' color="danger" onClick={() => handleClick('delete')}><i className="far fa-trash-alt"></i></Button>
      <Button className='btn-md p-2 ml-1' color="danger" onClick={() => handleClick('update')}>
        {updating ? 'Close Form' : 'Edit Pin'}
      </Button>
      </div>
      {
        updating && <PinForm
        formTitle='Update Pin'
        setPins={setPins}
        firebaseKey={firebaseKey}
        boardId={boardId}
        user={user}
        imageUrl={imageUrl}
        title={title}
        boards={boards}
        />
      }
    </div>
  </PinnedItem>
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
  boards: PropTypes.array,
};

export default PinCard;
