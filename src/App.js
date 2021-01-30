import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import NewDrink from './containers/NewDrink';
import Landing from './components/Landing';
import Invalid from './components/Invalid';
import Drinks from './containers/Drinks';
import ShowDrink from './containers/ShowDrink';
import './index.css';

class App extends Component {

  render(){
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/drinks/new" component={NewDrink} />
            <Route exact path="/drinks" component={Drinks} />
            <Route exact path='/drink/:drinkID' component={ShowDrink} />
            <Route exact path="/invalid" component={Invalid} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default connect()(App);
