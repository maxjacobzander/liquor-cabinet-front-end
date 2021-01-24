import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
import { NavBar } from './components/NavBar';
import Home from './containers/Home';
import NewDrink from './containers/NewDrink';
import Results from './components/Results';
import Landing from './components/Landing';
import Invalid from './components/Invalid';
// import Search from './containers/Search';
// import NewDrink from './containers/NewDrink';
// import ShowDrink from './containers/ShowDrink';
import Drinks from './containers/Drinks';
// import drinksReducer from './reducers/drinksReducer';
import './index.css';

class App extends Component {

  constructor() {
    super();

    // this.state = {
    //   id: 0,
    //     drinks: []
    // }
  }

  // componentDidMount() {
  //   fetch(`http://localhost:3001/api/v1/drinks`)
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  render(){
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/drinks/new" component={NewDrink} />
            <Route exact path="/drinks" component={Drinks} />
            <Route exact path="/invalid" component={Invalid} />
            {/* <Route exact path="/results" component={Results} /> */}
            {/* <Route path="/drinks/${drinkID}" component={ShowDrink} /> */}
          </Switch>
        </div>
        <Results />
        <NavBar />
      </Router>
      // <div className="App">
      //   <Home />
      //   <Search />
      //   {/* <Drinks /> */}
      //   {/* <ShowDrink /> */}
      //   {/* <NewDrink /> */}
      //   <NavBar />
      // </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }

export default connect()(App);
