import Link from 'next/link'
import React from 'react'

function Card({ customer }) {
    const deleteHandler = ()=>{

    }
    return (
        <div className="w-full max-w-4xl m-2 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Customer</h2>
            </header>
            <div className="flex place-content-center items-center  justify-between p-3">
                <div className="flex w-1/2 overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap ">
                                    <div className="font-semibold text-center">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap ">
                                    <div className="font-semibold text-center">Last Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Email</div>
                                </th>


                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">

                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center place-content-center">
                                        <div
                                            className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img
                                                className="rounded-full"
                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach" />
                                        </div>
                                        <div className="font-medium text-gray-800 ">
                                            <p>{customer.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap ">
                                    <div className="text-center">
                                        {customer.lastName}
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-center">
                                        {customer.email}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex items-center '>
                    <button onClick={deleteHandler}
                        className="w-16 h-fit py-1.5 px-0 flex mx-1 place-content-center items-center  bg-red-500 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                    >Delete

                    </button>
                    <Link href={`/edit/${customer._id}`}
                        className="w-16 h-fit py-1.5 px-0 flex mx-1  place-content-center items-center  bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-md"
                    >Edit
                    </Link>
                    <Link href={`/customer/${customer._id}`}
                        className="w-16 h-fit  py-1.5 px-0 flex mx-1 place-content-center items-center  bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium rounded-md"
                    >Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card