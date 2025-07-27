import React from 'react'
import Graph from './Files/Graph'
import {
    Routes,
    Route,
} from "react-router-dom";
import ManageLicenses from './Files/ManageLicenses';
import Subscriptions from './Files/Subscriptions';
import Notifications from './Files/Notifications';
import Settings from './Files/Settings';
import Profile from './Files/Profile';
import ScrollToTop from './compnents/ScrollToTop';

const RoutingFiles = () => {
    return (
        <div>
            <ScrollToTop />
            <Routes>
                <Route path='/dashboard' element={<Graph />} />
                <Route path='/manage-licenses' element={<ManageLicenses />} />
                <Route path='/subscriptions' element={<Subscriptions />} />
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default RoutingFiles
