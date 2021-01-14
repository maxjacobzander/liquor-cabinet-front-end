import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/users/`)
    .then(resp => resp.json())
    .then(console.log)
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
