import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png'

const navbar = () => {
    return (
        <div className='flex fixed z-10 w-full items-center justify-between font-roboto bg-gray-50 shadow-xl h-16 px-4'>
            <div className='w-8/12 flex items-center gap-28'>
                <img src={logo} alt="logo" className='w-2/12' />
                <h1 className='text-2xl font-light'>
                    Certificate Tracker
                </h1>
            </div>
            <div className='w-4/12 relative'>
                <input type="text" className='w-full h-12 border rounded-md focus:outline-none px-3 text-lg ' placeholder='Search Certificate' name="" id="" />
                <button className='absolute right-4 text-xl top-2 text-orange-500'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default navbar
