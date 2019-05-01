import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: ['1', '*', '2', '*', '(', '5.2', '+', '1', ')'],
    }
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.expression}</p>
      </div>
    )
  }
}

export default App;
