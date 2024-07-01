import FormInput from "./FormInput";


function ItemList({ form, setForm }) {
    const { products } = form;

    const addHandler = () => {
        setForm({
            ...form,
            products: [...products,
            { name: "", price: "", qty: "" }
            ]
        })
        console.log(products);
    }

    const changeHandler = (e, index) => {
        const { name, value } = e.target;
        const newProducts = [...products];
        newProducts[index][name] = value;
        setForm({ ...form, products: newProducts })

    }

    const deleteHandler = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setForm({ ...form, products: newProducts })
    }

    return (
        <div className=" w-full h-full  shadow-2xl  my-4 p-6  m-2  rounded-lg " >
            <p className="font-semibold font-mono text-lg text-center">Purchased Products</p>
            {products.map((product, index) => (
                <div key={index}
                    className="mx-auto w-full rounded-md border border-gray-300  m-3 py-10   ">
                    <FormInput
                        name="name"
                        label="product name"
                        type="text"
                        value={product.name}
                        onChange={(e) => changeHandler(e, index)}
                    />

                    <div className="flex sm:w-full lg:inline-block place-items-center  sm:justify-between ">
                        <div className=" w-1/3 lg:w-full  m-1 ">
                            <FormInput
                                name="price"
                                label="Price"
                                type="text"
                                value={product.price}
                                onChange={(e) => changeHandler(e, index)} />
                        </div>
                        <div className=" w-1/3 lg:w-full  m-1">
                            <FormInput
                                name="qty"
                                label="QTY"
                                type="number"
                                value={product.qty}
                                onChange={(e) => changeHandler(e, index)} />
                        </div>
                    </div>
                    <button
                        onClick={() => deleteHandler(index)}
                        className="flex mx-auto place-content-center items-center mt-6 px-4 py-2 bg-red-500 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button
                className="flex w-1/2 mx-auto  place-content-center  items-center mt-10 px-4 py-2 bg-green-500 hover:bg-green-700 text-white text-sm font-medium rounded-md"
                onClick={addHandler}>
                Add Item
            </button>
        </div>
    )
}

export default ItemList