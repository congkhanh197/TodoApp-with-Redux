import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class Counter extends Component {

  render() {

    const { val, addValue, subValue } = this.props;

    return (
      <div style ={{ textAlign:'center',marginTop: '10px', marginBottom:'10px'}}>
        <Button onClick={ () => subValue(1) } >Sub</Button>
        <p style = {{marginLeft : '10px', marginRight: '10px'}}>Counter: { val }</p>
        <Button onClick={ () => addValue(1) }>Add</Button>        
      </div>
    );
  }
}

Counter.defaultProps = {
  number : 1
}