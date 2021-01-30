// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchDrinks } from '../actions/actions'

// class ShowDrink extends Component {
//     constructor(props) {
//         super(props);

//         let paramsId = parseInt(this.props.match.params.id, 10)
//         let drink = props.drinks.find( drink => drink.id === paramsId);

//         this.state = {
//             drink: drink ? drink : {name: 'N/A', main_liquor: 'N/A', ingredients: 'N/A', instructions: 'N/A'}
//         }
//     }


//     render() {
//         const { name, main_liquor, ingredients, instructions } = this.state.drink;
//         return (
//             <div>
//                 <h4>{ name }</h4>
//                 <h5>Main Liquor: { main_liquor }</h5>
//                 <h5>Ingredients: { ingredients }</h5>
//                 <h5>Instructions: { instructions }</h5>
//             </div>
//         );
//     }
// }

// export default connect(null, { fetchDrinks })(ShowDrink);


import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ShowDrink = ({ match }) => {
    const { drinkID } = match.params
    const selDrink = parseInt(drinkID) - 1
    let drink = useSelector(state => state[selDrink])
    debugger

        if (!drink) {
            return (
              <section>
                <h2>Hmmm...The Drink You're Looking for Isn't Here.</h2>
                <h3>Want To Add It? <Link to="/drinks/new" exact>Click Here</Link></h3>
              </section>
            )
          }

    // const { name, main_liquor, ingredients, instructions } = this.state.drink;
    return (
        <>
              <div className='show-drink'>
                <h4>{ drink.name }</h4>
                <h5>Main Liquor: { drink.main_liquor }</h5>
                <h5>Ingredients: { drink.ingredients }</h5>
                <h5>Instructions: { drink.instructions }</h5>
              </div>
        </>
    );
}

export default ShowDrink;
