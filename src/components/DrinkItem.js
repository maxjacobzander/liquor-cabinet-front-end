
import React from 'react'
import { connect } from 'react-redux';
import { editDrink } from '../actions/actions'
import { Link } from 'react-router-dom';

const DrinkItem = (props) => {
  
  const { name, main_liquor, ingredients, instructions, id} = props.drink
  
    console.log(props)
    return (
      <div className="drink-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <strong> {name} </strong>
            </div>
        <div className="flip-card-back">
          <strong>Main Liquor:</strong> {main_liquor}<br /><br/>
          <strong>Ingredients:</strong> {ingredients}<br /><br/>
          <strong>Instructions:</strong> {instructions}<br /><br/>
          <Link to={`/drink/${id}`} ><strong>View This Drink</strong></Link>
        </div>
        </div>
      </div>
      </div>
    //   <div className="drink-name">
    //     <strong>Name:</strong> {props.drink.name}<br/><br/>
    //     <div className="drink-details">
    //       <strong>Main Liquor:</strong> {props.drink.main_liquor}<br /><br/>
    //       <strong>Ingredients:</strong> {props.drink.ingredients}<br /><br/>
    //       <strong>Instructions:</strong> {props.drink.instructions}<br /><br/>
    //     </div>
    // </div>
    // );
    // // <div className="collection-item">
    // //   <strong>Name:</strong> {props.drink.name}<br/><br/>
    // //   <strong>Main Liquor:</strong> {props.drink.main_liquor}<br /><br/>
    // //   <strong>Ingredients:</strong> {props.drink.ingredients}<br /><br/>
    // //   <strong>Instructions:</strong> {props.drink.instructions}<br /><br/>
    // //   {/* <button onClick={()=>editDrink(props.drink.id)}>Edit Drink</button> */}
    // // </div>
    // // );
  )
}

export default connect(null, { editDrink })(DrinkItem)