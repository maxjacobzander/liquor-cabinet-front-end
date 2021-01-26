
import React from 'react'
import { connect } from 'react-redux';
import { editDrink } from '../actions/actions'

const DrinkItem = (props) => {
    console.log(props)
    return (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <strong> Name:</strong> {props.drink.name}
      </div>
      <div class="flip-card-back">
        <strong>Main Liquor:</strong> {props.drink.main_liquor}<br /><br/>
        <strong>Ingredients:</strong> {props.drink.ingredients}<br /><br/>
        <strong>Instructions:</strong> {props.drink.instructions}<br /><br/>
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