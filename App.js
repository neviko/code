
import React, { Component } from 'react';
import {Text,View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers'
import firebase from 'firebase';
import LoginForm from './src/containers/LoginForm';
import ReduxThunk from 'redux-thunk';


class App extends Component {

  componentWillMount() {
  
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBZpOazNN_wTQVvTYGeICNmwlNZ76Wshe0",
    authDomain: "sharedevents-c7d0b.firebaseapp.com",
    databaseURL: "https://sharedevents-c7d0b.firebaseio.com",
    projectId: "sharedevents-c7d0b",
    storageBucket: "sharedevents-c7d0b.appspot.com",
    messagingSenderId: "266733195949"
  };
  firebase.initializeApp(config);

  }

  render() {

    const store = createStore(reducers, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}><LoginForm /></Provider>
      
    );
  }


}

export default App;