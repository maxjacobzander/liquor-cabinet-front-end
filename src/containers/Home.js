import React, { Component } from 'react';
import Logo from '../images/logoText.png';
class Home extends Component {
    
    render() {
        return (
            <div>
                <h2>Welcome to</h2>
                <img class="logo" src={Logo} alt="The Liquor Cabinet" />
            </div>
        );
    }
}
export default Home;