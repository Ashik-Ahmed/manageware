import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import DeleteModal from '../Inventory/DeleteModal';
import DetailsModal from '../Inventory/DetailsModal';
import ProductRow from '../Inventory/ProductRow';
import Loading from '../Shared/Loading/Loading';

const MyItems = () => {

    const [authUser] = useAuthState(auth);
    // const [products, setProducts] =useState();
    const [modal, setModal] = useState(null);



     //get products by user email
    //  useEffect(() => {
    //     const getProducts = async () => {
    //         const email = authUser.email;
    //         const url = `https://manageware-server.onrender.com/myproducts?email=${email}`;

    //         fetch(url, {
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => setProducts(data))

    //     }
    //     getProducts();

    // }, [authUser])


    //get products by user email
    const {data:myProducts, isLoading, refetch} = useQuery('myProducts', ()=> fetch(`https://manageware-server.onrender.com/myproducts?email=${authUser.email}`,{
        method:'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },        
    }).then(res=>res.json()))


    //product delete
    const handleProductDelete =(id)=>{
        fetch(`https://manageware-server.onrender.com/delete-product/${id}`, {
            method:'DELETE',
        }).then(res=>res.json()).then(data=>{
            refetch();
        })
    }

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='bg-gray-200'>
            <div class="overflow-x-auto p-6 w-11/12 mx-auto">
                <div className='flex justify-between py-1'>
                    <p className='text-left text-xl text-indigo-500 font-semibold ml-2'>My Items</p>
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
                        myProducts && myProducts.map(product=> <ProductRow key={product._id} product={product} setModal={setModal}></ProductRow>)
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

export default MyItems;