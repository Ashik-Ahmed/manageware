import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';

const useProducts = () => {
    // const [products, setProducts] = useState();

    const {data:products, isLoading, refetch} = useQuery('products', ()=> fetch('https://manageware-server.vercel.app/products', {
        method:'GET',
    }).then(res=>res.json()))

    // useEffect(()=>{
    //     fetch('https://manageware-server.vercel.app/products')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[])

    return [products, isLoading, refetch];
};

export default useProducts;