import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Loading from '../Shared/Loading/Loading';
import Product from './Product';

const Products = () => {

    // const [Products, setProducts] = useState("10");
    // console.log(parseInt(Products))

    // const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [products, setProducts] = useProducts();


    if(!products){
        return <Loading/>
    }

    return (
       <div className=' mt-5 container mx-auto'>
        <h3 className='text-3xl font-semibold text-indigo-500 border-b-4 border-indigo-500 inline'>Our Products</h3>
         <div className='grid md:grid-cols-3 gap-12 mt-8'>
            {
                products?.slice(0, 3).map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
       </div>
    );
};

export default Products;