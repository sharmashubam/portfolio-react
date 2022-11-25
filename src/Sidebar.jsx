import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { AiOutlineHome } from "react-icons/ai";
import {BsCommand,BsChat} from "react-icons/bs";
import { FaUserGraduate} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FcTodoList } from "react-icons/fc";

const Sidebar = () => {
    AOS.init();
  return (
    <div  className='max-w-[100px] h-full fixed px-6 flex flex-col gap-12 justify-center '>
        <AiOutlineHome size={25}/>
        <BsChat size={25}/>
        <BsCommand size={25}/>
        <FaUserGraduate size={25}/>
        <FiGithub size={25}/>
        <FcTodoList size={25}/>
    </div>
  )
}

export default Sidebar