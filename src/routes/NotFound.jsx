import React from 'react'
import { Link } from 'react-router-dom'
import pikachugif from '../assets/img/pikachugif.gif'


function NotFound() {
  return (
    <div className='w-[100vw] h-[100vh] bg-mainBackgroundColor flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center text-center'>
       <h1 className='text-[white] font-bold text-3xl'>The page you are looking for cannot be found</h1>
       <Link className='py-3 px-5 mt-5 rounded-lg bg-[#171819] text-[white] font-semibold' to={'/home'}>Home</Link>
       <img className='pikachuGif w-20' src={pikachugif} alt="" />
      </div>
    </div>
  )
}

export default NotFound