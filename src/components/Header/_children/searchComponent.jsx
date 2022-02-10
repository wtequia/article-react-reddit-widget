import React, { useState } from 'react';
import { Icon } from '@el-espectador-ti/ee-components';

const SearchComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    console.log("cliiiiiiiiiiiiiiiiiiiiiick")
    setExpanded(!expanded);
  };
  return (
    <div className='SearchGoogle'>
      <div className='SearchGoogle-Icon' onClick={handleClick}>
        <Icon icon='search' className='Discount-Icon Icon_seeMore' />
      </div>
      <div
        className='SearchGoogle-Block'
        style={{ display: expanded ? 'block' : 'block' }}
      >
<div class="gcse-search"></div>
      </div>
    </div>
  );
};

export default SearchComponent;