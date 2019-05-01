import React from 'react';
import './App.css';
import Screen from '../Screen/Screen';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // mock expression for layout purposes
      expression: ['1', '*', '2', '*', '(', '5.2', '+', '1', ')'],
    }
  }

  render() {
    return (
      <div className="App">
        <Screen display={this.state.expression.join("")} />
      </div>
    )
  }
}

export default App;
