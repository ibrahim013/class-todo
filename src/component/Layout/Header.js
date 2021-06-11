import React from 'react';

import './headerStyle.js';
import { Title} from './headerStyle.js';

const Header = ({ data: { brandImg, brandName } }) => {
  return (
    <>
      <Title>{brandName}</Title>
    </>
  );
};

export default Header;
