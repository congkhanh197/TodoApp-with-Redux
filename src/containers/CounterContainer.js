import React, { Component } from 'react';

import { connect } from 'react-redux';
import Counter from '../components/Counter.js';
import addNumber, { subNumber } from '../actions/CounterViewActions';

class CounterContainer extends Component {

  render() {
    const { number } = this.props.number;
    return (
      <Counter val={ number } {...this.props} />
    );
  }
}

export default connect( 
  state => {
    return {
      number : state.number
    }
  },
  dispatch => {
    return {
      addValue: (val) => dispatch( addNumber(val) ),
      subValue: (val) => dispatch( subNumber(val) )
    }
  }

)(CounterContainer);