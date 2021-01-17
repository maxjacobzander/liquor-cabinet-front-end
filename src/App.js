import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from './containers/Home';
import './index.css';

class App extends Component {

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/liquors/1/drinks`)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render(){
    return (
      <div className="App">
        <Home />
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
