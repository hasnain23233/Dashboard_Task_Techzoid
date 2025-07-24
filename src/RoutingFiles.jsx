import React from 'react'
import Graph from './Files/Graph'
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

const RoutingFiles = () => {
    return (
        <div>
            <Routes>
                <Route path='/dashboard' element={<Graph />} />
            </Routes>
        </div>
    )
}

export default RoutingFiles
