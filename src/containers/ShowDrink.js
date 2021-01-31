import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LogoHeader from '../components/LogoHeader'

const ShowDrink = ({ match }) => {
    const { drinkID } = match.params
    const selDrink = parseInt(drinkID)
    let drink = useSelector(state => state.find(drink => drink.id === selDrink))

        if (!drink) {
            return (
                <section>
            <LogoHeader />
                <h2>Hmmm...The Drink You're Looking for Isn't Here.</h2>
                <h3>Want To Add It? <Link to="/drinks/new" exact>Click Here</Link></h3>
              </section>
            )
          }

    return (
        <>
            <LogoHeader />
              <div className='show-drink'>
                <h2>{ drink.name }</h2>
                <h3>Main Liquor: { drink.main_liquor }</h3>
                <h3>Ingredients: { drink.ingredients }</h3>
                <h3>Instructions: { drink.instructions }</h3>
              </div>

              <Link to={"/drinks"}>Return to All Drinks</Link>
        </>
    );
}

export default ShowDrink;
