import React, { Component } from 'react';
import DrinkItem from '../components/DrinkItem';
import { connect } from 'react-redux';
import { fetchDrinks } from '../actions/actions';
import LogoHeader from '../components/LogoHeader'

export class Drinks extends Component {
    componentDidMount(){
        this.props.fetchDrinks()
    }

    render() {
        const drinks = this.props.drinks.map(( drink, i ) => <DrinkItem key={i} drink={drink} />)
        return (
            <div>
                <LogoHeader />
                <h2>Drinks</h2>
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

export default connect(mapStateToProps, { fetchDrinks })(Drinks);