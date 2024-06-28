import Link from 'next/link'
import React, { useState } from 'react'
import Form from '../module/Form'
import { useRouter } from 'next/router'

function AddCustomPage() {
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        postcode: "",
        date: "",
        products: []
    })

    const router = useRouter()

    const saveHandler = async () => {
        const res = await fetch("/api/customer", {
            method: "POST",
            body: JSON.stringify({ data: form }),
            headers: { "Content-type": "application/json" }
        })
        const data = await res.json()
        console.log(data);

        if (data.status === "success") router.push("/")
    }

    const cancelHandler = () => {
        setForm({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            postcode: "",
            date: "",
            products: []
        })
        router.push()
    }

    return (
        <div className='p-3 '>
            <Form form={form} setForm={setForm} />
            <div className=''>
                <button
                    onClick={saveHandler}
                    className="inline-flex items-center m-1 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                    Save
                </button>
                <button
                    onClick={cancelHandler}
                    className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default AddCustomPage