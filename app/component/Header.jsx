'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className='bg-gradient-to-r from-gray-900 to-gray-800 py-4 lg:py-6'>
            <div className='container mx-auto flex justify-between items-center px-4 lg:px-8'>
                <Link href='/'>
                    <div className='text-xl lg:text-2xl font-bold text-white hover:text-gray-200 transition duration-300'>
                        Clerk Auth
                    </div>
                </Link>
                <div className='lg:hidden'>
                    {/* Hamburger Icon */}
                    <FaBars className='text-white cursor-pointer' onClick={toggleDrawer} />
                    {/* Drawer */}
                    {isDrawerOpen && (
                        <div className='fixed inset-0 z-50 bg-gray-800 bg-opacity-75'>
                            <div className='absolute inset-y-0 right-0 max-w-xs w-1/2 bg-white shadow-lg'>
                                 {/* Close Drawer Button */}
                                 <div className='p-4'>
                                        <FaTimes className='text-gray-900 hover:text-gray-600 cursor-pointer' onClick={toggleDrawer} />
                                    </div>
                                    <div className='py-6 px-4 flex flex-col space-y-4'>
                                    <Link href='/login'>
                                        <div className='text-gray-900 hover:text-gray-600 text-lg font-semibold'>Login</div>
                                    </Link>
                                    <Link href='/signup'>
                                        <div className='text-gray-900 hover:text-gray-600 text-lg font-semibold'>Signup</div>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='hidden lg:flex space-x-6'>
                    <Link href='/login'>
                        <div className='text-white hover:text-gray-200 transition duration-300'>Login</div>
                    </Link>
                    <Link href='/signup'>
                        <div className='text-white hover:text-gray-200 transition duration-300'>Signup</div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
