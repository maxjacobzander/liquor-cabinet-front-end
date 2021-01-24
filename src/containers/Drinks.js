import React, { Component } from 'react';
import DrinkItem from '../components/DrinkItem';
import { connect } from 'react-redux';
import { fetchDrinks } from '../actions/actions';
import LogoHeader from '../components/LogoHeader'

export class Drinks extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    updateSearch(event){
        this.setState({search: event.target.value})
    }

    componentDidMount(){
        this.props.fetchDrinks()
    }

    render() {
        // const drinks = this.props.drinks.map(( drink, i ) => <DrinkItem key={i} drink={drink} />)
        let drinks = this.props.drinks.filter(
            (drink) => {
                return drink.ingredients.indexOf(this.state.search) !== -1 || drink.main_liquor.indexOf(this.state.search) !== -1;
            }
        );
        let filteredDrinks = drinks.map(( drink, i ) => <DrinkItem key={i} drink={drink} />)
        return (
            <div>
                <LogoHeader />
                <h2>Drinks</h2>
                <h3>View All Drinks Here or Enter A Type of Liquor Below to Search</h3>
                <input type="text" id="allDrinkSearchBar"
                    placeholder="Please Enter A Type Of Liquor (ie. Whiskey, Tequila, etc.)"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />
                <br /> <br />
                <div classname="DrinkCollection">
                    { filteredDrinks }
                </div>
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