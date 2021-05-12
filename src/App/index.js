import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/Navigation/NavBar';
import Routes from '../helpers/Routes';
import { getPins } from '../helpers/data/PinsData';

function App() {
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        getPins(authed.uid).then((pinsArray) => setPins(pinsArray));
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes
        pins={pins}
        setPins={setPins}
        user={user}
        />
      </Router>
    </div>
  );
}

export default App;
