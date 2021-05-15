import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getBoardPins from '../helpers/data/BoardPinsData';
import PinCard from '../components/Cards/PinCard';

export default function SingleBoardView() {
  const [board, setBoard] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getBoardPins(firebaseKey)
      .then(setBoard);
    // or .then((response) => setAuthor(response)); SAME THING AS ABOVE -SHORTHAND VERSION
  }, []);

  return (
    <div className="card-container align-content-center" id="pin-cards">
        {pins.map((pin) => (
          <PinCard
            key={pin.firebaseKey}
            user={user}
            setPins={setPins}
            {...pin}
          />
        ))}
      </div>
  );
}
