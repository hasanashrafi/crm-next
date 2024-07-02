import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

function Card({ customer }) {
    const router = useRouter();

    const deleteHandler = async () => {
        const res = await fetch(`/api/delete/${customer._id}`, {
            method: "DELETE",
        })
        const data = await res.json()
        if (data.status === "success") router.reload()
    }

    return (
        <div className='w-full p-2  mx-auto'>
            <div className=" w-full lg:max-w-5xl  max-w-2xl m-2  mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
                <header className=" px-6 py-6 border-b border-gray-100">
                    <div className='flex  justify-between items-center w-full '>
                        <h2 className="font-semibold text-gray-800">Customer</h2>

                    </div>
                </header>
                <div className="w-full flex place-content-center items-center  justify-between p-3">
                    <div className="flex w-full overflow-auto
                ">
                        <table className="table-auto w-full ">
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
                                                className="w-10 h-10 flex-shrink-0 sm:visible hidden mr-3 sm:mr-3">
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
                                    <td className='p-2 whitespace-nowrap  '>
                                        <div className='flex place-content-end'>
                                            <button onClick={deleteHandler}
                                                className="w-10 sm:w-12  h-fit py-1.5  flex mx-1 place-content-center items-center  bg-red-500 hover:bg-red-700 text-white text-sm font-light rounded-md"
                                            >Delete

                                            </button>
                                            <Link href={`/edit/${customer._id}`}
                                                className="w-10 sm:w-12  h-fit py-1.5  flex mx-1  place-content-center items-center  bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-light rounded-md"
                                            >Edit
                                            </Link>
                                            <Link href={`/customer/${customer._id}`}
                                                className="w-10 sm:w-12 h-fit  py-1.5  flex mx-1 place-content-center items-center  bg-blue-500 hover:bg-blue-700 text-white text-sm font-light rounded-md"
                                            >Details
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Card