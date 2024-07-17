import React from 'react';
import Button from '../components/Button';

const TopBar = ({ }) => {

    return (
        <div className='h-[4rem] w-8/12 rounded-[2rem] mx-auto mt-4 flex flex-row content-center justify-between p-2 self-center bg-primary-800'>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-row gap-0'>
                    <span className='m-0 text-s ml-4 pt-2 font-bold text-white'>logo</span>
                    <span className='m-0 text-2xl ml-4 pt-1 font-bold text-white' >SpareRigs</span>
                </div>
                <div className='flex flex-row gap-0'>
                    <span className='m-0 text-xs ml-4 pt-4 text-white'>Buy</span>
                    <span className='m-0 text-xs ml-4 pt-4 text-white'>Sell</span>
                    <span className='m-0 text-xs ml-4 pt-4 text-white'>Build</span>
                    <span className='m-0 text-xs ml-4 pt-4 text-white'>Recycle</span>

                </div>
            </div>
            <div className='flex flex-row gap-1'>
                <Button label='Sign up' secondary></Button>
                <Button label='Log in'></Button>
            </div>
        </div>
    );
};

export default TopBar;