
import React from 'react'
import { Link } from 'react-router-dom';

const LiquorItem = ({ liquor }) => {
    return (
    <li className="collection-item">
      Liquor Name: {liquor.name}<br />
      <Link to={`/liquors/${liquor.id}`}>View</Link>
    </li>
    );
}

export default LiquorItem