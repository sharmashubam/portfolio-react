import React from 'react'

const Resume = () => {
    return (
        <div id='resume' className='px-12 md:px-8 mt-0 max-w-5xl md:max-w-4xl lg:max-w-3xl xl:max-w-2xl mb-0 mx-auto flex flex-col align-center justify-start py-10 p-6'>

            <h1 className='pl-4 pt-6 border-b py-4 mb-4 text-4xl md:text-3xl lg:text-4xl xl:text-5xl'>Resume</h1>
            <p className=' px-2 p-1 mb-6 text-3xl'>This is my resume,you can download it and suggest me some changes </p>
            <div className='w-full md:w-auto mt-4 text-center animate-bounce duration-200 ease-out'>
                <a className='mx-auto rounded-lg py-3 px-6 bg-green-500 text-white text-lg font-semibold hover:bg-green-600'>
                    Download Resume
                </a>
            </div>

        </div>

    )
}

export default Resume