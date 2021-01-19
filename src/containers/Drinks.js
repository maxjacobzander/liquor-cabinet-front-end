import React, { Component } from 'react';
import DrinkItem from '../components/DrinkItem';
import { connect } from 'react-redux';

export class Drinks extends Component {
    render() {
        const drinks = this.props.drinks.map(( drink, i ) => <DrinkItem key={i} drink={drink} />)
        return (
            <div>
                <h3>Drinks</h3>
                <ul classname="DrinkCollection">
                    { drinks }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        drinks: state
    }
}

export default connect(mapStateToProps)(Drinks);