import React, { useEffect, useState, setUser } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './views/Home';
import { WhatWeDo } from './views/WhatWeDo';
import { NewsEvents } from './views/NewsEvents'
import { WhereWeWork } from './views/WhereWeWork'
import { ContactUs } from './views/ContactUs'
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import firebase from './firebase';
import { useAuth } from './contexts/AuthContext';

export const App = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState([]);
  const { signIn } = useAuth();
  const db = firebase.database();

  useEffect(() => {
    setUser({
        name: 'David Cortinas',
        age: 34,
        location: 'Austin'
    });
  }, []);

  useEffect(() => {
    let newMessage = [];
    db.ref('message').once('value', (snapshot) => {
        snapshot.forEach(child => {
            newMessage.push(child.val())
        })
        setMessage(newMessage);
    })
  }, [db])

  const addMessage = (e) => {
    e.preventDefault();
    
    // Keep track of original messages
    let originalMessage = message;

    // clear out current state of messages
    setMessage([]);

    // connect to message Collection
    let messageListRef = db.ref('message');

    // Get reference to current document trying to be created
    let newMessageRef = messageListRef.push();
    
    //  create the message structure
    var newMessage = {
        id: newMessageRef.key, // pulling out the key attribute from newPostRef object
        date: firebase.database.ServerValue.TIMESTAMP,
        body: e.target.body.value,
        email: e.target.email.value
    };
    // newPostRef.set(newPost);
    // adds message to firebase database
    newMessageRef.set(newMessage)
    
    //  reinitialize our state with new list of messages
    setMessage([...originalMessage, newMessage]);

    // cleara input form
    e.target.body.value = '';
}

  const signOut = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log('User signed out.');
      })
      .catch(err => {
        console.error(err);
      })
  };

  return (
    <React.Fragment>
      <div style={{ backgroundImage: "url(/nza_background.jpg)" }} className="nza-bg">
        <div className="container" id="body-container">
        <div id="body-div">
        <header>
          <Navbar signIn={signIn} signOut={signOut} />
        </header>

        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home user={{...user}} />} />
            <Route exact path='/whatwedo' render={() => <WhatWeDo />}/>
            <Route exact path='/newsevents' render={() => <NewsEvents />}/>
            <Route exact path='/wherewework' render={() => <WhereWeWork />}/>
            <Route exact path='/contactus' render={() => <ContactUs addMessage={addMessage} />}/>
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
        </div>
        </div>
      </div>
    </React.Fragment>
  )
}


