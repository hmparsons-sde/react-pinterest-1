import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { createPin, updatePin } from '../../helpers/data/PinsData';

export default function PinForm({
  user, formTitle, setPins
}) {
  const [pin, setPin] = useState({
    title: '',
    imageUrl: '',
    favorite: false,
    uid: user.uid,
    boardId: ''
  });

  const handleInputChange = (e) => {
    setPin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'favorite' ? e.target.checked : e.target.value
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
    <div className='pin-form-container'>
      <form
        className='add-pin-form'
        autoComplete='off'
      >
        <h1>{formTitle}</h1>
        <input
          name='title'
          type='text'
          placeholder='Title'
          value={pin.title}
          onChange={handleInputChange}
        >
        </input><br></br>
        <input
          name='imageUrl'
          type='url'
          placeholder='Image URL'
          value={pin.imageUrl}
          onChange={handleInputChange}
          className="mt-2"
        >
        </input><br></br>
        <input
            name="favorite"
            type="checkbox"
            checked={pin.favorite}
            onChange={handleInputChange}
            className="mt-2"
          ></input><label> Favorite </label>
          <br></br>
        <Button color="danger" type='submit' onClick={handleSubmit} className='mt-4'>Submit</Button>
      </form>
    </div>
  );
}

PinForm.propTypes = {
  user: PropTypes.any,
  formTitle: PropTypes.string,
  favorite: PropTypes.bool,
  setPins: PropTypes.func
};
