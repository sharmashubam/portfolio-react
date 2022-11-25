import React from 'react'
import { Chip } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <>
      <div className='w-[100%] bg-[#696a69] z-10 fixed bottom-0 flex justify-end gap-8 p-4 px-4 pr-14'>
        <div className='px-4 text-m  p-1 font-extrabold text-lg rounded-md  cursor-pointer hover:bg-[#363736]'>Project</div>
        <div className='px-4 text-m  p-1 font-extrabold text-lg rounded-md  cursor-pointer hover:bg-[#363736]'>Home</div>
        <div className='px-4 text-m  p-1 font-extrabold text-lg rounded-md  cursor-pointer hover:bg-[#363736]'>Resume</div>
        <div className='px-4 text-m  p-1 font-extrabold text-lg rounded-md  cursor-pointer hover:bg-[#363736]'>About</div>
      </div>

     

      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className='mt-12 max-w-[1000px]  mx-auto flex flex-col align-center justify-start py-12 p-6'>
        <h1 className='pl-4 text-6xl font-bold py-3'>Web Development</h1>
        <div>
          <h1 className='pl-4 py-1 text-3xl '>I'm student from of IT Department from NIT, Srinagar. I'm currently in 3rd Semester and trying to learn Web Development. </h1>
          <p className='pl-4 py-1 text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat dolore corporis vitae aperiam exercitationem. </p>
          <h1 className='pl-4 py-1 text-3xl '>I'm currently working on making good user experience of Chat App Project</h1>

        </div>

      </div>
      <div data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className='mt-4  max-w-[1000px]  mb-4 mx-auto flex flex-col align-center justify-start py-10 p-6'>

        <h1 className='pl-4 text-6xl font-bold py-3 border-b pb-4 '>Skills</h1>
        <div className="flex gap-8 py-10 pl-4">
        <Chip size={40} color="blue" value="HTML" />
        <Chip color="red" value="CSS" />
        <Chip color="green" value="NodeJS" />
        <Chip color="amber" value="ReactJS" />
        <Chip color="pink" value="Firebase" />
        <Chip color="indigo" value="JavaScript" />
        <Chip color="purple" value="Tailwind Css" />
        
      </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className='mt-0  max-w-[1000px] mb-24 mx-auto flex flex-col align-center justify-start  py-10 p-6'>
        <h1 className='pl-4 text-6xl font-bold pb-12'>Projects</h1>
        <div>
          <h1 className='pl-4 pt-6 border-b py-4 mb-4 text-4xl'>Chat App</h1>
          <div className='pl-4 py-1 text-3xl'>It's Completely based on ReactJS library.
            I've used firebase as a RealTime database for storing the messages and the User Information.
            This Web App also has Authentication.
          </div>
        </div>

        <div className=''>
          <h1 className='pl-4 pt-6 border-b py-4 mb-4 text-4xl'>MoviesAPI</h1>
          <div className='pl-4 py-1 text-3xl'>
            This Project is based on API. I've used the ombd API.I've also used ReactJS im this Project.

          </div>
        </div>

        <div>
          <h1 className='pl-4 pt-6 border-b py-4 mb-4 text-4xl'>Food Ordering App</h1>
          <div className='pl-4 py-1 text-3xl'>
            I've used Tailwind css in this project.
            This is a food ordering concept based app whose front-end is based on ReactJS.
          </div>
        </div>
      </div>


     
    </>

  )
}

export default Navbar