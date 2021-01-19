import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <nav className="nav-bar">
        <Router>
          <ul className="nav-container">
            <NavLink to="/">Home</NavLink>
              <li><NavLink to="/drinks/new">Add A Drink</NavLink></li>
              <li><NavLink to="/drinks">View All Drinks</NavLink></li>
            </ul>
          </Router>
        </nav>
      </div>
    )
  }
}

export default NavBar