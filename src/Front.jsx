import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { RiFacebookLine } from "react-icons/ri";

const Front = () => {
  return (

    <div id='home' className='flex flex-col justify-center h-auto  max-w-screen-md mx-auto px-4 pt-6 mt-2 mb-8'>
      <h1 className='text-3xl md:text-4xl font-bold px-2 pt-6'>About</h1>
      <p className='px-2 p-1 text-3xl pt-6'>Hi,</p>
      <p className=' px-2 p-1 text-3xl'>I'm a Shubam Sharma, Front-End developer currently trying to be Open-Source enthusiast and studying in NIT,Srinagar.</p>
      <p className='px-2 p-1 text-3xl'>Currently I'm an intern at Gimble Softwares, and trying to learn new stuff. Nowadays, I am interested in Web3 and Machine Learning/AI.</p>
      <p className='px-2 p-1 text-3xl'>Apart from coding, my hobbies -- I love, watching movies, hanging out with friend and listening songs.</p>
      <p className='px-2 p-1 text-3xl'>I'm always</p>


      <div className='mx-auto mt-4 flex gap-8 px-8 my-3'>
        <FaTwitter size={25} className='w-6 h-6 md:w-8 md:h-8' />
        <AiOutlineInstagram size={25} className='w-6 h-6 md:w-8 md:h-8' />
        <FiGithub size={25} className='w-6 h-6 md:w-8 md:h-8' />
        <RiFacebookLine size={25} className='w-6 h-6 md:w-8 md:h-8' />
      </div>

      <button className='  mx-auto my-4 px-7 text-white rounded-2xl border-none max-w-[150px] p-2 font-semibold text-xl bg-red-400 border hover:bg-red-500'>Buy Coffee</button>

    </div>

  )
}

export default Front