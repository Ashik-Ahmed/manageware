import React, { useState } from 'react';
import Product from './Product';

const Products = () => {

    // const [Products, setProducts] = useState("10");
    // console.log(parseInt(Products))

    const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='grid grid-cols-6 gap-4 mt-5 container mx-auto'>
            {
                products.slice(0, 6).map(product => <Product key={product.index} product={product}></Product>)
            }
        </div>
    );
};

export default Products;