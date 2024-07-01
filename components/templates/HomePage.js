import React from 'react'
import Card from './Card';

function HomePage({ customers }) {
    console.log(customers);
    return (
        <div className="flex w-full mx-auto flex-col justify-center h-full">

            {
                customers.map(customer => <Card customer={customer} key={customer.id}/>)
            }
        </div>
    )
}

export default HomePage