import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faIdCardAlt, faFileAlt, faBell, faCog, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const sideNabar = () => {
    return (
        <div className='bg-white'>
            <div className='w-full'>
                <nav className='w-full flex flex-col justify-between h-screen px-3  items-center'>
                    <ul className='space-y-2 w-full mt-20'>
                        <li className='text-lg w-full p-3 hover:text-white rounded-md cursor-pointer hover:bg-orange-400'>
                            <a href="#" className='flex gap-3 items-center'> <FontAwesomeIcon icon={faChartLine} /> Dashboard</a>
                        </li>
                        <li className='text-lg w-full p-3 hover:text-white rounded-md cursor-pointer hover:bg-orange-400'>
                            <a href="#" className='flex gap-3 items-center'> <FontAwesomeIcon icon={faIdCardAlt} /> Manage Licenses</a>
                        </li>
                        <li className='text-lg w-full p-3 hover:text-white rounded-md cursor-pointer hover:bg-orange-400'>
                            <a href="#" className='flex gap-3 items-center'> <FontAwesomeIcon icon={faFileAlt} /> Subcriptions</a>
                        </li>
                        <li className='text-lg w-full p-3 hover:text-white rounded-md cursor-pointer hover:bg-orange-400'>
                            <a href="#" className='flex gap-3 items-center'> <FontAwesomeIcon icon={faBell} /> Notifications</a>
                        </li>
                        <li className='text-lg w-full p-3 hover:text-white rounded-md cursor-pointer hover:bg-orange-400'>
                            <a href="#" className='flex gap-3 items-center'> <FontAwesomeIcon icon={faCog} /> Setting</a>
                        </li>
                        <li className='text-lg w-full p-3 hover:text-white rounded-md cursor-pointer hover:bg-orange-400'>
                            <a href="#" className='flex gap-3 items-center'> <FontAwesomeIcon icon={faUser} /> Profile</a>
                        </li>
                    </ul>
                    <ul className='w-full'>
                        <li className='text-lg  p-3 hover:text-orange-700 w-full border-t cursor-pointer text-orange-400'>
                            <a href="#" className='flex gap-3 items-center'><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default sideNabar
