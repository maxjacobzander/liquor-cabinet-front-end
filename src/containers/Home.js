import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Logo from '../images/logoText.png';
import Search from './Search';
import Results from '../components/Results';
class Home extends Component {
    
    render() {
        return (
            <div>
                <h2>Welcome to</h2>
                <img className="logo" src={Logo} alt="The Liquor Cabinet" />
                <Search />
                <NavBar />
                <Results />
            </div>
            
        );
    }
}
export default Home;