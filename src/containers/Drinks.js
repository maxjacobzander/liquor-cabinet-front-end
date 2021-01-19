import React, { Component } from 'react';
import DrinkItem from '../components/DrinkItem';

export class Drinks extends Component {
    render() {
        const drinks = this.props.drink.map(( drink, i ) => <DrinkItem key={i} main_liquor ={ drink.main_liquor } />)
        return (
            <div>
                <h3>Drinks</h3>
                <ul classname="LiquorCollection">
                    { drinks }
                </ul>
            </div>
        );
    }
}

DrinkItem.defaultProps = {
    drinks: []
}

export default Drinks;