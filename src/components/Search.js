import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
    render() {
        return (
            <div class="search-form">
                <form>
                    <h3>
                        <label>
                        What's in your cabinet?
                        <input type="text" name="search" />
                        </label>
                        <p />
                        <input type="submit" value="search" />
                    </h3>
                </form>
            </div>
        );
    }
}

export default connect(null)(Search);