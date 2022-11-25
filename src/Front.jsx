import React from 'react'
import Sidebar from './Sidebar'
import {FaTwitter} from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import {FiGithub} from "react-icons/fi";
import { RiFacebookLine } from "react-icons/ri";

const Front = () => {
  return (
    <div
    data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" 
     className='max-w-[1440px] mx-auto flex  flex-col justify-center text-center h-screen'>
        <img  className='h-[150px] w-[150px] mx-auto rounded-full object-cover' src='https://i.pinimg.com/736x/71/c4/8f/71c48f82edd262d1310460f22e28d3bd--art-logo-logo-s.jpg'></img>
        <h1 className='text-3xl font-bold py-4 '>Shubam Sharma</h1>
        <p className=''>I'm a Front-End developer</p>
        <div className=' mx-auto mt-4 flex gap-8 px-8 my-3'>
            <FaTwitter size={25}/>
            <AiOutlineInstagram size={25}/>
            <FiGithub size={25}/>
            <RiFacebookLine size={25}/>

        </div>
        <button className='  mx-auto my-4 px-7 text-white rounded-2xl border-none max-w-[150px] p-2 font-semibold text-xl bg-red-400 border hover:bg-red-500'>Hire Me</button>
        
    </div>
   
  )
}

export default Front