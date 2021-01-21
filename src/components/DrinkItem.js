
import React from 'react'
import { connect } from 'react-redux';
import { editDrink } from '../actions/actions'

const DrinkItem = (props) => {
    console.log(props)
    return (
    <ul className="collection-item">
      <li>Name: {props.drink.name}</li><br/>
      <li>Main Liquor: {props.drink.main_liquor}</li><br />
      <li>Ingredients: {props.drink.ingredients}</li><br />
      <li>Instructions: {props.drink.instructions}</li><br />
      <button onClick={()=>editDrink(props.drink.id)}>Edit Drink</button>
    </ul>
    );
}

export default connect(null, { editDrink })(DrinkItem)