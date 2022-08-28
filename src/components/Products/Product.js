import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    const {_id, name, image, description, price, supplier, quantity} = product;

    return (
        <div>
            <div class="card card-compact bg-base-100 shadow-xl text-left">
                <figure><img src="https://i.ibb.co/XLmdHt9/cover-photo.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between border-2 font-bold'>
                        <p>${price}</p>
                        <p>{quantity} pcs left</p>
                    </div>
                    <div class="card-actions justify-end">
                        <Link to={`/product/${_id}`} class="btn btn-sm btn-primary">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;