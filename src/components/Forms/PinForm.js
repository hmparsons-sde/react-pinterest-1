import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { createPin, updatePin } from '../../helpers/data/PinsData';

const PinForm = ({
  formTitle,
  setPins,
  user,
  ...pinObj
}) => {
  const [pin, setPin] = useState({
    imageUrl: pinObj?.imageUrl || '',
    name: pinObj?.name || '',
    url: pinObj?.url || '',
    firebaseKey: pinObj?.firebaseKey || null,
    uid: pinObj?.uid || user.uid
  });

  const handleInputChange = (e) => {
    setPin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.firebaseKey) {
      updatePin(pin, pinObj.uid).then((pinsArray) => setPins(pinsArray));
    } else {
      createPin(pin, user.uid).then((pinsArray) => setPins(pinsArray));
    }
  };

  return (
    <div className='pin-form'>
      <Form id='createPinForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Input
            name='name'
            id='name'
            value={pin.url}
            type='text'
            placeholder='Name your pin'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
         <Input
            name='imageUrl'
            type='text'
            placeholder='Enter an Image URL'
            value={pin.imageUrl}
            onChange={handleInputChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            name='url'
            id='url'
            value={pin.url}
            type='text'
            placeholder='Enter an Article Title'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button className='m-2 btn-lg' type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

PinForm.propTypes = {
  formTitle: PropTypes.string,
  setPins: PropTypes.func,
  user: PropTypes.uid
};

export default PinForm;
