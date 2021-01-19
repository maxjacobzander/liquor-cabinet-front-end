
import React from 'react'
import { Link } from 'react-router-dom';

const DrinkItem = ({ drink }) => {
    return (
    <li className="collection-item">
      Name: {drink.name}<br/>
      Main Liquor: {drink.main_liquor}<br />
      Ingredients: {drink.ingredients}<br />
      Instructions: {drink.instructions}<br />
      <Link to={`/drinks/${drink.id}`}>View</Link>
    </li>
    );
}

export default DrinkItem