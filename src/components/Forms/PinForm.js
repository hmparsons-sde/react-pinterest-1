import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Input, Label
} from 'reactstrap';
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
  console.warn(pin);
  const handleInputChange = (e) => {
    setPin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'favorite' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.firebaseKey) {
      updatePin(pin).then((pinsArray) => setPin(pinsArray));
    } else {
      createPin(pin).then((pinsArray) => setPins(pinsArray));
    }
  };
  return (
    <div className="pin-form-container">
      <Form className="add-pin-form" autoComplete="off">
        <h1>{formTitle}</h1>
        <Input
          name="title"
          type="text"
          placeholder="Title"
          value={pin.title}
          onChange={handleInputChange}
        ></Input>
        <br></br>
        <Input
          name="imageUrl"
          type="url"
          placeholder="Image URL"
          value={pin.imageUrl}
          onChange={handleInputChange}
          className="mt-2"
        ></Input>
        <br></br>
        <Label for="exampleSelect">Select Board</Label>
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
          className="mt-2"
        ></Input>
        <Label> Favorite </Label>
        <br></br>
        <Button
          color="danger"
          type="submit"
          onClick={handleSubmit}
          className="mt-4"
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
