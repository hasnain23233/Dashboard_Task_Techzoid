import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Notifications = () => {
    const dataTable = [
        { description: 'You certificates is renewed.', time: '14h Ago' },
        { description: 'Your Certificate is about to expired, Renewed it soon!', time: '14h Ago' },
        { description: 'Your Domain is about to expire.', time: '14h Ago' },
        { description: 'Your Certificate is about to expired, Renewed it soon!', time: '14h Ago' },
        { description: 'You certificates is renewed.', time: '14h Ago' },
        { description: 'Your Domain is about to expire.', time: '14h Ago' },
        { description: 'Your Certificate is about to expired, Renewed it soon!', time: '14h Ago' },
        { description: 'You certificates is renewed.', time: '14h Ago' },
        { description: 'Your Domain is about to expire.', time: '14h Ago' },
    ];
    return (
        <div className='px-4 font-roboto'>
            <div className="p-6 bg-white mt-20 shadow-md rounded-md">
                {dataTable.map((item, index) => (
                    <div key={index} className="flex space-x-3 items-center py-2">
                        <div className="bg-gray-100 p-2 h-12 w-12 flex items-center justify-center text-xl rounded-full">
                            <FontAwesomeIcon icon={faFileAlt} className="text-gray-500" />
                        </div>
                        <div className="flex items-center  text-lg gap-3">
                            <p className=" text-gray-800">{item.description}</p>
                            <span className="text-gray-400">{item.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notifications
