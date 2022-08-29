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
        <div className='grid grid-cols-3 gap-12 mt-5 container mx-auto'>
            {
                products?.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;