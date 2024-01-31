import React from 'react'

const Details = ({movieDet}) => {
  return (
    <div className='movieDetails'>
      <img src={`https://image.tmdb.org/t/p/original${movieDet?movieDet.poster_path:""}`} />
    </div>
  )
}

export default Details;
