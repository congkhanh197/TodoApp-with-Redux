import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Input} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import addTask from '../actions/AddViewActions';

class AddView extends Component {
  constructor(props){
    super(props)
    this.state={
      text: ''
    }
  }

  handleChange = (event,data)=>{
    this.setState({text : data.value})
  }

  render() {
    const onAddNewTask = this.props.onAddNewTask;
    return (
      <div style = {{textAlign:'center'}}>
        <h2 >My To Do List</h2>
        
        <Input 
          icon='plus' 
          placeholder='Write your task...'
          focus
          onChange = {this.handleChange}
          value = {this.state.text}
          onKeyPress = {(proxy)=>{
            if(proxy.charCode === 13){
              onAddNewTask(this.state.text)
              this.setState({text:''})
            }
          }}
          />
      </div>   
    );
  }
}

export default connect( 
  state => {
    return {
      
    }
  },
  dispatch => {
    return {
      onAddNewTask: (name) => dispatch( addTask(name))
    }
  }

)(AddView);