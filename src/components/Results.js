
import React from 'react'
import { connect } from 'react-redux';

const Results = (props) => {
    if (props.drinks.length < 1){
    return null;
    }
    return props.drinks.map((drink) => {
      return( <div>
        <h1> { drink.name } </h1>
      </div> )
    })
}

const mapStateToProps = state => {
  return {
      drinks: state
  }
}

export default connect(mapStateToProps)(Results);