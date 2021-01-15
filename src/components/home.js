import React, { Component } from 'react';
import Logo from '../images/logoText.png';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                <h2>Welcome to</h2>
                <img class="logo" src={Logo} alt="The Liquor Cabinet" />
                </div>
                <div id="age_verification">
                    Are You 21 or Older?
                    <button>Yes</button>
                </div>
            </div>
        );
    }
}

export default Home;
