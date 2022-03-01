import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

function SearchBox() {
  return (
    <div className="search">
      <span>
        <SearchOutlined />
      </span>
      <input type="text"  placeholder='Search By Remark'/>
    </div>
  );
}

export default SearchBox;
