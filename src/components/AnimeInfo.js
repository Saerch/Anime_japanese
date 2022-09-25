import React from 'react'

export const AnimeInfo = (props) => {
    const {title,source,images:{jpg:{large_image_url}},rank,popularity,status,rating,duration} = props.animeInfo
  return (
<>
<div className='anime-content'>
    <h3>{title}</h3>
    <img src={large_image_url} alt=""/>
    <br></br>
    <div className='info'>
<h3>#Rank:{rank}</h3>
<h3>#Source:{source}</h3>
<h3>#Popularity:{popularity}</h3>
<h3>#Status:{status}</h3>
<h3>#Rating:{rating}</h3>
<h3>#Duration:{duration}</h3>

    </div>
</div>
</>

    )
}
