import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png'

const navbar = () => {
    return (
        <div className='flex fixed z-10 w-full items-center justify-between font-roboto bg-gray-50 shadow-xl h-16 px-4'>
            <div className='lg:w-8/12 w-full flex items-center lg:justify-normal justify-between lg:gap-28 sm:gap-16 gap-6'>
                <img src={logo} alt="logo" className='lg:w-2/12 sm:w-3/12 w-5/12' />
                <h1 className='lg:text-2xl sm:text-xl text-sm -light'>
                    Certificate Tracker
                </h1>
            </div>
            <div className='lg:w-4/12 lg:block hidden  relative'>
                <input type="text" className='w-full h-12 border rounded-md focus:outline-none px-3 text-lg ' placeholder='Search Certificate' name="" id="" />
                <button className='absolute right-4 text-xl lg:block hidden top-2 text-orange-500'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default navbar
