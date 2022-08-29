import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Loading from '../Shared/Loading/Loading';
import DeleteModal from './DeleteModal';
import DetailsModal from './DetailsModal';
import ProductRow from './ProductRow';

const Inventory = () => {

    const [products, isLoading, refetch] = useProducts()
    const [modal, setModal] = useState(null);

    const handleProductDelete =(id)=>{

        fetch(`http://localhost:5000/delete-product/${id}`, {
            method:'DELETE',
        }).then(res=>res.json()).then(data=>{
            refetch();
        })

        console.log("deleted product", id)
    }

    if(isLoading){
        return <Loading/>
    }


    return (
        <div className='bg-gray-200'>
            <div class="overflow-x-auto p-6 w-11/12 mx-auto">
                <div className='flex justify-between py-1'>
                    <p className='text-left text-xl font-semibold ml-2'>Inventory</p>
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
                        products?.map(product=> <ProductRow key={product._id} product={product} setModal={setModal}></ProductRow>)
                    }
                    {
                         
                        modal && <DeleteModal product={modal} handleProductDelete={handleProductDelete}></DeleteModal>
                        
                    }

                    {
                         
                        modal && <DetailsModal product={modal}></DetailsModal>
                        
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;