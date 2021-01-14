import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount() {
    // fetch(`http://localhost:3001/api/v1/users/`)
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }

export default connect()(App);
