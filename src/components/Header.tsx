import React, { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {
  const [background,setBackground]=useState<boolean>(true);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>100){
        setBackground(true);
      }else{
        setBackground(false);
      }
    };
    window.addEventListener("scroll",handleScroll);
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  })

  return (
    <div className={`nav ${background? "nav_background": '' }`}>
        <img className='nav_logo' 
        src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg'/>
        <img className='nav_avatar'
         src='https://i.pinimg.com/originals/24/b4/0a/24b40ae56cd79ace48defe2586daa3ec.png'/>
    
    </div>
  )
}

export default Header