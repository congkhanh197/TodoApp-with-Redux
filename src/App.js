import React, {
  Component
} from 'react';
import './App.css';
import {
  createStore
} from 'redux'
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
    return ( <
      div >
      <
      h2 > My To Do List < /h2> <
      input type = "text"
      id = 'inputText'
      placeholder = "Write your work" / >
      <
      input type = "button"
      value = "Add"
      onClick = {
        this.handleClick
      }
      /> <
      ul > {
        this.state.listWork.map((work, index) => {
          return work.done ? < li key = {
            index
          }
          onClick = {
            this.workClick.bind(this, index)
          }
          style = {
              {
                color: 'black'
              }
            } > {
              work.name
            } < /li>: <
            li key = {
              index
            }
          onClick = {
            this.workClick.bind(this, index)
          }
          style = {
            {
              color: 'red'
            }
          } > {
            work.name
          } < /li>
        }, this).reverse()
      } < /ul>

      <
      button onClick = {
        this.listAll
      } > All < /button> <
      a > < /a> <
      button onClick = {
        this.listDone
      } > Done < /button> <
      a > < /a> <
      button onClick = {
        this.listDoing
      } > Doing < /button><br/ >
      <
      input type = 'button'
      onClick = {
        this.undoClick
      }
      value = "Undo" / >
      <
      input type = 'button'
      onClick = {
        this.redoClick
      }
      value = 'Redo' / >
      <
      /div>
    );
  }
}

export default App;
