import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/headshot.jpg';
import {PiSmileyBold} from 'react-icons/pi';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#E5EDF1]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold" style={{color: '#96C2DB', backgroundColor: '#E5EDF1'}}>
          Welcome
        </h2>
        <p className="text-gray-400 py-4 max-w-md" style={{color: '#808080', backgroundColor: '#E5EDF1'}}>
       Hi there! My name is Tana Desir, and I am a third-year Computer Science student at the University of Florida. I am interested in software engineering, game development, and 
        work related to Human-Centered Computing. Ultimately, I want to use computer science to address 
        real world societal problems. Feel free to connect with me on LinkedIn!
        <div></div>
        PS : I work on this website on my free time, so it's still being updated :)
        </p>
        {/*<div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
          >
            About Me
            <span className="duration-300">
              <HiArrowNarrowRight size={15} className="ml-3" />
            </span>
          </Link>
  </div>*/}
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
          style={{ width: '300px', height: '300px' }} // Custom width and height
        />
      </div>
    </div>
  </div>
  );
};
export default Home;