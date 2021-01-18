import React, { Component } from 'react';
import { addDrink } from '../actions/index'
import { connect } from 'react-redux'

class NewDrink extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            ingredients: '',
            instructions: '',
            rating: '',
            main_liquor: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addDrink( this.state );
        this.props.history.push('/drinks');
    }

    render() {
        return (
            <div>
            <form onSubmit={ this.handSubmit }>
                <h2>Add A New Drink To Our Database</h2>
                <div classname="new-drink-input">
                    <label>
                    Name:
                    <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange } />
                    </label>
                </div>
                <div className="new-drink-input">
                    <label>
                    Main Liquor:
                    <input type="text" name="main_liquor" id="main_liquor" value={ this.state.main_liquor } onChange={ this.handleChange }/>
                    </label>
                </div>
                <div className="new-drink-input">
                    <label>
                    Ingredients (separated by commas):
                    <input type="text" name="ingredients" id="ingredients" value={ this.state.ingredients } onChange={ this.handleChange }/>
                    </label>
                </div>
                <div className="new-drink-input">
                    <label>
                    Instructions:
                    <input type="text" name="instructions" id="instructions" value={ this.state.instructions } onChange={ this.handleChange }/>
                    </label>
                </div>

                    <input type="submit" value="Submit Drink" />
            </form>
                
            </div>
        );
    }
}

export default connect(null, {addDrink})(NewDrink);