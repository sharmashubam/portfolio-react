import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col justify-center h-auto  max-w-screen-md mx-auto px-4 pt-6  mb-8'>
      <h1 className='px-8 text-6xl pb-3 font-black'>PROJECTS</h1>

      <div className='mt-0 max-w-screen-xl mb-10 mx-auto align-center border-b justify-start py-10 p-6'>
        <h1 className='pl-4 text-4xl font-extrabold py-3 border-b pb-4' >Chat Clone Using ReactJS and Firebase</h1>
        <div className='md:flex flex-row p-4 gap-12'>
          <img className='w-48 h-48 object-cover rounded-full' src='https://i.pinimg.com/originals/00/f8/6b/00f86b1463e599e15d0cc3d870505a2e.jpg'></img>

          <div className='text-2xl font-bold my-auto'>
            <p>Built using React JS ,CSS,Firebase</p>
            <p>Features : Local Auth, Get end-to-end user messages</p>
            <p>Used Hooks, useReducer,ContextAPI instead of Redux</p>
          </div>
        </div>
      </div>


      <div className='mt-0 max-w-screen-xl mb-10 mx-auto align-center border-b justify-start py-10 p-6'>
        <h1 className='pl-4 text-4xl font-extrabold py-3 border-b pb-4'>Movies Searching App</h1>
        <div className='md:flex flex-row p-4 gap-12'>
          <img className='w-48 h-48 object-cover rounded-full mb-8 mt-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmO7XNXyqyin8_OmLk6MKHUwARqcWAY70tkw&usqp=CAU'></img>
          <div className='text-2xl font-bold my-auto'>
            <p>Built using React JS, Tailwind Css, APIs</p>
            <p>Features: Search any movie and get logo and name</p>
            <p>Used API to fetch data</p>
            <p>Used React Hooks for rendering data on change</p>
          </div>
        </div>
      </div>



      <div className='mt-0 max-w-screen-xl mb-10 mx-auto align-center border-b justify-start py-10 p-6'>
        <h1 className='pl-4 text-4xl font-extrabold py-3 border-b pb-4'>Food Delievery Clone</h1>
        <div className='md:flex flex-row  p-4 gap-12' >
          <img className='w-48 h-48 object-cover rounded-full' src='https://png.pngtree.com/png-vector/20191023/ourmid/pngtree-vector-chips-icon-png-image_1856927.jpg'></img>

          <div className='text-2xl font-bold my-auto' >
            <p>Built using ReactJS,Tailwind Css</p>
            <p>I am still working on it.</p>
            <p>Used React Hooks for rendering data on change</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects