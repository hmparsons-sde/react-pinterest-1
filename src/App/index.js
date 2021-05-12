import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/Navigation/NavBar';
import Routes from '../helpers/Routes';
import { getPins } from '../helpers/data/PinsData';
import { getBoards } from '../helpers/data/BoardsData';

function App() {
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState([]);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        getBoards(authed.uid).then((boardsArray) => setBoards(boardsArray));
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
        boards={boards}
        setBoards={setBoards}
        pins={pins}
        setPins={setPins}
        user={user}
        />
      </Router>
    </div>
  );
}

export default App;
