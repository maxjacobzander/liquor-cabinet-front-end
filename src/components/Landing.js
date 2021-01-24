import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {


    render() {
        return (
            <div id="age_verification" className="age-verification">
                <h1>Are You 21 or Older?</h1>
                <Link to="/home">
                    <button type="button">
                        Yes
                    </button>
                </Link>
                <Link to="/invalid">
                    <button type="button">
                        No
                    </button>
                </Link>
            </div>
        );
    }
}

export default Landing;