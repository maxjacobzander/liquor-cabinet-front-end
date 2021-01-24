import React from 'react'
import { connect } from 'react-redux';

const Results = (props) => {
    if (props.drinks.length < 1){
    return null;
    }
    return props.drinks.map((drink) => {
      return( <div>
        {/* <h1> { drink.name } </h1> */}
      <ul className="collection-item">
        <li>Name: {drink.name}</li><br/>
        <li>Main Liquor: {drink.main_liquor}</li><br />
        <li>Ingredients: {drink.ingredients}</li><br />
        <li>Instructions: {drink.instructions}</li><br />
        </ul>
      </div> )
    })
}

const mapStateToProps = state => {
  return {
      drinks: state
  }
}

export default connect(mapStateToProps)(Results);