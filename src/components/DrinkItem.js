
import React from 'react'
import { Link } from 'react-router-dom';

const DrinkItem = (props) => {
    console.log(props)
    return (
    <li className="collection-item">
      Name: {props.drink.name}<br/>
      Main Liquor: {props.drink.main_liquor}<br />
      Ingredients: {props.drink.ingredients}<br />
      Instructions: {props.drink.instructions}<br />
      <Link to={`/drinks/${props.drink.id}`}>View</Link>
    </li>
    );
}

export default DrinkItem