import React from 'react';
import { Link } from 'react-router-dom';

const ProductRow = ({product, setModal}) => {

    const {_id, name, image, description, supplier, price, quantity} = product;

    return (
        <tr>
            <td>{name}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td className='flex gap-x-3'>
                <Link to={`/product/${_id}`} className='btn btn-xs btn-secondary'>Update</Link>
                <label onClick={() => setModal(product)} for="details-modal" class="btn btn-xs btn-error modal-button" className='btn btn-xs btn-info'>Details</label>
                <label onClick={() => setModal(product)} for="delete-modal" class="btn btn-xs btn-error modal-button">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;