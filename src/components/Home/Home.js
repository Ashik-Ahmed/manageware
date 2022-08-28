import React from 'react';
import Banner from './Banner';
import Products from '../Products/Products';
import { TbPackgeImport, TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';



const Home = () => {
    return (
        <div className='bg-gray-200'>
            <Banner />
            <Products />


            <div className='container mx-auto bg-white p-4 rounded-xl mt-12 mb-4'>
                <div className='text-left mb-5'>
                    <p className='text-lg font-semibold'>Top selling Products</p>
                </div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Black gear bicycle</th>
                                <td>$ 250</td>
                                <td>20</td>
                                <td>$ 5000</td>
                            </tr>

                            <tr>
                                <th>Black gear bicycle</th>
                                <td>$ 250</td>
                                <td>20</td>
                                <td>$ 5000</td>
                            </tr>

                            <tr>
                                <th>Black gear bicycle</th>
                                <td>$ 250</td>
                                <td>20</td>
                                <td>$ 5000</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className='py-5 bg-gray-200'>

                <div className='container my-3'>
                    <p className='text-xl font-semibold'>Order status for last 7 days</p>
                </div>
                <div className='md:flex justify-around gap-x-10 w-full'>
                    <div className='w-64 bg-white justify-between items-center p-4 rounded-xl'>
                        <div className='flex w-3/4'>
                            <div className='text-5xl text-white bg-blue-400 p-1 rounded-md'>
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
                            <div className='text-5xl text-white bg-blue-400 p-1 rounded-md'>
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
                            <div className='text-5xl text-white bg-blue-400 p-1 rounded-md'>
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
                            <div className='text-5xl text-white bg-blue-400 p-1 rounded-md'>
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