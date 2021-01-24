import React, { Component } from 'react';
import { editDrink, fetchDrinkForEdit } from '../actions/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class EditDrink extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            ingredients: '',
            instructions: '',
            rating: '',
            main_liquor: ''
        }
    }
    
    componentDidMount(){
        this.props.fetchDrinkForEdit()
        this.setState({
            name: {props.drink.name},
            main_liquor: {props.drink.main_liquor},
            ingredients: {props.drink.ingredients},
            instructions: {props.drink.instructions}
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = event => {
        preventDefault()
        this.props.addDrink( this.state );
        this.props.history.push('/drinks');
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default EditDrink;