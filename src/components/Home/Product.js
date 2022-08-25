import React from 'react';

const Product = (product) => {
    return (
        <div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/XLmdHt9/cover-photo.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Cycle!</h2>
                    <p>Demo description for a bicycle. You can tract your selling history from here</p>
                    <div className='flex justify-between border-2 font-bold'>
                        <p>$250</p>
                        <p>Avbl. 50pcs</p>
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-sm btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;