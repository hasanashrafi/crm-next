import React from 'react'
import Card from './Card';

function HomePage({ customers }) {
   
    return (
        <div className="flex  w-full mx-auto flex-col justify-center h-full">
            {
                customers.map((customer) => <Card customer={customer} key={customer._id}/>)
            }
        </div>
    )
}

export default HomePage