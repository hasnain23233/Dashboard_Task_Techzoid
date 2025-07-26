import React, { useContext, useState } from 'react'
import logginImg from './../assets/logginImg.png'
import Logo from './../assets/logo.png'
import CreateContextAPI from '../context/createContextAPI'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const { setLoggin } = useContext(CreateContextAPI)
    const [showPass, setShowPAss] = useState(true)
    const Navigate = useNavigate()
    const handleOnSubmit = () => {
        setLoggin(false)
        Navigate('/dashboard')
    }
    return (
        <div className='h-screen font-roboto flex gap-10 items-center'>
            <div className='lg:block hidden h-full bg-orange-100 w-6/12'>
                <img src={logginImg} alt="" className='w-full h-full' />
            </div>
            <div className='lg:w-6/12 m-auto w-11/12'>
                <img src={Logo} alt="" className='w-5/12' />
                <h1 className='leading-loose text-4xl tracking-wider font-semibold'>Welcome Back</h1>
                <p className='text-gray-600 tracking-wider'>Enter your details below</p>
                <form className='w-full mt-4' onSubmit={handleOnSubmit}>
                    <div className='w-full'>
                        <div class="relative">
                            <input
                                type='email' required
                                className="peer w-full h-14 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                            />
                            <label className="absolute  flex items-center cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:scale-90">
                                Email
                            </label>
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <div class="relative">
                            <input
                                type={showPass ? 'password' : 'text'}
                                className="peer w-full h-14 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                            />
                            <label className="absolute -z-0  flex items-center cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:scale-90">
                                Password
                            </label>
                            <span onClick={() => { setShowPAss(!showPass) }} className='absolute top-4 text-orange-500 hover:text-orange-800 cursor-pointer right-6'>
                                {showPass ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}

                            </span>
                        </div>
                    </div>
                    <button type='submit' className='h-14 hover:bg-orange-700 bg-orange-500 text-white uppercase w-full mt-5  rounded-md'>Login to Your Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
