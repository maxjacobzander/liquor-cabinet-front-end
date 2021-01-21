import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDrinks } from '../actions/actions'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            main_liquor: ''
        }
    }

    handleChange = event => {
		this.setState({
			main_liquor: event.target.value
        });
    };

    handleSubmit = event => {
        debugger
    }
    
    render() {
        return (
            <div class="search-form">
                <form onSubmit={this.handleSubmit}>
                    <h3>
                        <label>
                        What's in your cabinet?
                        <input type="text" name="search" placeholder="Please Enter A Type Of Liquor (ie. Whiskey, Tequila, etc.)" onChange={this.handleChange} value={this.state.main_liquor}/>
                        </label>
                        <input type="submit" value="search" />
                    </h3>
                </form>
            </div>
        );
    }
}

export default connect(null, {fetchDrinks})(Search);