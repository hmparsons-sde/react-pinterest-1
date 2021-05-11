// import React from 'react';
// import PropTypes from 'prop-types';
// import { Route, Switch, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, user, ...rest }) => {
//   const routeChecker = (taco) => (user
//     ? (<Component {...taco} user={user} />)
//     : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

// PrivateRoute.propTypes = {
//   component: PropTypes.func,
//   user: PropTypes.any
// };

// function Routes() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path='/' component={} />
//         <PrivateRoute

//         />
//         <PrivateRoute

//         />
//       </Switch>
//     </div>
//   );
// }

// export default Routes;
