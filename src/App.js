import React, { Component } from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AddViewContainer from './containers/AddViewContainer';
import CounterContainer from './containers/CounterContainer';
import TaskListContainer from './containers/TaskListContainer';


import numberReducer from './reducers/NumberReducer';
import taskListReducer from './reducers/TaskListReducer';

// Store

const test = store=>next=>action =>{
    alert(JSON.stringify(action))
}

const store = createStore( 
  combineReducers({ 
    number: numberReducer,
    taskList: taskListReducer
  }), applyMiddleware(thunk,test)
);
store.subscribe(()=>{
  console.log(store.getState())
})



export default class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <div>
          <CounterContainer />
          <AddViewContainer />
          <TaskListContainer />
        </div>  
      </Provider>
    );
  }
}

//  