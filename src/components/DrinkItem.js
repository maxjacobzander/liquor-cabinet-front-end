
import React from 'react'
import { Link } from 'react-router-dom';

const DrinkItem = (props) => {
    console.log(props)
    return (
    <ul className="collection-item">
      <li>Name: {props.drink.name}</li><br/>
      <li>Main Liquor: {props.drink.main_liquor}</li><br />
      <li>Ingredients: {props.drink.ingredients}</li><br />
      <li>Instructions: {props.drink.instructions}</li><br />
      <Link to={`/drinks/${props.drink.id}`}>View</Link>
    </ul>
    );
}

export default DrinkItem