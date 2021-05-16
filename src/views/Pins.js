import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import PinCard from '../components/Cards/PinCard';
import PinForm from '../components/Forms/PinForm';

const PinContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;
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
      <PinContainer className="card-container align-content-center" id="pin-cards">
        {pins.map((pin) => (
          <PinCard
            key={pin.firebaseKey}
            user={user}
            setPins={setPins}
            boards={boards}
            {...pin}
          />
        ))}
      </PinContainer>
     </>
  );
}

PinView.propTypes = {
  pins: PropTypes.array,
  setPins: PropTypes.func,
  user: PropTypes.any,
  boards: PropTypes.array,
};
