import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import banner from '../../assets/computer.png'

const Header = () => {
    return (
        <div className='grid grid-cols-2 gap-4 px-32 bg-gradient-to-r from-gray-50 to-orange-50 py-10'>
            <div className='self-center'>
                <p className='text-primary text-xl'>Hot Deal In This Week</p>
                <h1 className='text-4xl font-bold my-4'>Intellectual Digital <br/> Computer</h1>
                <div className='flex items-center'>
                    <button className='btn hover:bg-white bg-white border-2 px-10 shadow-lg text-neutral font-bold border-primary
                    '>Buy Now</button>
                    <div className='ml-6 text-xs'>
                        <p className='flex text-primary'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar className='text-gray-300'/></p>
                        <p>100 Reviews</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={banner} alt="" className='' />
            </div>
        </div>
    );
};

export default Header;