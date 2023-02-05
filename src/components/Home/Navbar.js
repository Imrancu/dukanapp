import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingCartLine } from 'react-icons/ri'
import { BsListNested } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='px-24'>
            {/* Tob bar with search input */}
            <div className='flex pt-10 items-center'>
                <div>
                    <h1 className='text-primary text-3xl'>Dukan<span className='font-bold'>App</span></h1>
                </div>
                <div className='flex-auto w-64 px-20'>
                    <form className='bg-secondary flex border border-primary rounded'>
                        <AiOutlineSearch className='self-center mx-3 text-2xl' />
                        <input className=" focus:outline-none flex-1" type="text" placeholder="Search your product" />
                        <button className='bg-primary py-3 px-12 text-button font-bold' type='submit'>Search</button>
                    </form>
                </div>
                <div className='grid grid-cols-3 text-icon-color gap-6 text-3xl'>
                    <BiUser />
                    <MdOutlineFavoriteBorder />
                    <RiShoppingCartLine />
                </div>
            </div>
            {/* Navigation Manu */}
            <nav>
                <ul className='flex my-8 font-bold'>
                    <p className='flex cursor-pointer pr-10 border-r-2'>
                        <BsListNested className=' self-center' />
                        <select id="Categories" className='bg-base-100 focus:outline-none'>
                            <option value="volvo">Categories</option>
                            <option value="saab">Categories</option>
                            <option value="opel">Categories</option>
                            <option value="audi">Categories</option>
                        </select>
                    </p>
                    <li className='ml-10 cursor-pointer'>Home</li>
                    <li className='ml-10 cursor-pointer'>Shop</li>
                    <li className='ml-10 cursor-pointer'>About</li>
                    <li className='ml-10 cursor-pointer'>Account</li>
                    <li className='ml-10 cursor-pointer'>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;