import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button
} from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BoardItem = styled.div`
  width: 300px;
  height: auto;
  margin: 15px;
  box-shadow: 50px;
`;

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
  <BoardItem>
  <Card body id="boardCard">
     <CardImg id="cardImg" src={imageUrl}></CardImg>
     <CardSubtitle tag="h5" className="text-center mt-1 mb-3">{title}</CardSubtitle>
     <div className='btn-group-md justify-content-between'>
      <Button className='btn-md' color="danger" onClick={() => handleClick('delete')}><i className="far fa-trash-alt"></i></Button>
      <Button className='btn-md mr-1 ml-5 p-2' color="danger" onClick={() => handleClick()}>View Pins</Button>
    </div>
  </Card>
</BoardItem>
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
