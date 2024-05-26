import React from 'react'
import Row from '../components/Row'
import requests from '../request'
import Banner from '../components/Banner'
import './HomePage.css'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div className='home'>
      <Header/>
      <Banner/>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title="TRENDING NOW " fetchUrl={requests.fetchTrending} isLargeRow={false}/>
        <Row title="TOP RATED " fetchUrl={requests.fetchTopRated} isLargeRow={false}/>
        <Row title="ACTION MOVIES " fetchUrl={requests.fetchActionMovies} isLargeRow={false}/>
        <Row title="COMEDY MOVIES " fetchUrl={requests.fetchComedyMovies} isLargeRow={false}/>
        <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} isLargeRow={false}/>
        <Row title="ROMANCE MOVIES " fetchUrl={requests.fetchRomanceMovies} isLargeRow={false}/>
        <Row title="DOCUMENTARIES " fetchUrl={requests.fetchDocumentaries} isLargeRow={false}/>
       


    </div>
  )
}

export default HomePage