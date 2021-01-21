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
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default EditDrink;