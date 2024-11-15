import Image from "next/image"
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero">

        <div className="heroLeft">
          <h1 className="head">Hello my name is <span className="owais">Owais Qureshi </span> !</h1>
          <h3 className="pera">And I am a Frontend developer</h3>
          <p className="content">I am a web Designer with extensive experience for over 1 year experties 
            is to create and webside design, Frontend design, and many more...</p>

           <div className="iconeItems">
            <a href="https://www.facebook.com/OwaisQureshi" 
               target="_blank" 
            >
            <FaFacebook className="icone" />
            </a>

            <a href="https://www.linkedin.com/OwaisQureshi" 
               target="_blank"
               >
               <FaLinkedin className="icone"/>
            </a>
           
            <a href="https://www.whatsapp.com/OwaisQureshi" 
               target="_blank"
               >
            <RiWhatsappFill className="icone" />
            </a>

            <a href="https://www.youtube.com/OwaisQureshi" 
               target="_blank"
               >
                 <FaYoutube className="icone"/>
               </a>
           
           </div>
          
           <Link href={"/about"}><button className="btn">Explore</button></Link>
        </div>

        <div className="heroRight">
            <Image className="mypic"
            src={"/images/owais2.png"}
            alt="owais"
            width={280}
            height={280}
            />
            
        </div>
    </div>
  )
}

export default Hero