import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ManageLicenses = () => {
    const navigate = useNavigate()

    const handleChangePage = () => {
        navigate('/subscriptions')
    }
    return (
        <div className='px-4  font-roboto'>
            <div className='mt-20  bg-white py-5 lg:px-7 px-4 rounded-xl shadow-lg'>
                <div className='lg:w-4/12 sm:w-8/12 w-full'>
                    <h1 className='lg:text-2xl text-xl'>Current Subscription</h1>
                    <div className='flex mt-8 items-center justify-between'>
                        <h1 className='lg:text-3xl sm:text-2xl text-xl  font-semibold'> <span className='text-orange-500'><FontAwesomeIcon icon={faFire} /></span> Pro</h1>
                        <p className='text-sm font-semibold bg-black text-white lg:px-3 px-2 py-1 tracking-widest rounded-full'>POPULAR</p>
                    </div>
                    <p className='mt-5 text-gray-500 leading-loose tracking-wider'>Perfect plan for professionals!</p>
                    <p className='text-gray-500 tracking-wider'> <span className='text-3xl font-bold text-black leading-loose'>$12</span> /month</p>
                    <p className='text-gray-800 tracking-wider py-3'> For professional only! Start arranging your expenses with our best templates.</p>
                    <div className='mt-3 space-y-4'>
                        <p className='flex items-center gap-2 sm:text-lg text-sm font-medium'>
                            <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                            <p>30+ Domains</p>
                        </p>
                        <p className='flex items-center gap-2 sm:text-lg text-sm font-medium'>
                            <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                            <p>Unlimited workspace</p>
                        </p>
                        <p className='flex items-center gap-2 sm:text-lg text-sm font-medium'>
                            <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                            <p>Collaborative workspace</p>
                        </p>
                        <p className='flex items-center gap-2 sm:text-lg text-sm font-medium'>
                            <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                            <p>Sharing permission</p>
                        </p>
                        <p className='flex items-center gap-2 sm:text-lg text-sm font-medium'>
                            <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                            <p>Admin tools</p>
                        </p>
                        <p className='flex items-center gap-2 sm:text-lg text-sm font-medium'>
                            <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                            <p>100+ integrations</p>
                        </p>
                        <br />
                        <button onClick={handleChangePage} className="w-full p-4  rounded-full bg-orange-500 text-white hover:bg-orange-700">Change Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageLicenses
