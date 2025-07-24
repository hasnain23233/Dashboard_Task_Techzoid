import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icone from '@fortawesome/free-solid-svg-icons';


const cards = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-3 mt-20'>
                <div className="h-44 p-5 flex items-center cursor-pointer rounded-md hover:bg-gray-300 bg-gray-500 text-white">
                    <div>
                        <p className='text-3xl'><FontAwesomeIcon icon={icone.faKey} /></p>

                        <p className='text-3xl font-semibold leading-loose'>200</p>
                        <p className='text-xl'>Wild Cards</p>
                    </div>
                </div>
                <div className="h-44 p-5 flex items-center cursor-pointer rounded-md  bg-green-500 hover:bg-green-300 text-white">
                    <div>
                        <p className='text-3xl'><FontAwesomeIcon icon={icone.faUserShield} /></p>

                        <p className='text-3xl font-semibold leading-loose'>100</p>
                        <p className='text-xl  '>Healthy Cards</p>
                    </div>
                </div>
                <div className="h-44 p-5 flex items-center cursor-pointer rounded-md  bg-red-500 hover:bg-red-300 text-white">
                    <div>
                        <p className='text-3xl'><FontAwesomeIcon icon={icone.faExclamationCircle} /></p>

                        <p className='text-3xl font-semibold leading-loose'>60</p>
                        <p className='text-xl'>Critical Cards</p>
                    </div>
                </div>
                <div className="h-44 p-5 flex items-center cursor-pointer hover:bg-yellow-300 rounded-md  bg-yellow-500 text-white">
                    <div>
                        <p className='text-3xl'><FontAwesomeIcon icon={icone.faExclamationTriangle} /></p>

                        <p className='text-3xl font-semibold leading-loose'>30</p>
                        <p className='text-xl'>Warning Card</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cards
