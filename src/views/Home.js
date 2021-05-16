import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div>
    { user
      ? <section className='header'>
        <img className='profileImage' src={user.profileImage} />
        </section>
      : <section className='header'>
          <header className='h1'>Please Login to Continue</header>
        </section>
      }
   </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
