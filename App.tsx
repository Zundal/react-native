import React from 'react';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import type { Action } from 'redux';
import { Button, StyleSheet, Text, View } from 'react-native';

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
    name : '', 
    email:'', 
    password:''
  }
}

const rootReducer = ( 
  state:AppState=initialState, action: Action
) => state
const store = createStore(rootReducer);

function App() {
  return (
    <ReduxProvider store={store}>
      <View style={styles.container}>
        <Text style={styles.greeting}>
          
        </Text>
        <View>
          <Button
            title="Increase enthusiasm"
            accessibilityLabel="increment"
            color="blue"
          />
          <Button
            title="Decrease enthusiasm"
            accessibilityLabel="decrement"
            color="red"
          />
        </View>
      </View>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex          : 1,
    alignItems    : 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize      : 20,
    fontWeight    : 'bold',
    margin        : 16
  }
});
  
export default App;