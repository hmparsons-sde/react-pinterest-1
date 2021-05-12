import React from 'react';
import PropTypes from 'prop-types';
import BoardForm from '../components/BoardForm';

export default function Boards({ user }) {
  return (
    <div>
      <h1>Boards</h1>
      <BoardForm user={user} />
    </div>
  );
}

Boards.propTypes = {
  user: PropTypes.any
};
