// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import {
//   Button,
//   Card,
//   CardText,
//   CardTitle
// } from 'reactstrap';
// import PropTypes from 'prop-types';
// // import { deleteStudent } from '../helpers/data/StudentData';
// // import BoardForm from './BoardForm';

// const BoardCard = ({
//   firebaseKey,
//   title,
//   pins,
//   setBoards
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
//       <CardText>Pins {pins}</CardText>
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

// BoardCard.propTypes = {
//   firebaseKey: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   pins: PropTypes.string.isRequired,
//   setBoards: PropTypes.func
// };

// export default BoardCard;
