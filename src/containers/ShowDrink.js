import React, { Component } from 'react';

class ShowDrink extends Component {
    constructor(props) {
        super(props);

        let paramsId = parseInt(this.props.match.params.id, 10)
        let drink = props.drinks.find( drink => drink.id === paramsId);

        this.state = {
            drink: drink ? drink : {name: 'N/A', main_liquor: 'N/A', ingredients: 'N/A', instructions: 'N/A'}
        }
    }


    render() {
        const { name, main_liquor, ingredients, instructions } = this.state.drink;
        return (
            <div>
                <h4>{ name }</h4>
                <h5>Main Liquor: { main_liquor }</h5>
                <h5>Ingredients: { ingredients }</h5>
                <h5>Instructions: { instructions }</h5>
            </div>
        );
    }
}

export default ShowDrink;