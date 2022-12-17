import React from 'react';
import ListItem from '../list-item/ListItem';
import './categoryList.css';

function CategoryList(props) {

  const { items, title } = props;
  return (
    <div className="container categoryContainer mt-4 mb-2">
      <h6>{title}</h6>
      <div className='category_list' id='category_list'>
        {items?.map(
          (details) => 
            <ListItem details={details} />
          )}
      </div>
    </div>
  )
}

export default CategoryList;
