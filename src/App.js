import './App.css';
import Footer from './Resume';
import Front from './Front';
import Navbar from './Navbar';
import Projects from './Projects';

import Resume from './Resume';
import Blog from './Blog';
import {Link} from "react-scroll"

function App() {

  return (
    < div className="text-white ">
      <div className='w-full bg-[#000300] z-10 fixed bottom-0 flex justify-end md:gap-8 gap-0 md:p-4 p-2 pr-0 md:pr-4 px-2 md:px-4 shadow-xl'>
        <Link to="about" spy={true} smooth={true} offset={10} duration={500} className='px-4 text-m p-1 font-extrabold text-lg rounded-md cursor-pointer hover:bg-gray-800'>About</Link>
        <Link to="projects" spy={true} smooth={true} offset={10} duration={500} className='px-4 text-m p-1 font-extrabold text-lg rounded-md cursor-pointer hover:bg-gray-800'>Projects</Link>
        <Link to="resume" spy={true} smooth={true} offset={10} duration={500} className='px-4 text-m p-1 font-extrabold text-lg rounded-md cursor-pointer hover:bg-gray-800'>Resume</Link>
        <Link to="home" spy={true} smooth={true} offset={10} duration={500} className='px-4 text-m p-1 font-extrabold text-lg rounded-md cursor-pointer hover:bg-gray-800'>Home</Link>
       
      </div>

      <Front/>
      <Navbar/>
      <Resume/>
      <Blog/>
      <Projects/>
    </div>
  );


}

export default App;
