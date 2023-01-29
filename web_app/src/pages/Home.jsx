import React from 'react'
import HomeImg from '../assets/undraw_mathematics_-4-otb.svg'

export default function Home() {
  return (
    <div>
      <div className='md:mx-28 mx-4 text-white py-10'>

        <div className='md:grid md:grid-cols-2 items-center'>
          <div className=''>
            <h1 className='text-5xl font-semibold'>Fall in love with maths with us</h1>
            <p className='text-3xl py-4 tracking-wider text-justify'>HomeworkHelp is a web app where users can upload their maths homework and we will solve those equations with all the steps using CNN and OpenCV.</p>

          </div>
          <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
            <img src={HomeImg} alt="img" width="350" height="350" />
          </div>
        </div>
      </div>
    </div>
  )
}
