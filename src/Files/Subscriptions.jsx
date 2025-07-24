import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCheck, faGift, faCrown, faTimes } from '@fortawesome/free-solid-svg-icons';
import Arrow from '../assets/arrow.png'

const Subscriptions = () => {
    const [toggleON, setToogleOff] = useState(true)
    const handleToogle = () => {
        setToogleOff(!toggleON)

    }
    return (
        <div className='font-roboto px-4'>
            <div className='mt-16 py-3 text-center'>
                <h1 className='text-2xl tracking-wider font-semibold'>Ready to Get Started?</h1>
                <p className='leading-loose py-2 text-gray-600'>Choose a plan that suits your business needs</p>
                <label class="inline-flex items-center me-5 cursor-pointer">
                    <span class="ms-3 tracking-wider px-4 text-gray-900 font-semibold text-lg dark:text-gray-300">Monthly</span>
                    <input onClick={handleToogle} type="checkbox" value={toggleON} class="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500 dark:peer-checked:bg-orange-500"></div>
                    <span class="tracking-wider px-4 text-gray-900 font-semibold text-lg dark:text-gray-300">Yearly</span>
                </label>
                <div className='flex items-center w-2/12 m-auto '>
                    <p className='bg-gray-200 mt-6 w-7/12 text-sm font-medium m-auto rounded-full px-2 py-1 flex gap-3 text-center'>Save : {toggleON ? '35%' : '65%'}</p>
                    <img src={Arrow} alt="" className='w-6/12' />
                </div>
                <div className='grid grid-cols-3 gap-3'>
                    <div className='bg-white py-5 px-7 rounded-xl shadow-lg'>
                        <div className='text-start'>
                            <div className='flex mt-8 items-center justify-between'>
                                <h1 className='text-3xl font-semibold'> <span className='text-orange-500'><FontAwesomeIcon icon={faGift} /></span> Free</h1>
                            </div>
                            <p className='mt-5 text-gray-500 leading-loose tracking-wider'>Perfect plan to get started</p>
                            <p className='text-gray-500 tracking-wider'> <span className='text-3xl font-bold text-black leading-loose'>$0</span> /month</p>
                            <p className='text-gray-800 tracking-wider py-3'> A free plan grants you access to some of the cool features of Spend.In..</p>
                            <div className='mt-3 space-y-4'>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>10+ Domains</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>5 workspace</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>Collaborate with 5 user </p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-gray-400 text-gray-200 rounded-full'><FontAwesomeIcon icon={faTimes} /> </span>
                                    <p className='text-gray-400'>Collaborate with 5 user</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-gray-400 text-gray-200 rounded-full'><FontAwesomeIcon icon={faTimes} /></span>
                                    <p className='text-gray-400'>Admin tools</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-gray-400 text-gray-200 rounded-full'><FontAwesomeIcon icon={faTimes} /></span>
                                    <p className='text-gray-400'>100+ integrations </p>
                                </p>
                                <br />
                                <button className="w-full p-4  rounded-full bg-orange-500 text-white hover:bg-orange-700">Get Your Free Plan</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white py-5 px-7 rounded-xl shadow-lg'>
                        <div className='text-start'>
                            <div className='flex mt-8 items-center justify-between'>
                                <h1 className='text-3xl font-semibold'> <span className='text-orange-500'><FontAwesomeIcon icon={faFire} /></span> Pro</h1>
                                <p className='text-sm font-semibold bg-black text-white px-3 py-1 tracking-widest rounded-full'>POPULAR</p>
                            </div>
                            <p className='mt-5 text-gray-500 leading-loose tracking-wider'>Perfect plan for professionals!</p>
                            <p className='text-gray-500 tracking-wider'> <span className='text-3xl font-bold text-black leading-loose'>$12</span> /month</p>
                            <p className='text-gray-800 tracking-wider py-3'> For professional only! Start arranging your expenses with our best templates.</p>
                            <div className='mt-3 space-y-4'>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>30+ Domains</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>Unlimited workspace</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>Collaborative workspace</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>Sharing permission</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>Admin tools</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>100+ integrations</p>
                                </p>
                                <br />
                                <button className="w-full p-4  rounded-full bg-orange-500 text-white hover:bg-orange-700">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white py-5 px-7 rounded-xl shadow-lg'>
                        <div className='text-start'>
                            <div className='flex mt-8 items-center justify-between'>
                                <h1 className='text-3xl font-semibold'> <span className='text-orange-500'><FontAwesomeIcon icon={faCrown} /></span> Ultimate</h1>
                            </div>
                            <p className='mt-5 text-gray-500 leading-loose tracking-wider'>Best suits for great company!</p>
                            <p className='text-gray-500 tracking-wider'> <span className='text-3xl font-bold text-black leading-loose'>$33</span> /month</p>
                            <p className='text-gray-800 tracking-wider py-3'> If you a finance manager at big company, this plan is a cool features of Spend.In.</p>
                            <div className='mt-3 space-y-4'>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>50+ Domains </p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>Daily performance reports</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>Dedicated assistant</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>Artificial intelligence</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>Marketing tools & automations</p>
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium'>
                                    <span className='w-6 h-6 flex items-center justify-center bg-green-400 text-white rounded-full'><FontAwesomeIcon icon={faCheck} /></span>
                                    <p>Advanced security</p>
                                </p>
                                <br />
                                <button className="w-full p-4  rounded-full bg-orange-500 text-white hover:bg-orange-700">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscriptions
