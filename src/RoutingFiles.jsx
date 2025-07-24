import React from 'react'
import Graph from './Files/Graph'
import {
    Routes,
    Route,
} from "react-router-dom";
import ManageLicenses from './Files/ManageLicenses';

const RoutingFiles = () => {
    return (
        <div>
            <Routes>
                <Route path='/dashboard' element={<Graph />} />
                <Route path='/manage-licenses' element={<ManageLicenses />} />
            </Routes>
        </div>
    )
}

export default RoutingFiles
