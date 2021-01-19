import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from './containers/Home';
import Search from './components/Search';
// import NewDrink from './containers/NewDrink';
// import ShowDrink from './containers/ShowDrink';
// import Drinks from './containers/Drinks';
// import drinksReducer from './reducers/drinksReducer';
import './index.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      id: 0,
        drinks: []
    }
  }

  // componentDidMount() {
  //   fetch(`http://localhost:3001/api/v1/drinks`)
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  render(){
    return (
      <div className="App">
        <Home />
        <Search />
        {/* <Drinks /> */}
        {/* <ShowDrink /> */}
        {/* <NewDrink /> */}
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
