import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import PinCard from '../components/Cards/PinCard';
import PinForm from '../components/Forms/PinForm';

export default function PinView({
  user, pins, setPins, boards
}) {
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    setShowButton((prevState) => !prevState);
  };
  return (
    <>
    <section className="header mt-2">
      { !showButton
        ? <Button className="m-2" color='danger' onClick={handleClick}>Add Pin</Button>
        : <div>
        <Button className="m-2" color='secondary' onClick={handleClick}>Close</Button>
          <PinForm className="justify-content-center mt-3" setPins={setPins} user={user} boards={boards}/>
        </div>
        }
      </section>
      <div className="card-container align-content-center" id="pin-cards">
        {pins.map((pin) => (
          <PinCard
            key={pin.firebaseKey}
            user={user}
            setPins={setPins}
            boards={boards}
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
  user: PropTypes.any,
  boards: PropTypes.array,
};
