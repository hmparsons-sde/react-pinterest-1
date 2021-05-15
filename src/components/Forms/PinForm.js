import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Input, Label
} from 'reactstrap';
import { createPin, updatePin } from '../../helpers/data/PinsData';

export default function PinForm({
  user, formTitle, setPins, title, imageUrl, firebaseKey
}) {
  const [pin, setPin] = useState({
    title: title || '',
    imageUrl: imageUrl || '',
    firebaseKey: firebaseKey || null,
    favorite: false,
    uid: user.uid
  });

  const handleInputChange = (e) => {
    setPin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.firebaseKey) {
      updatePin(pin, user.uid).then((pinsArray) => setPin(pinsArray));
    } else {
      createPin(pin, user.uid).then((pinsArray) => setPins(pinsArray));
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
        <Input
          name="favorite"
          type="checkbox"
          checked={pin.favorite}
          onChange={handleInputChange}
          className="mt-2"
        ></Input>
        <Label> Favorite </Label>
        <br></br>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Select Board</Form.Label>
          <Form.Control as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
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
  firebaseKey: PropTypes.string
};
