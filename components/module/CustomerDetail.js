import Link from "next/link"
import FormInput from "./FormInput"
import ItemList from "./ItemList"
import { FaLaptopHouse } from "react-icons/fa";

function CustomerDetail({ form, setForm, changeHandler }) {
    return (
        <div>
            <div className="my-5 mx-6 w-fit p-1">
                <Link href='/' className="text-4xl hover:text-slate-600 text-slate-700">
                <FaLaptopHouse />
                </Link>
                
            </div>
            <div>

                <FormInput
                    name="name"
                    label="Name"
                    type="text"
                    value={form.name}
                    onChange={changeHandler} />

                <FormInput
                    name="lastName"
                    label="Last Name"
                    type="text"
                    value={form.lastName}
                    onChange={changeHandler} />

                <FormInput
                    name="email"
                    label="Email"
                    type="text"
                    value={form.email}
                    onChange={changeHandler} />

                <FormInput
                    name="phone"
                    label="Phone"
                    type="number"
                    value={form.phone}
                    onChange={changeHandler} />

                <FormInput
                    name="address"
                    label="Address"
                    type="text"
                    value={form.address}
                    onChange={changeHandler} />

                <FormInput
                    name="postcode"
                    label="Postal Code"
                    type="text"
                    value={form.postcode}
                    onChange={changeHandler} />

                <FormInput
                    name="date"
                    label="Date"
                    type="date"
                    value={form.date}
                    onChange={changeHandler} />

                <ItemList form={form} setForm={setForm} />
            </div>
        </div>


    )
}

export default CustomerDetail