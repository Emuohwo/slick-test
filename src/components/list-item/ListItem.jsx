import React from 'react';


function ListItem({ details }) {
  return (
    <div className='list_item_container' key={details?.imdbID}>
      <div className='movie_title_box d-flex align-items-center justify-content-center text-center'>
        {details?.Title}
      </div>
      {/* <img src={details?.Poster} alt={details?.Title}   className='list_item_poster_img'/> */}
    </div>
  )
}

export default ListItem;
