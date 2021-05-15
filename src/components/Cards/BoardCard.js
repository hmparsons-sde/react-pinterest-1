// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import React from 'react';
import {
  Button,
  Card,
  CardSubtitle,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
// import { deleteStudent } from '../helpers/data/StudentData';
// import BoardForm from './BoardForm';

const BoardCard = ({
  // firebaseKey,
  // setBoards,
  imageUrl,
  title,
  handleClick
  // }) => {
  //   const [editing, setEditing] = useState(false);
  //   const history = useHistory();

  //   const handleClick = (type) => {
  //     switch (type) {
  //       case 'delete':
  //         deleteBoard(firebaseKey)
  //           .then(setBoards);
  //         break;
  //       case 'edit':
  //         setEditing((prevState) => !prevState);
  //         break;
  //       case 'view':
  //         history.push(`/boards/${firebaseKey}`);
  //         break;
  //       default:
  //         console.warn('nothing selected');
  //     }
  //   };

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
}) => (
  <Card body id="boardCard">
      <CardImg id="cardImg" src={imageUrl}></CardImg>
      <CardSubtitle tag="h5">{title}</CardSubtitle>
      <Button color="dark" onClick={() => handleClick('view')}>View Pins</Button>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Board</Button>
  </Card>
);
BoardCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setBoards: PropTypes.func,
  handleClick: PropTypes.func
};

export default BoardCard;
