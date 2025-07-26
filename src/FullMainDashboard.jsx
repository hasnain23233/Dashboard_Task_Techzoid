import React from 'react'
import Navbar from './compnents/navbar'
import SideNabar from './compnents/sideNabar'
import RoutingFiles from './RoutingFiles'


const FullMainDashboard = () => {
    return (
        <>
            <Navbar />
            <div className='flex h-screen gap-4 overflow-hidden bg-gray-100  border-2'>
                <div className='lg:w-2/12 smw-1/12 border h-full'>
                    <SideNabar />
                </div>
                <div className='w-10/12 overflow-auto'>
                    <RoutingFiles />
                </div>
            </div>
        </>
    )
}

export default FullMainDashboard
