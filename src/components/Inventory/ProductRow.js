import React from 'react';
import { Link } from 'react-router-dom';

const ProductRow = ({product, setModal}) => {

    const {_id, name, image, description, supplier, price, quantity} = product;

    return (
        <tr>
            <td>{name}</td>
            <td className='invisible md:visible'>$ {price}</td>
            <td className='invisible md:visible'>{quantity}</td>
            <td className='invisible md:visible'>{supplier}</td>
            <td className='flex gap-x-3'>
                <Link to={`/product/${_id}`} className='btn btn-xs bg-teal-400 hover:bg-teal-600 border-0'>Update</Link>
                <label onClick={() => setModal(product)} for="details-modal" className="btn btn-xs bg-indigo-400 hover:bg-indigo-600 border-0 modal-button">Details</label>
                <label onClick={() => setModal(product)} for="delete-modal" class="btn btn-xs bg-red-400 hover:bg-red-600 border-0 modal-button">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;