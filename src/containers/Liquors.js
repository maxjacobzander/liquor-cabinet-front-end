import React, { Component } from 'react';
import LiquorItem from '../components/LiquorItem';

export class Liquors extends Component {
    render() {
        const liquors = this.props.liquors.map(( liquor, i )) => <LiquorItem key={i} liquor ={ liquor } />)
        return (
            <div>
                
            </div>
        );
    }
}

export default Liquors;