import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Loading from '../Shared/Loading/Loading';
import ProductRow from './ProductRow';

const Inventory = () => {

    const [products] = useProducts()

    if(!products){
        return <Loading/>
    }


    return (
        <div className='bg-gray-200'>
            <div class="overflow-x-auto p-6">
                <div className='flex justify-between py-1'>
                    <p className='text-left text-xl font-semibold'>Inventory</p>
                    <Link to='/add-item' className='btn btn-sm text-left bg-indigo-500 hover:bg-indigo-600 border-0 '>Add New Item</Link>
                </div>
                <table class="table table-fixed table-compact table-zebra w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Supplier</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products?.map(product=> <ProductRow key={product._id} product={product}></ProductRow>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;