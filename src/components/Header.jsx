import React from 'react';
import Button from '../components/Button';
const TopBar = ({ }) => {

    return (
        <div className='h-min w-9/12 rounded-full mx-auto mt-4 flex flex-row content-center justify-between p-3 bg-primary-900'>
            <div className='flex flex-row gap-14'>
                <div className='flex flex-row items-center gap-0'>
                    <span className='m-0 text-2xl ml-4 pt-0 font-bold text-white' >SpareRigs</span>
                </div>
                <div className='flex flex-row items-center gap-10'>
                    <span className='text-xs text-white'>Buy</span>
                    <span className=' text-xs text-white'>Sell</span>
                    <span className='text-xs text-white'>Build</span>
                    <span className='text-xs text-white'>Recycle</span>

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