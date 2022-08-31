import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import DeleteModal from './DeleteModal';
import DetailsModal from './DetailsModal';
import ProductRow from './ProductRow';
import {useQuery} from 'react-query';

const Inventory = () => {

    // const [products, isLoading, refetch] = useProducts()
    // const [products, setProducts] = useState([]);
    const [modal, setModal] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);


    //getting total product count from DB
    useEffect(()=>{
        fetch('https://manageware-server.vercel.app/product-count')
        .then(res=>res.json())
        .then(data=>{
            const count=data.count;
            const pages=Math.ceil(count/size);
            setPageCount(pages);
        })
    },[size])

    //loading products from server
    const {data:products, isLoading, refetch} = useQuery('products', ()=> fetch(`https://manageware-server.vercel.app/products?page=${page}&size=${size}`, {
        method:'GET',
    }).then(res=>res.json()))


    useEffect(()=>{
        refetch();
    },[page, size, refetch])

    // const handlePageChange=(number)=>{
    //     setPage(number);
    //     console.log(number);
    //     refetch();
    // }

    // const handlePageSize=(count)=>{
    //     setSize(count);
    //     refetch();
    // }

    //product delete
    const handleProductDelete =(id)=>{
        fetch(`https://manageware-server.vercel.app/delete-product/${id}`, {
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
                    <p className='text-left text-xl font-semibold ml-2 text-indigo-500'>Inventory</p>
                    <Link to='/add-item' className='btn btn-sm text-left bg-indigo-500 hover:bg-indigo-600 border-0 '>Add New Item</Link>
                </div>
                <table class="table table-fixed table-compact table-zebra w-full">
                    <thead>
                    <tr>
                        <th className='bg-indigo-200'>Name</th>
                        <th className='invisible md:visible bg-indigo-200'>Price</th>
                        <th className='invisible md:visible bg-indigo-200'>Stock</th>
                        <th className='invisible md:visible bg-indigo-200'>Supplier</th>
                        <th className='bg-indigo-200'>Action</th>
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
                <div className='flex justify-end mt-3 mr-4'>
                    {
                        [...Array(pageCount).keys()].map(number=><button onClick={()=>setPage(number)} className='btn btn-xs btn-square btn-success border-0 mr-2'>{number+1}</button>)
                    }
                    
                    <select onChange={e=>setSize(e.target.value)}>
                        <option value='5'>5</option>
                        <option value='10' selected>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                    </select>
                    {/* <div id="container"></div>
                    <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageChange}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                        /> */}
                </div>
            </div>
        </div>
    );
};

export default Inventory;