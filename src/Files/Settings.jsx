import React from 'react'

const Settings = () => {
    return (
        <div className='font-roboto px-4'>
            <h1 className='mt-16 text-2xl font-semibold pt-5 tracking-wider'>Account</h1>
            <div className='bg-white mt-2 rounded-xl'>
                <div className='h-28 border-b px-4 flex flex-col  justify-center'>
                    <h1 className='font-semibold text-xl tracking-wider'>Notifications</h1>
                    <p className='leading-loose text-gray-700'>Manage the notifications</p>
                </div>
                <div className=' px-4 py-5 flex gap-4'>
                    <div className='ml-6 w-4/12'>
                        <h1 className='font-semibold text-xl tracking-wider'>Notifications</h1>
                        <div className="space-y-6 mt-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                />
                                <span>Email</span>
                            </label>

                            {/* Telegram */}
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                />
                                <span>Telegram</span>
                            </label>

                            {/* Slack/Jira */}
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                />
                                <span>Slack/Jira</span>
                            </label>
                        </div>
                    </div>
                    <div className='ml-6'>
                        <h1 className='font-semibold text-xl tracking-wider'>Messages</h1>
                        <div className="space-y-6 mt-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                />
                                <span>What's app</span>
                            </label>

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                />
                                <span>Text Message </span>
                            </label>

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                />
                                <span>Telegram
                                </span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                />
                                <span>Slack</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='h-20 border-t px-4 flex items-center justify-end'>
                    <button className='w-1/12 bg-orange-500 rounded-md text-white cursor-pointer hover:bg-orange-700 text-sm h-9'>Save</button>
                </div>
            </div>

            <div className='bg-white mt-6 rounded-xl'>
                <div className='h-28 border-b px-4 flex flex-col  justify-center'>
                    <h1 className='font-semibold text-xl tracking-wider'>Password</h1>
                    <p className='leading-loose text-gray-700'>Update password</p>
                </div>
                <div className=' px-4 py-5 '>
                    <div className='w-full'>
                        <div class="relative">
                            <input
                                className="peer w-full h-14 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                            />
                            <label className="absolute  flex items-center cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:scale-90">
                                Password
                            </label>
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <div class="relative">
                            <input
                                className="peer w-full h-14 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                            />
                            <label className="absolute  flex items-center cursor-text bg-white px-1 left-2.5 top-4 text-slate-400 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:scale-90">
                                Conform Password
                            </label>
                        </div>
                    </div>
                </div>
                <div className='h-20 border-t px-4 flex items-center justify-end'>
                    <button className='w-1/12 bg-orange-500 rounded-md text-white cursor-pointer hover:bg-orange-700 text-sm h-9'>Update</button>
                </div>
            </div>

        </div>
    )
}

export default Settings
