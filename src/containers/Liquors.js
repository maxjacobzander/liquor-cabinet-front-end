import React, { Component } from 'react';
import LiquorItem from '../components/LiquorItem';

export class Liquors extends Component {
    render() {
        const liquors = this.props.liquors.map(( liquor, i ) => <LiquorItem key={i} liquor ={ liquor } />)
        return (
            <div>
                <h3>Liquors</h3>
                <ul classname="LiquorCollection">
                    { liquors }
                </ul>
            </div>
        );
    }
}

LiquorItem.defaultProps = {
    liquors: []
}

export default Liquors;