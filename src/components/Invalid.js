import React, { Component } from 'react';

class Invalid extends Component {
    render() {
        return (
            <div className="invalid">
                <h1>Nice try, but the Liquor Cabinet is LOCKED!</h1>
                <h3>Try again when you're older!</h3>
            </div>
        );
    }
}

export default Invalid;