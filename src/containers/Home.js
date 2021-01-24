import React, { Component } from 'react';
import Logo from '../images/logoText.png';
import Search from './Search';
class Home extends Component {
    
    render() {
        return (
            <div>
                <h2>Welcome to</h2>
                <img className="logo" src={Logo} alt="The Liquor Cabinet" />
                <Search />
            </div>
            
        );
    }
}
export default Home;