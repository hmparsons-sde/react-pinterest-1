// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import React from 'react';
import {
  Button
} from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { deleteBoard } from '../../helpers/data/BoardsData';
// import { deleteStudent } from '../helpers/data/StudentData';
// import BoardForm from './BoardForm';
const BoardItem = styled.div`
  width: 300px;
  height: auto;
  margin: 15px;
  box-shadow: 50px;
`;

const BoardCard = ({
  firebaseKey,
  setBoards,
  imageUrl,
  title,
}) => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteBoard(firebaseKey)
          .then(setBoards);
        break;
      case 'view':
        history.push(`/boards/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  //   return (
  //     <Card body>
  //       <CardTitle tag="h5">{title}</CardTitle>
  //       <CardImg src={imageUrl}></CardImg>
  //       <Button color="dark" onClick={() => handleClick('view')}>View Board</Button>
  //       <Button color="danger" onClick={() => handleClick('delete')}>Delete Board</Button>
  //       <Button color="info" onClick={() => handleClick('edit')}>
  //         {editing ? 'Close Form' : 'Edit Board'}
  //       </Button>
  //       {
  //         editing && <BoardForm
  //           formTitle='Edit Board'
  //           setBoards={setBoards}
  //           firebaseKey={firebaseKey}
  //           title={title}
  //           pins={pins}
  //         />
  //       }
  //     </Card>
  //   );
  // };
  return (
  <BoardItem className='card' key={firebaseKey}>
    <img id="pinImg" src={imageUrl} alt="pin cover photo"></img>
      <div className='card-body'>
        <h5 tag="h5" className="text-center mt-1 mb-3">{title}</h5>
      <div className='btn-group-md justify-content-between'>
        <Button className='btn-md mr-1 ml-5 p-2' color="danger" onClick={() => handleClick('delete')}><i className="far fa-trash-alt"></i></Button>
        <Button className='btn-md' href='#' color="danger" onClick={() => handleClick('view')}>View Pins</Button>
      </div>
    </div>
  </BoardItem>
  );
};
BoardCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setBoards: PropTypes.func,
  handleClick: PropTypes.func
};

export default BoardCard;
