
function FormInput({ name, label, type, value, onChange }) {
    return (
        <div>
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor={name}
                    >
                        {label}
                    </label>
                  
                    <input
                        type={type}
                        id={name}
                        name={name}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default FormInput