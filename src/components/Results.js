import React from 'react'
import { connect } from 'react-redux';

const Results = (props) => {
    if (props.drinks.length < 1){
    return null;
    }
    return props.drinks.map((drink) => {
      return(
        <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <strong> Name:</strong> {drink.name}
        </div>
        <div class="flip-card-back">
          <strong>Main Liquor:</strong> {drink.main_liquor}<br /><br/>
          <strong>Ingredients:</strong> {drink.ingredients}<br /><br/>
          <strong>Instructions:</strong> {drink.instructions}<br /><br/>
        </div>
        </div>
        </div> 
      // <div>
      //   <h1> { drink.name } </h1>
      // <ul className="collection-item">
      //   <li>Name: {drink.name}</li><br/>
      //   <li>Main Liquor: {drink.main_liquor}</li><br />
      //   <li>Ingredients: {drink.ingredients}</li><br />
      //   <li>Instructions: {drink.instructions}</li><br />
      //   </ul>
      // </div> )
    // }
    )
  })
  }

const mapStateToProps = state => {
  return {
      drinks: state
  }
}

export default connect(mapStateToProps)(Results);