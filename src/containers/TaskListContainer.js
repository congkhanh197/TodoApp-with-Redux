import React, { Component } from 'react';

import { connect } from 'react-redux';
import TaskList from '../components/TaskList.jsx';
import deleteTask, { finishTask } from '../actions/TaskListViewActions';

class TaskListContainer extends Component {

  render() {
    const { data } = this.props.listData;
    return(
      <TaskList data={data} {...this.props} />
    );
  }
}

export default connect( 
  state => {
    return {
      listData : state.taskList
    }
  },
  dispatch => {
    return {
      onFinishedItem: (index) => dispatch( finishTask(index) ),
      onDeleteItem: (index) => dispatch( deleteTask(index) )
    }
  }

)(TaskListContainer);