import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <nav className="nav-bar">
          <div className="nav-container">
            <NavLink to="/" exact>Home</NavLink> | 
             <NavLink to="/drinks/new" exact>Add A Drink</NavLink> |
             <NavLink to="/drinks" exact>View All Drinks</NavLink>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar