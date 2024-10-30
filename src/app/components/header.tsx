"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import SliderNav from './sliderNav';
const Header = () => {
  const [nav,setnav] = useState<boolean>(false)
  return (
    <div>
        <nav className="navbar">
            <ul className="nav-items">


                <li >Owais Qureshi</li>
                <Link className="none responce" href={"/"}><li>Home</li></Link>
                <Link className="none responce" href={"/about"}><li>About</li></Link>
                <Link className="none responce" href={"/contact"}><li>Contact</li></Link>
              
                <li onClick={() => setnav(!nav) }  className="none"> {nav ? <RxCross2 /> : <GiHamburgerMenu />}</li>
                 
                  
            </ul>
            
        </nav>
        {nav && <SliderNav />}
    </div>
  )
}

export default Header