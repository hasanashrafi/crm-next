import FormInput from "./FormInput"
import ItemList from "./ItemList"

function CustomerDetail({ form, setForm, changeHandler }) {
    return (
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
    )
}

export default CustomerDetail