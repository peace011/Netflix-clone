import React, {useState } from 'react'
import axios from '../axios'
import './Row.css'
import { useQuery } from 'react-query';
import Youtube from 'react-youtube'
// import movieTrailer from 'movie-trailer'

interface RowPropsType{
    title:string,
    fetchUrl:string,
    isLargeRow:boolean,
}
interface movieType{
  id:number,
  poster_path:string,
  backdrop_path:string,
}
const Row= ({title,fetchUrl,isLargeRow}:RowPropsType) => {

    const base_Url="https://image.tmdb.org/t/p/original";

    // const [trailerUrl,setTrailerUrl]=useState<string>('')

    const fetchData=async()=>{
                const res = await axios.get(fetchUrl);
                return res.data.results;
            };

    const {data,isLoading,isError}=useQuery(["movies",fetchUrl],fetchData);

    if(isLoading){
     return <p>Loading</p>
    }
    if(isError){
      return <p>Error</p>
    }
      
    // const opts={
    //   height:'390',
    //   width:'100%',
    //   playerVars:{
    //     autoplay:1,
    //   }
    // }
    // const handleClick = (movie) => {
    //   if (trailerUrl) {
    //     setTrailerUrl('')
    //   } else {
    //     movieTrailer(movie?.name || '')
    //       .then(url => {
    //         const urlParams = new URLSearchParams(new URL(url).search)
  
    //         setTrailerUrl(urlParams.get('v'))
    //       })
    //       .catch(error => console.error(error.message))
    //   }
    // }
    
    
  return (
    <div className='row'>
        <h2 className='row_title'>{title}</h2>
        <div className="row_posters">
            {data && data.map((movie:movieType)=>(
                <div key={movie.id} className='boxposter'>
                    <img src={`${base_Url}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    // onClick={()=>handleClick(movie)}
                    />
                    </div>
            ))}
        </div>
        {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>} */}

    </div>
  )
}

export default Row

  