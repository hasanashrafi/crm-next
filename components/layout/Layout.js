import Link from 'next/link'
import React from 'react'

function Layout({ children }) {
    return (
        <>
            <header className='w-full sm:max-w-[1200px] mx-auto h-[52px] p-3 rounded-md mt-2 content-center place-items-center bg-blue-700 flex justify-between'>
                <h2 className='text-white font-semibold text-xl font-mono'>CRM-Next Js</h2>
                <Link href='/add-customer'
                    className=' p-1.5 rounded-md bg-white text-blue-700 text-sm hover:text-white hover:bg-opacity-20 transition-all'>Add Customer</Link>
            </header>
            <div className=' bg-blue-100 sm:max-w-[1200px] mx-auto'>
                {children}
            </div>

            <footer className='mb-2 sm:max-w-[1200px] mx-auto rounded-md w-full text-center content-center text-white  h-[48px] bg-blue-700'>
                <a
                    href='https://github.com/hasanashrafi'
                    target='_blank'
                    rel='noreferrer'
                    className='border-b-2 p-1.5 w-fit place-items-center'>
                    CRM | Developed By HsN &copy;
                </a>
            </footer>
        </>
    )
}

export default Layout