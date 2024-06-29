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
    const changeHandler = () => {

    }
    const deleteHandler = () => {

    }
    return (
        <div className="w-full  min-h-screen shadow-2xl px-3 my-4 py-10  m-2  rounded " >
            <p>Purchased Products</p>
            {products.map(product => (
                <div className=" rounded border border-gray-300  m-3 py-10 px-4  ">
                    <FormInput
                        name="name"
                        label="product name"
                        type="text"
                        value={product.name}
                        onChange={changeHandler}

                    />
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <FormInput
                                name="price"
                                label="Price"
                                type="text"
                                value={product.price}
                                onChange={changeHandler} />
                        </div>
                        <div className="w-1/2">
                            <FormInput
                                name="qty"
                                label="QTY"
                                type="number"
                                value={product.qty}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <button
                        onClick={deleteHandler}
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