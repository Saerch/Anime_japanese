import React from 'react'

export const AnimeList = ({AnimeList,setAnimeInfo,animeComponent,handleList}) => {
    const AddToList =animeComponent;
  return (
<>

{
    AnimeList ? (
        AnimeList.map((anime,index) =>{
            return(
<div className='card' key={index} onClick={()=>setAnimeInfo(anime)}>
    <img src={anime.images.jpg.large_image_url} alt='animeImg'/>
    <div className='anime-info'>
        <h4>{anime.titles.title}</h4>
        <div className='overlay' onClick={()=>handleList(anime)}>
        <h4>{anime.title_japanese}</h4>
        <h3>synopsis</h3>
        <div className='synopsis'>
            <p>{anime.synopsis}</p>
        
        </div>
        <AddToList/>
    </div>
</div>
</div>
            )
        })
    ) : "Not Found"
}

</>
  )
}
