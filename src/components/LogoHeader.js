import React, { Component } from 'react';
import Logo from '../images/logoText.png';

class LogoHeader extends Component {
    render() {
        return (
            <div>
               <img className="logo" src={Logo} alt="The Liquor Cabinet" /> 
            </div>
        );
    }
}

export default LogoHeader;