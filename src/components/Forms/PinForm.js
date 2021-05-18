import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Input, Label
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { createPin, updatePin } from '../../helpers/data/PinsData';

export default function PinForm({
  user, formTitle, setPins, title, imageUrl, firebaseKey, boards, boardId
}) {
  const [pin, setPin] = useState({
    title: title || '',
    imageUrl: imageUrl || '',
    firebaseKey: firebaseKey || null,
    favorite: false,
    uid: user.uid,
    boardId: boardId || ''
  });

  const handleInputChange = (e) => {
    setPin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'favorite' ? e.target.checked : e.target.value
    }));
    console.warn(pin);
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.firebaseKey) {
      updatePin(pin, user).then(setPins);
    } else {
      createPin(pin, user).then(setPins);
      history.push('pins');
    }
  };
  console.warn(boards);
  return (
    <div className="pin-form-container">
      <Form className="add-pin-form" autoComplete="off">
        <h4 className="mt-4 text-center mb-2">{formTitle}</h4>
        <Input
          name="title"
          type="text"
          placeholder="Title"
          value={pin.title}
          onChange={handleInputChange}
          className="mt-2"
        ></Input>
        <br></br>
        <Input
          name="imageUrl"
          type="url"
          placeholder="Image URL"
          value={pin.imageUrl}
          onChange={handleInputChange}
          className="mt-1"
        ></Input>
        <br></br>
        <Input
          type="select"
          name="boardId"
          placeholder="Board Name"
          id="exampleSelect"
          onChange={handleInputChange}
        >
          {boards?.map((board) => (
            <option key={board.firebaseKey} value={board.firebaseKey}>
              {board.title}
            </option>
          ))}
        </Input>
        <br></br>
        <Input
          name="favorite"
          type="checkbox"
          checked={pin.favorite}
          onChange={handleInputChange}
          className="ml-2 align-self-center text-center"
        ></Input>
        <Label className="ml-4 text-center"> Favorite </Label>
        <br></br>
        <Button
          color="danger"
          type="submit"
          onClick={handleSubmit}
          className="mt-2 ml-1"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

PinForm.propTypes = {
  user: PropTypes.any,
  formTitle: PropTypes.string,
  favorite: PropTypes.bool,
  setPins: PropTypes.func,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.string,
  boards: PropTypes.array,
  boardId: PropTypes.string,
};
