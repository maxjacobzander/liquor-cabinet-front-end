import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchDrinks } from '../actions/actions'
import Results from '../components/Results'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            main_liquor: '',
            showResults: false
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
      }
    
      handleToggleClick() {
        this.setState(state => ({
          showResults: true
        }));
      }
    

    handleChange = event => {
		this.setState({
            main_liquor: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault()
        this.props.searchDrinks(this.state.main_liquor);
        this.handleToggleClick()
    }
    
    

    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.handleSubmit}>
                    <h3>
                        <label>
                        What's in your cabinet?
                        <input type="text" name="q" placeholder="Please Enter A Type Of Liquor To Feature (ie. Whiskey, Tequila, etc.)" onChange={this.handleChange} value={this.state.main_liquor}/>
                        </label>
                        <input type="submit" value="search" />
                    </h3>
                </form>
                <div className="drink-wrapper">
                <Results result={this.state.showResults}/>
                </div>
            </div>
        );
    }
}

export default connect(null, {searchDrinks})(Search);