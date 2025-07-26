import React from 'react'
import ProfileImg from '../assets/profile.png'

const Profile = () => {
    return (
        <div className='font-roboto px-4'>
            <h1 className='mt-16 text-2xl font-semibold pt-5 tracking-wider'>Account</h1>
            <div className='mt-2 gap-4 flex lg:flex-row flex-col justify-between'>
                <div className=' bg-white h-56 lg:w-4/12 w-full rounded-xl flex gap-4'>
                    <div className='w-full text-center'>
                        <div className=' px-4 py-5'>
                            <img src={ProfileImg} alt="" className='m-auto w-2/12' />
                            <h1 className='font-semibold text-xl tracking-wider leading-loose'>Rajash Khanaa </h1>
                            <p className='text-gray-600'>
                                Andhra Pradesh India <br />
                                GTM-7
                            </p>
                        </div>

                        <div className=' border-t h-16 flex items-center justify-center '>
                            <button className='bg-orange-50 text-orange-500 w-full h-full font-semibold tracking-wider cursor-pointer hover:bg-orange-100 text-sm '>Upload Picture</button>
                        </div>
                    </div>
                </div>
                <div className=' bg-white lg:w-8/12 w-full rounded-xl px-4 py-5'>
                    <div className='h-28 border-b px-4 flex flex-col  justify-center'>
                        <h1 className='font-semibold text-xl tracking-wider'>Profile</h1>
                        <p className='leading-loose text-gray-500'>The information can be edited</p>
                    </div>
                    <form action="" method="post">
                        <div className="grid grid-cols-2 gap-3 mt-4 ">
                            <div className='w-full'>
                                <div class="relative">
                                    <input
                                        type='text' required placeholder='First name'
                                        className="peer w-full h-14 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                                    />
                                    <label className="absolute   items-center cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs lg:flex  hidden peer-focus:text-blue-500 peer-focus:scale-90">
                                        First Name
                                    </label>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div class="relative">
                                    <input
                                        type='text' required
                                        placeholder='Last name'
                                        className="peer w-full h-14 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                                    />
                                    <label className="absolute  lg:flex hidden items-center cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:scale-90">
                                        Last Name
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-4 ">
                            <div className='w-full'>
                                <div class="relative">
                                    <input
                                        type='email' required
                                        placeholder='Email'
                                        className="peer w-full h-14 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                                    />
                                    <label className="absolute  lg:flex hidden items-center cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:scale-90">
                                        Email
                                    </label>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div class="relative">
                                    <input
                                        type='text' required
                                        placeholder='Phone number'
                                        className="peer w-full h-14 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                                    />
                                    <label className="absolute  lg:flex hidden items-center cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:scale-90">
                                        Phone Number
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-4 ">
                            <div className='w-full'>
                                <div class="relative">
                                    <input
                                        type='email' required
                                        placeholder='Country'
                                        className="peer w-full h-14 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                                    />
                                    <label className="absolute  lg:flex hidden items-center cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:scale-90">
                                        Country
                                    </label>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div class="relative">
                                    <input
                                        type='text' required
                                        placeholder='State'
                                        className="peer w-full h-14 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                                    />
                                    <label className="absolute  lg:flex hidden items-center cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:scale-90">
                                        State
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='h-16 border-t px-4 mt-3 flex items-center justify-end'>
                            <button className='lg:w-2/12 sm:w-5/12 w-8/12 bg-orange-500 rounded-md text-white cursor-pointer hover:bg-orange-700 text-sm h-9'>Save Details</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Profile  
