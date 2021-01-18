import React, { Component } from 'react';

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
            </form>
                
            </div>
        );
    }
}

export default NewDrink;