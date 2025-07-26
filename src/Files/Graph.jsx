import React from 'react'
import Cards from './Dashbords/cards'
import RenewedDomainsChart from './Dashbords/RenewedDomainsChart '
import UpcomingExpires from './Dashbords/UpcomingExpires'
import MapWithMarkers from './Dashbords/MapWithMarket'
import FirstTable from './Dashbords/FirstTable'
import UpcomingExpiries from './Dashbords/UpcomingExpiries'
import RenewedCertificates from './Dashbords/RenewedCertificates'

const Graph = () => {
    return (
        <div className='px-2 font-roboto'>
            <Cards />
            <div className='flex lg:flex-row flex-col gap-3'>
                <div className='lg:w-6/12 w-full space-y-3 mt-5'>
                    <RenewedDomainsChart />
                    <UpcomingExpires />
                </div>
                <div className='lg:w-6/12 w-full space-y-3 mt-5'>
                    <MapWithMarkers />
                </div>
            </div>
            <div className='mt-4 h-[450px] overflow-auto rounded-xl'>
                <FirstTable />
            </div>
            <div className='mt-4 h-[450px] overflow-auto rounded-xl'>
                <RenewedCertificates />
            </div>
            <div className='mt-4 h-[450px] overflow-auto rounded-xl'>
                <UpcomingExpiries />
            </div>
        </div>
    )
}

export default Graph
