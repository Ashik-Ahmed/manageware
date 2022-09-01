import React from 'react';
import Banner from './Banner';
import Products from '../Products/Products';
import { TbPackgeImport, TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
// import './card.css';



const Home = () => {

    return (
        <div className='bg-gray-200'>
            <Banner />
            <Products />


            <div className='container mx-auto py-4 rounded-xl mt-12 mb-4'>
                <div className='mb-16'>
                    <p className='text-3xl text-left font-semibold text-white border-b-4 border-indigo-500'>
                        <span className='bg-indigo-500 pl-1 pr-2'>Best Selling</span>
                    </p>
                </div>


                <div className='md:flex justify-between px-28'>
                <div class="avatar indicator">
                <img src='https://i.ibb.co/wL7zFj6/best-selling.png' alt='indicator' class="indicator-item p-16"/> 
                <div class="w-72 h-72 object-cover rounded-lg">
                    <img src="https://i.ibb.co/9GRyXwV/7.jpg" alt='best'/>
                    <button className='btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-0 indicator-item px-10 indicator-bottom indicator-center'>Details</button>
                </div>
                </div>
                <div class="avatar indicator">
                <img src='https://i.ibb.co/wL7zFj6/best-selling.png' alt='indicator' class="indicator-item p-16"/> 
                <div class="w-72 h-72 rounded-lg">
                    <img src="https://i.ibb.co/j8shM2p/6.jpg" alt='best'/>
                    <button className='btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-0 indicator-item px-10 indicator-bottom indicator-center'>Details</button>
                </div>
                </div>
                <div class="avatar indicator">
                <img src='https://i.ibb.co/wL7zFj6/best-selling.png' alt='indicator' class="indicator-item p-16"/> 
                <div class="w-72 h-72 rounded-lg">
                    <img src="https://i.ibb.co/kH06mRJ/5.jpg" alt='best'/>
                    <button className='btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-0 indicator-item px-10 indicator-bottom indicator-center'>Details</button>
                </div>
                </div> 
                </div>
            </div>

            <div className='py-5 bg-gray-200'>

                <div className='container my-3 mx-auto'>
                <h3 className='text-3xl text-left font-semibold text-white border-b-4 border-indigo-500'>
                    <span className='bg-indigo-500 pl-1 pr-2'>Today's Order Status</span>
                </h3>
                </div>
                <div className='md:flex justify-around gap-x-10 w-full mt-6'>
                    <div className='w-64 bg-white justify-between items-center p-4 rounded-xl'>
                        <div className='flex w-3/4'>
                            <div className='text-5xl text-white bg-indigo-400 p-1 rounded-md'>
                                <TbPackgeImport />
                            </div>

                            <div className='ml-3 text-left'>
                                <p className='font-semibold'>Picked</p>
                                <p className='text-xl font-bold'>1214</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-64 bg-white justify-between items-center p-4 rounded-xl'>
                        <div className='flex w-3/4'>
                            <div className='text-5xl text-white bg-indigo-400 p-1 rounded-md'>
                                <TbTruckDelivery />
                            </div>

                            <div className='ml-3 text-left'>
                                <p className='font-semibold'>Shipped</p>
                                <p className='text-xl font-bold'>385</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-64 bg-white justify-between items-center p-4 rounded-xl'>
                        <div className='flex w-3/4'>
                            <div className='text-5xl text-white bg-indigo-400 p-1 rounded-md'>
                                <AiOutlineDeliveredProcedure />
                            </div>

                            <div className='ml-3 text-left'>
                                <p className='font-semibold'>Delivered</p>
                                <p className='text-xl font-bold'>165</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-64 bg-white justify-between items-center p-4 rounded-xl'>
                        <div className='flex w-3/4'>
                            <div className='text-5xl text-white bg-indigo-400 p-1 rounded-md'>
                                <TbTruckReturn />
                            </div>

                            <div className='ml-3 text-left'>
                                <p className='font-semibold'>Returned</p>
                                <p className='text-xl font-bold'>15</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Home;