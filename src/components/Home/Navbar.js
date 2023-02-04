import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingCartLine } from 'react-icons/ri'

const Navbar = () => {
    return (
        <>
            {/* Tob bar with search input */}
            <div className='flex px-24 pt-10 items-center'>
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

        </>
    );
};

export default Navbar;