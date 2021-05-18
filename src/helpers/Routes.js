import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import Boards from '../views/Boards';
import Favorites from '../views/Favorites';
import Pins from '../views/Pins';
import SingleBoardView from '../views/SingleBoard';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({
  user, boards, setBoards, pins, setPins, favorites, setFavorites
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute
          exact path='/boards'
          user={user}
          component={() => <Boards boards={boards} setBoards={setBoards} user={user}/>}
        />
        <PrivateRoute
        exact path='/boards/:id'
        user={user}
        component={() => <SingleBoardView user={user}/>}
      />
        <PrivateRoute
          exact path='/pins'
          user={user}
          component={() => <Pins pins={pins} setPins={setPins} user={user} boards={boards} setBoards={setBoards}/>}
        />
        <PrivateRoute
          exact path='/favorites'
          user={user}
          component={() => <Favorites favorites={favorites} setFavorites={setFavorites} user={user}/>}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  boards: PropTypes.array,
  setBoards: PropTypes.func,
  pins: PropTypes.array,
  setPins: PropTypes.func,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
  user: PropTypes.any
};
