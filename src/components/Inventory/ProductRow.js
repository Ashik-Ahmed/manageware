import React from 'react';

const ProductRow = ({product}) => {

    const {index, name, image, description, supplier, price, quantity} = product;

    return (
        <tr>
            <td>{name}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td className='flex gap-x-3'>
                <button className='btn btn-xs btn-secondary'>Update</button>
                <button className='btn btn-xs btn-info'>Details</button>
                <button className='btn btn-xs btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default ProductRow;