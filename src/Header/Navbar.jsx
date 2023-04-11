import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex lg:flex-row items-center justify-between h-auto text-center py-6 lg:px-20 bg-blue-50'>
            <div className='text-lg font-bold lg:text-3xl'>
                <h1>KormoTalaash</h1>
            </div>

            <button
                className='lg:hidden block text-gray-400 hover:text-indigo-400'
                onClick={handleMenuClick}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block lg:flex lg:items-center lg:w-auto w-full`}>
                <nav>
                    <ul className='lg:flex items-center justify-between text-gray-400 gap-6'>
                        <li>
                            <Link
                                className='block lg:inline-block lg:mt-0 mt-4 text-lg hover:text-indigo-400'
                                to='/'
                                onClick={handleMenuClick}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                className='block lg:inline-block lg:mt-0 mt-4 text-lg hover:text-indigo-400'
                                to='/statistics'
                                onClick={handleMenuClick}
                            >
                                Statistics
                            </Link>
                        </li>

                        <li>
                            <Link
                                className='block lg:inline-block lg:mt-0 mt-4 text-lg hover:text-indigo-400'
                                to='/AppliedJobs'
                                onClick={handleMenuClick}
                            >
                                Applied Jobs
                            </Link>
                        </li>

                        <li>
                            <Link
                                className='block lg:inline-block lg:mt-0 mt-4 text-lg hover:text-indigo-400'
                                to='/blog'
                                onClick={handleMenuClick}
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='mt-4 lg:mt-0'>
                <button className='bg-indigo-500 hover:bg-indigo-200 h-10 w-full lg:w-auto text-white hover:text-gray-500 border rounded-md px-2'>
                    Start Applying
                </button>
            </div>
        </div>
    );
};

export default Navbar;