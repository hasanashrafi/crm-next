import CustomerDetail from './CustomerDetail';


function Form({ form, setForm }) {


    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    return <CustomerDetail form={form} setForm={setForm} changeHandler={(e) => changeHandler(e)} />



}

export default Form