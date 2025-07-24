import React, { useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const data = [
    { date: '8/12', domain: 320, subDomain: 180 },
    { date: '9/12', domain: 90, subDomain: 290 },
    { date: '10/12', domain: 230, subDomain: 100 },
    { date: '11/12', domain: 180, subDomain: 220 },
    { date: '12/12', domain: 190, subDomain: 280 },
    { date: '13/12', domain: 390, subDomain: 180 },
    { date: '14/12', domain: 320, subDomain: 180 },
    { date: '15/12', domain: 280, subDomain: 210 }
];

const UpcomingExpires = () => {
    const [activeKey, setActiveKey] = useState('all');

    const handleLegendClick = (e) => {
        const clickedKey = e.dataKey;

        // Toggle logic
        if (activeKey === clickedKey) {
            setActiveKey('all');
        } else {
            setActiveKey(clickedKey);
            const filtered = data.map(d => ({
                date: d.date,
                [clickedKey]: d[clickedKey]
            }));
        }
    };

    const renderColorfulLegendText = (value, entry) => {
        const isActive = activeKey === 'all' || activeKey === entry.dataKey;
        return (
            <span style={{ color: isActive ? '#000' : '#ccc', }}>
                {value}
            </span>
        );
    };

    return (
        <div className="p-4 rounded-xl shadow bg-white">
            <div className="flex justify-between  mb-4">
                <h2 className="text-lg font-semibold">Upcoming Expires</h2>
                <div className="flex items-end justify-end  flex-col s">
                    <span className="text-sm text-gray-500">Last 7 days</span>

                    <button>
                        <FontAwesomeIcon icon={faBars} className="text-gray-500 mt-2 cursor-pointer text-lg" />
                    </button>
                </div>
            </div>


            <ResponsiveContainer width="100%" height={185}>
                <BarChart data={data} barGap={5}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                        onClick={handleLegendClick}
                        verticalAlign="bottom"
                        align="center"
                        height={20}
                        formatter={renderColorfulLegendText}
                    />
                    {(activeKey === 'all' || activeKey === 'domain') && (
                        <Bar dataKey="domain" fill="#FF6600" name="Domain" barSize={10} />
                    )}
                    {(activeKey === 'all' || activeKey === 'subDomain') && (
                        <Bar dataKey="subDomain" fill="#D3E3FC" name="Sub Domain" barSize={10} />
                    )}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UpcomingExpires
