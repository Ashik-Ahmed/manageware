import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';

const useProducts = () => {
    // const [products, setProducts] = useState();

    const {data:products, isLoading, refetch} = useQuery('products', ()=> fetch('http://localhost:5000/products', {
        method:'GET',
    }).then(res=>res.json()))

    // useEffect(()=>{
    //     fetch('http://localhost:5000/products')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[])

    return [products, isLoading, refetch];
};

export default useProducts;