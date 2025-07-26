import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChartLine, faIdCardAlt, faFileAlt,
    faBell, faCog, faUser, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import CreateContextAPI from '../context/createContextAPI';

const sideNabar = () => {
    const { setLoggin } = useContext(CreateContextAPI)

    const getNavLinkClass = (isActive) => {
        return `text-lg w-full p-3 rounded-md flex gap-3 items-center cursor-pointer ${isActive ? 'bg-orange-400 text-white' : 'hover:bg-orange-400 hover:text-white'}`;
    };
    const handleContext = () => {
        setLoggin(true)
    }

    return (
        <div className='bg-white'>
            <div className='w-full'>
                <nav className='w-full flex flex-col justify-between h-screen px-3 items-center'>
                    <ul className='space-y-2 w-full mt-20'>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => getNavLinkClass(isActive)}>
                                <FontAwesomeIcon icon={faChartLine} /> <span className='lg:block hidden'>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/manage-licenses" className={({ isActive }) => getNavLinkClass(isActive)}>
                                <FontAwesomeIcon icon={faIdCardAlt} /> <span className='lg:block hidden'>Manage Licenses</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/subscriptions" className={({ isActive }) => getNavLinkClass(isActive)}>
                                <FontAwesomeIcon icon={faFileAlt} /> <span className='lg:block hidden'>Subscriptions</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/notifications" className={({ isActive }) => getNavLinkClass(isActive)}>
                                <FontAwesomeIcon icon={faBell} /> <span className='lg:block hidden'>Notifications</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" className={({ isActive }) => getNavLinkClass(isActive)}>
                                <FontAwesomeIcon icon={faCog} /> <span className='lg:block hidden'>Setting</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" className={({ isActive }) => getNavLinkClass(isActive)}>
                                <FontAwesomeIcon icon={faUser} /> <span className='lg:block hidden'>Profile</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='w-full'>
                        <li className='text-lg p-3 hover:text-orange-700 w-full border-t cursor-pointer text-orange-400'>
                            <button onClick={handleContext} className='flex gap-3 items-center'>
                                <FontAwesomeIcon icon={faSignOutAlt} /> <span className='lg:block hidden'>Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default sideNabar
