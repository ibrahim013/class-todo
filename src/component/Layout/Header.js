import React from 'react';
import {Link} from 'react-router-dom'

import './headerStyle.js';
import { Title} from './headerStyle.js';

const Header = ({ data: { brandImg, brandName } }) => {
  return (
    <>
      <Title>{brandName}</Title>
      <div>
        <ul>
        <li><Link to="/">Back</Link></li>
          <li><Link to="/add-todo">Add todo</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
