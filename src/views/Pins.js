import React from 'react';
import PropTypes from 'prop-types';
import PinCard from '../components/Cards/PinCard';

export default function PinView({ user, pins, setPins }) {
  return (
    <>
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
