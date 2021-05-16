import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getFavoritePins } from '../helpers/data/PinsData';
import PinCard from '../components/Cards/PinCard';

const FavoritesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;

export default function Favorites({
  user, setPins, firebaseKey
}) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavoritePins().then(setFavorites);
  }, []);// if (pin.favorite === false || pin.favorite === 'false')
  return (
    <>
    <FavoritesContainer>
      {favorites.length === 0
      && <h3 className="text-center mt-2">
          Nothing here! Add something to favorites.
        </h3>
      }

    {favorites.filter((pin) => pin.favorite === true).map(() => (
      <PinCard
        key={firebaseKey}
        user={user}
        setPins={setPins}
      />
    ))};
    </FavoritesContainer>
    </>
  );
}

Favorites.propTypes = {
  setPins: PropTypes.func,
  user: PropTypes.any,
  firebaseKey: PropTypes.string
};
