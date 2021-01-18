import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from './containers/Home';
import Search from './components/Search';
import './index.css';

class App extends Component {

  // constructor() {
  //   super();

  //   this.state = {

  //   }
  // }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/drinks`)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render(){
    return (
      <div className="App">
        <Home />
        <Search />
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
