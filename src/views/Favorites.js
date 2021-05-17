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

// So here's my thinking, not necessarily knowing everything happening in the PinCard component. Essentially, you're passing in your pin object and then destructuring out a bunch of things from that to create your card. So you will only need to pass it that destructured pin object utilizing the spread operator. That make any sense?
// Go check out your router component so you can see exactly what props you're passiing into your Favorites component
// favorites, set favorites, user
// But favorites and setFavorites only exist in the scope of this component, right? So you don't need to pass those in as props at all
// And you don't even need to set pins either. The only thing I think you actually need to pass this component is your user
// Make sure to change it in your routes too.
// ok I did that. does this look vbetter?
// Yeah, lot cleaner. I think the part that caused confusion is the passing around of props.
// ok tell me when to try it! I LOVE YOUUU
// I love you tooo! Try it now and see if any errors or weird shit comes up
// we are working on single board with Aja now, but could you check out the edit form in PinCard?
// OMG IT WORKS
// 
export default function Favorites(user) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavoritePins().then(setFavorites);
  }, []);
  return (
    <>
    <FavoritesContainer>
      {favorites.length === 0
      && <h3 className="text-center mt-2">
          Nothing here! Add something to favorites.
        </h3>
      }

      {favorites.map((favoritePin) => <PinCard
          {...favoritePin}
          key={favoritePin.firebaseKey}
          user={user}
        />)}
    </FavoritesContainer>
    </>
  );
}

Favorites.propTypes = {
  setPins: PropTypes.func,
  user: PropTypes.any,
  firebaseKey: PropTypes.string,
  pins: PropTypes.array
};
