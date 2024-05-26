import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'
import { useQuery } from 'react-query';

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
      

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
            {data && data.map((movie:movieType)=>(
                <div key={movie.id} className='boxposter'>
                    <img src={`${base_Url}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}/>
                    </div>
            ))}
        </div>
        
    </div>
  )
}

export default Row

  