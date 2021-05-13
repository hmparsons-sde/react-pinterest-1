import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import PinCard from '../components/Cards/PinCard';
import PinForm from '../components/Forms/PinForm';

export default function PinView({ user, pins, setPins }) {
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    setShowButton((prevState) => !prevState);
  };
  return (
    <>
    <section className="header">
      <header className="h1">{user.fullName}</header>
      { !showButton
        ? <Button color='info' onClick={handleClick}>Add Pin</Button>
        : <div>
        <Button color='info' onClick={handleClick}>Close</Button>
          <PinForm setPins={setPins} user={user}/>
        </div>
        }
      </section>
      <div className="card-container" id="pin-cards">
        {pins.map((pin) => (
          <PinCard
            key={pin.firebaseKey}
            user={user}
            setPins={setPins}
            {...pin}
          />
        ))}
      </div>
     </>
  );
}

PinView.propTypes = {
  pins: PropTypes.array,
  setPins: PropTypes.func,
  user: PropTypes.any
};
