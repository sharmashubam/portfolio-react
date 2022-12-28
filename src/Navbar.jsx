import React from 'react'
import { Chip } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <>
    <div className='flex flex-col justify-center h-auto  max-w-screen-md mx-auto px-4 pt-6 mt-8 mb-8'>
        <h1 className='pl-4 text-6xl font-bold py-3'>Web Development</h1>
        <div>
          <h1 className='pl-4 py-1 text-2xl md:text-3xl lg:text-5xl xl:text-5xl'>I'm student from of IT Department from NIT, Srinagar. I'm currently in 3rd Semester and trying to learn Web Development. </h1>
          <p className='pl-4 py-1 text-2xl md:text-3xl lg:text-5xl xl:text-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat dolore corporis vitae aperiam exercitationem. </p>
          <h1 className='pl-4 py-1 text-2xl md:text-3xl lg:text-5xl xl:text-5xl'>I'm currently working on making good user experience of Chat App Project</h1>
        </div>
      </div>


      
{/* Skills  */}
<div className='flex flex-col justify-center h-auto  max-w-screen-md mx-auto px-8 pt-6 mt-8 mb-8'>
  <h1 className='text-6xl font-bold py-3 border-b pb-4'>Skills</h1>
  <div className="flex flex-wrap gap-4 py-10">
    <Chip size={40} color="blue" value="HTML" />
    <Chip color="red" value="CSS" />
    <Chip color="green" value="NodeJS" />
    <Chip color="amber" value="ReactJS" />
    <Chip color="pink" value="Firebase" />
    <Chip color="indigo" value="JavaScript" />
    <Chip color="purple" value="Tailwind Css" />
    <Chip color="pink" value="Python" />
    <Chip color="indigo" value="Bootstrap" />
    <Chip color="purple" value="Socket.io" />
    <Chip color="pink" value="Pandas" />
    <Chip color="orange" value="Numpy" />
    <Chip color="Blue" value="Matplotlib" />
  </div>
</div>


      <div className='mt-0 max-w-5xl md:max-w-4xl lg:max-w-3xl xl:max-w-2xl mb-1 mx-auto flex flex-col align-center justify-start py-10 p-6'>
        <h1 className='pl-4 text-6xl font-bold pb-12'>Projects</h1>
        <div>
          <h1 className='pl-4 pt-6 border-b py-4 mb-4 text-4xl md:text-3xl lg:text-4xl xl:text-5xl'>Chat App</h1>
          <div className='pl-4 py-1 text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>It's Completely based on ReactJS library.
            I've used firebase as a RealTime database for storing the messages and the User Information.
            This Web App also has Authentication.
          </div>
        </div>
        <div className=''>
          <h1 className='pl-4 pt-6 border-b py-4 mb-4 text-4xl md:text-3xl lg:text-4xl xl:text-5xl'>MoviesAPI</h1>
          <div className='pl-4 py-1 text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>
            This Project is based on API. I've used the ombd API.I've also used ReactJS im this Project.
          </div>
        </div>
        <div>
          <h1 className='pl-4 pt-6 border-b py-4 mb-0 text-4xl md:text-3xl lg:text-4xl xl:text-5xl'>Food Ordering App</h1>
          <div className='pl-4 py-1 text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>
            I've used Tailwind css in this project.
            This is a food ordering concept based app whose front-end is based on ReactJS.
          </div>
        </div>
      </div>




    </>

  )
}

export default Navbar