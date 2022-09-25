
import { useState ,useEffect } from 'react';
import { AnimeInfo } from './components/AnimeInfo';
import { AnimeList } from './components/AnimeList';
import { AddToList } from './components/AddToList';
import { RemoveList } from './components/RemoveList';
import './components/style.css';

function App() {

const[search,setSearch] = useState('Cowboy Bebop');
const [animeData,setAnimeData] = useState();
const[animeInfo,setAnimeInfo] = useState();
const[myAnimeList,setMyAnimeList] = useState([])


const addTo=(anime)=>{
  const index = myAnimeList.findIndex((myanime)=>{
    return myanime.mal_id === anime.mal_id
  })
  if(index < 0){
    const newArray=[...myAnimeList,anime]
    setMyAnimeList(newArray);
  }
 

} 

const removeL1 = (anime) =>{
  const newArray = myAnimeList.filter((myanime)=>{
    return myanime.mal_id !== anime.mal_id
  })

  setMyAnimeList(newArray)
}
const getData = async()=>{

    const res = await fetch("https://api.jikan.moe/v4/anime?q=Cowboy Bebop&sfw?q=${search}")
  const resData = await res.json();
 setAnimeData(resData.data)
  }

  useEffect(() =>{
    getData()
  },[search])
  return (
    <>
    <div className='header'>
      <h2>MyAnimeList</h2>
      <div className='search-box'>
        <input type="search" placeholder="Search-Anime" onChange={(e)=>setSearch(e.target.value)}></input>
      </div>
    </div>
    
    <div className='container'>
      <div className='animeInfo'>
        {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
      </div>
        <div className='anime-row'>
          <h2 className='text-heading'>Anime</h2>
          <div className='row'>
            <AnimeList AnimeList={animeData} setAnimeInfo={setAnimeInfo}
            animeComponent ={AddToList}
            handleList={(anime)=>addTo(anime)}/>

          </div>

          <h2 className='text-heading'>My List</h2>
          <div className='row'>
            <AnimeList animelist={myAnimeList} setAnimeInfo={setAnimeInfo}
            animeComponent ={RemoveList}
            handleList={(anime)=>removeL1(anime)}/>

          </div>
        </div>
      
    </div>

    </>
  );
}

export default App;
