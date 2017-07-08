import React, {
  Component
} from 'react';
import './App.css';
import { createStore } from 'redux'
//import App from './components/App'
import reducer from './reducers'

let store
 = createStore(reducer)

class App extends Component {
  constructor(props) {
    super(props)
    this.stage = {}
  }
  render() {
    return ( 
      <div></div>
    );
  }
}

export default App;
