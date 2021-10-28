import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import type { Action } from 'redux';

import myLogger from '../middlewares/logger';

import Intro from './Intro';

export type User ={
  name    :string,
  email   :string,
  password:string
}

export type AppState = {
  loggedIn : boolean,
  IoggedUser : User
};

const initialState: AppState = {
  loggedIn : false,
  IoggedUser : {
    name    : '', 
    email   : '', 
    password: ''
  }
}

const rootReducer = ( state:AppState=initialState, action: Action ) => state
const store = createStore(rootReducer, applyMiddleware(myLogger));

function App() {
  return (
    <ReduxProvider store={store}>
      
      <Intro/>

    </ReduxProvider>
  );
};



export default App;