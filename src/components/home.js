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
                <div class="search-form">
                    <form>
                        <h3>
                            <label>What's in your cabinet?</label>
                            <input type="text" />
                            <input type="submit" value="search" />
                        </h3>
                     </form>
                </div>
            </div>
        );
    }
}
export default Home;