import { useState } from 'react'
import Form from '../module/Form';
import { useRouter } from 'next/router';
import moment from 'moment';

function CustomerEditPage({ data, id }) {
    const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : ""

    const [form, setForm] = useState({

        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address || "",
        postcode: data.postcode || "",
        createdAt: data.createdAt || "",
        products: data.products || "",
        date: date || ""
    })

    const router = useRouter()

    const saveHandler = async () => {
        const res = await fetch(`/api/edit/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ data: form }),
            headers: { "Content-type": "application/json" }
        })
        const data = await res.json()
        

        if (data.status === "success") router.push("/")
    }

    const cancelHandler = () => {
        router.push("/")
    }


    return (
        <div className='p-2'>
            <div className=' w-full '>
                <h4 className='text-center font-mono p-2 m-2 font-semibold text-lg'>
                    Edit Customer
                </h4>
                <Form form={form} setForm={setForm} />
                <div className='flex '>
                    <button
                        onClick={saveHandler}
                        className="w-1/2 sm:w-fit  items-center text-center m-1 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                        Save
                    </button>
                    <button
                        onClick={cancelHandler}
                        className="w-1/2 sm:w-fit  items-center text-center m-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomerEditPage