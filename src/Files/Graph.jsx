import React from 'react'
import Cards from './cards'
import RenewedDomainsChart from './RenewedDomainsChart '
import UpcomingExpires from './UpcomingExpires'
import MapWithMarkers from './MapWithMarket'

const Graph = () => {
    return (
        <div className='px-2'>
            <Cards />
            <div className='flex gap-3'>
                <div className='w-6/12 space-y-3 mt-5'>
                    <RenewedDomainsChart />
                    <UpcomingExpires />
                </div>
                <div className='w-6/12 space-y-3 mt-5'>
                    <MapWithMarkers />
                </div>
            </div>
        </div>
    )
}

export default Graph
