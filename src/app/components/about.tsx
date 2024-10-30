import React from "react";
import Image from "next/image";
import Link from "next/link";
const Aboutcom = () => {
  return (
    <div>
      <div className="aboutContent">
        <p className="about">
          Hi, I am a 30-year-old frontend developer with a passion for crafting
          visually appealing and highly functional user interfaces. Despite my
          education being at the matric level, I have honed my skills in web
          development and have a deep understanding of modern web technologies,
          especially frontend frameworks like Tailwind CSS and Next.js. I love
          solving problems and am always eager to learn more in the
          fast-evolving world of web development.
        </p>
        <div className="heroRight2">
            <Image className="mypic-about"
            src={"/images/owais2.png"}
            alt="owais"
            width={280}
            height={280}
            />
        </div>
        
      </div>
      <div className="btndiv">
      <Link href={"/contact"}><button className="btn2">Contact</button></Link>
      </div>
    </div>
  );
};

export default Aboutcom;
