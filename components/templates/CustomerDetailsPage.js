import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaLaptopHouse } from "react-icons/fa";

import React from 'react'

function CustomerDetailsPage({ data }) {
    const router = useRouter()

    const { name,
        lastName,
        email,
        phone,
        address,
        postcode,
        products,
        date,
    } = data

    const deleteHandler = async () => {
        const res = await fetch(`/api/delete/${data._id}`, {
            method: "DELETE",
        })
        const newRes = await res.json()
        if (newRes.status === "success") router.push("/")

    }

    

    return (
        <div className='min-h-screen sm:min-h-screen lg:min-h-screen mx-auto  max-w-6xl'>
            <div className="min-h-screen  w-full  mx-auto p-5">
            <div className="mt-5 mx-6 w-fit p-1">
                <Link href='/' className="text-4xl hover:text-slate-600 text-slate-700">
                <FaLaptopHouse />
                </Link>
                
            </div>
                <h4 className='font-mono text-lg font-semibold p-2 m-2'>
                    Customer's Details
                </h4>
                <div className=' flex flex-wrap my-2 mx-auto p-4 justify-center rounded-lg bg-slate-700 text-white '>

                    <div className=' flex'>
                        <span className='text-center  p-2  rounded text-lg text-cyan-400 font-semibold'>
                            Name:
                        </span>
                        <p className='  text-center  p-2 rounded text-lg  font-semibold '>
                            {name}
                        </p>
                    </div>

                    <div className='flex flex-wrap '>
                        <span className='text-center text-cyan-400 p-2  rounded text-lg  font-semibold'>
                            LastName:
                        </span>
                        <p className='  text-center  p-2  rounded text-lg font-mono font-semibold '>
                            {lastName}
                        </p>
                    </div>

                    <div className='flex flex-wrap '>
                        <span className='text-center text-cyan-400 p-2 rounded text-lg  font-semibold'>
                            Email:
                        </span>
                        <p className='  text-center  p-2 rounded text-lg  font-semibold '>
                            {email}
                        </p>
                    </div>

                    <div className='flex flex-wrap '>
                        <span className='text-center text-cyan-400 p-2 rounded text-lg  font-semibold'>
                            Phone:
                        </span>
                        <p className='  text-center  p-2  rounded text-lg  font-semibold '>
                            {phone}
                        </p>
                    </div>

                    <div className='flex flex-wrap'>
                        <span className='text-center text-cyan-400 p-2  rounded text-lg font-mono font-semibold'>
                            Address:
                        </span>
                        <p className='  text-center  p-2  rounded text-lg  font-semibold '>
                            {address}
                        </p>
                    </div>

                    <div className='flex flex-wrap '>
                        <span className='text-center text-cyan-400 p-2  rounded text-lg  font-semibold'>
                            PostalCode:
                        </span>
                        <p className='  text-center  p-2  rounded text-lg  font-semibold '>
                            {postcode}
                        </p>
                    </div>


                    <div className='flex flex-wrap '>
                        <span className='text-center text-cyan-400 p-2  rounded text-lg  font-semibold'>
                            Date:
                        </span>
                        <p className='  text-center  p-2  rounded text-lg  font-semibold '>
                            {moment(date).utc().format("YYYY-MM-DD")}
                        </p>
                    </div>

                </div>
                <div className='my-20  p-2'>
                    <h4 className='font-mono text-lg font-semibold p-2 m-2'>Customer Detail Products</h4>
                    <div className=' grid grid-cols-3 text-center rounded-lg w-full bg-slate-700 border mx-auto p-2 m-2'>
                        <p className='text-cyan-500 font-semibold border-b-2 border-b-cyan-400 p-2'>Name</p>
                        <p className='text-cyan-500 font-semibold border-b-2 border-b-cyan-400 p-2'>Price</p>
                        <p className='text-cyan-500 font-semibold border-b-2 border-b-cyan-400 p-2'>Qty</p>
                        {
                            products.map((product, index) =>
                                <React.Fragment key={index}>
                                    <p className='text-white p-2'>{product.name}</p>
                                    <p className='text-white p-2'>{product.price}</p>
                                    <p className='text-white p-2'>{product.qty}</p>
                                </React.Fragment>
                            )
                        }
                    </div>
                    <div className='flex place-content-start my-10'>
                        <button onClick={deleteHandler}
                            className="w-20 sm:w-18  h-fit py-1.5  flex mx-1 place-content-center items-center  bg-red-500 hover:bg-red-700 text-white   rounded-md"
                        >Delete
                        </button>
                        <Link href={`/edit/${data._id}`}
                            className="w-20 sm:w-18  h-fit py-1.5  flex mx-1  place-content-center items-center  bg-yellow-500 hover:bg-yellow-600 text-white  rounded-md"
                        >Edit
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetailsPage