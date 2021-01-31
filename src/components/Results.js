import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Results = (props) => {

  // componentDidMount() {
  //   this.setState = ""
  // }

    if (props.drinks.length < 1){
    return null;
    }
    return props.drinks.map((drink) => {
      return(
        <div className="drink-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
             <div className="flip-card-front">
               <strong> {drink.name} </strong>
             </div>
            <div className="flip-card-back">
              <strong>Main Liquor:</strong> {drink.main_liquor}<br /><br/>
              <strong>Ingredients:</strong> {drink.ingredients}<br /><br/>
              <strong>Instructions:</strong> {drink.instructions}<br /><br/>
              <Link to={`/drink/${drink.id}`} ><strong>View This Drink</strong></Link>
            </div>
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