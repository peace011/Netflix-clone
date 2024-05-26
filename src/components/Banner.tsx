import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../request';
import { useQuery } from 'react-query';
import './Banner.css'

const Banner = () => {
    const base_Url="https://image.tmdb.org/t/p/original";

    const fetchData=async()=>{
        const res=await axios.get(requests.fetchNetflixOriginals);
        const randnum=Math.floor(Math.random()*res.data.results.length);
        return res.data.results[randnum];

    }
   
    const {isLoading,data,isError}=useQuery("movies",fetchData);

    if(isLoading){
        return <p>Loading</p>
    }
    if(isError){
        return <p>Error</p>
    }   
    
    const truncate=(str:string,n:number)=>{
        return str?.length > n ? str.substr(0,n-1) + "...":str;  /*str.substr(start, length)*/

    }
    
  return (
    <header className='banner' style={{backgroundImage:`url(${base_Url}${data.backdrop_path})`,backgroundSize:'cover',
    backgroundPosition:'center',}}>
        <div className="banner_contents">
            <h1 className='banner_title'>{data.title || data.name || data.original_name}</h1>
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>

            </div>
            <h1 className='banner_description'>
                {truncate(data.overview,150)}
            </h1>

        </div>
        <div className="banner--fadeBottom"></div>

        
    </header>
  )
}

export default Banner
