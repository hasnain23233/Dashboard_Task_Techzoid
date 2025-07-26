import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faFileExport, faImage, faBell, faCommentAlt, faTrashAlt, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const RenewedCertificates = () => {
    const [data, setData] = useState([
        { id: 1, name: "Ali Raza", provider: "Upwork.com", region: "Japan", status: "Healthy", date: "09-10-2004" },
        { id: 2, name: "Fatima Zahra", provider: "Upwork.com", region: "indonesia", status: "Expired", date: "09-10-2004" },
        { id: 3, name: "Zain Ali", provider: "Upwork.com", region: "unitedstate", status: "Warning", date: "09-10-2004" },
        { id: 4, name: "Hassan Khan", provider: "Upwork.com", region: "pakistan", status: "Critical", date: "09-10-2004" },
        { id: 5, name: "Ayesha Siddiqui", provider: "Upwork.com", region: "canada", status: "Healthy", date: "09-10-2004" },
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case "Healthy":
                return "bg-green-200 text-green-800";
            case "Expired":
                return "bg-red-200 text-red-800";
            case "Warning":
                return "bg-gray-200 text-gray-800";
            case "Critical":
                return "bg-yellow-200 text-yellow-800";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const handleDelete = (id) => {
        const updated = data.filter((item) => item.id !== id);
        setData(updated);
    };
    return (
        <div className='bg-white p-4 rounded-md w-[1200px]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl w-3/12 font-semibold text-gray-700'>Renewed Certificates</h1>
                <ul className='flex gap-4 w-9/12 justify-around items-center'>
                    <li>
                        <input type="search" name="seach" placeholder='Search......' className='border focus:outline-none h-12 rounded-md px-3' id="" />
                    </li>
                    <li>
                        <a href="#" className='h-12 bg-gray-100  text-sm hover:bg-gray-200 uppercase tracking-wider rounded-full  px-3 flex items-center gap-2'>  <FontAwesomeIcon icon={faDownload} /> <p>Download</p></a>
                    </li>
                    <li>
                        <a href="#" className='h-12 bg-gray-100  text-sm hover:bg-gray-200 uppercase tracking-wider rounded-full  px-3 flex items-center gap-2'> <FontAwesomeIcon icon={faFileExport} />Export as image</a>
                    </li>
                    <li>
                        <a href="#" className='h-12 bg-gray-100  text-sm hover:bg-gray-200 uppercase tracking-wider rounded-full  px-3 flex items-center gap-2'> <FontAwesomeIcon icon={faImage} />Print</a>
                    </li>
                    <li>
                        <select class="border h-12 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <option value="">Country</option>
                            <option value="Paskistan">Paskistan</option>
                            <option value="Japan">Japan</option>
                            <option value="Canada">Canada</option>
                            <option value="England">England</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className='mt-4'>
                <div className="overflow-x-auto w-full">
                    <table className="w-full bg-white shadow rounded-lg overflow-hidden">
                        <thead className="">
                            <tr>
                                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Name</th>
                                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Providers</th>
                                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Regions</th>
                                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Status</th>
                                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Next Renew</th>
                                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">{item.provider}</td>
                                    <td className="px-6 py-4">{item.region}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-sm px-3 py-1 rounded-full ${getStatusStyle(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{item.date}</td>
                                    <td className="px-6 py-4 space-x-5 text-gray-600">
                                        <FontAwesomeIcon icon={faBell} className="cursor-pointer" />
                                        <FontAwesomeIcon icon={faCommentAlt} className="cursor-pointer" />
                                        <FontAwesomeIcon
                                            icon={faTrashAlt}
                                            className="cursor-pointer hover:text-red-600"
                                            onClick={() => handleDelete(item.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                            {data.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center py-6 text-gray-500">
                                        No records found.
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>
                    <div className='m-auto border-t flex text-sm  text-gray-800  justify-center gap-5 py-5'>
                        <div className='flex gap-2'>
                            <p>Row Per Page :</p>
                            <select class=" rounded-md focus:outline-none">
                                <option value="">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="25">25</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <div className='flex gap-2'>
                            <p>1–5 of 5 :</p>
                            <p className='space-x-6 text-gray-500'>
                                <FontAwesomeIcon icon={faAngleLeft} className="cursor-pointer" />
                                <FontAwesomeIcon icon={faAngleRight} className="cursor-pointer" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenewedCertificates
