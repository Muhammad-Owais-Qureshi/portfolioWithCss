import Link from 'next/link'
import React from 'react'

const SliderNav = () => {
  return (
    <div>
        <nav className="slidernavbar">
            <ul className="navItems">
                <Link className="dot" href={"/"}><li>Home</li></Link>
                <Link className="dot" href={"about"}><li>About</li></Link>
                <Link className="dot"  href={"contact"}><li>Contact</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default SliderNav