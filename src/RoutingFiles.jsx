import React from 'react'
import Graph from './Files/Graph'
import {
    Routes,
    Route,
} from "react-router-dom";
import ManageLicenses from './Files/ManageLicenses';
import Subscriptions from './Files/Subscriptions';
import Notifications from './Files/Notifications';

const RoutingFiles = () => {
    return (
        <div>
            <Routes>
                <Route path='/dashboard' element={<Graph />} />
                <Route path='/manage-licenses' element={<ManageLicenses />} />
                <Route path='/subscriptions' element={<Subscriptions />} />
                <Route path='/notifications' element={<Notifications />} />
            </Routes>
        </div>
    )
}

export default RoutingFiles
