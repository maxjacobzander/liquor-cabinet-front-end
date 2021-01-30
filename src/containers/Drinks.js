import React, { Component } from 'react';
import DrinkItem from '../components/DrinkItem';
import { connect } from 'react-redux';
import { fetchDrinks } from '../actions/actions';
import LogoHeader from '../components/LogoHeader'
import NavBar from '../components/NavBar'

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
        const drinks = this.props.drinks.filter(
            (drink) => {
                return drink.ingredients.toLowerCase().indexOf(this.state.search) !== -1 || drink.main_liquor.indexOf(this.state.search) !== -1;
            }
        );
        let filteredDrinks = drinks.map(( drink, i ) => <DrinkItem key={i} drink={drink} />)
        return (
            <div>
                <LogoHeader />
                <h2>Drinks</h2>
                <h3>View All Drinks Here or Enter A Type of Liquor or an Ingredient Below to Search</h3>
                <input type="text" id="allDrinkSearchBar"
                    placeholder="Please Enter An Ingredient Or A Type Of Liquor To Feature (ie. Whiskey, Tequila, etc.)"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />
                <br /> <br />
                <div className="drink-wrapper">
                        { filteredDrinks }
                </div>
                <NavBar />
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