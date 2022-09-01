import {useQuery} from 'react-query';

const useProducts = () => {
    // const [products, setProducts] = useState();

    const {data:products, isLoading, refetch} = useQuery('products', ()=> fetch('https://manageware-server.onrender.com/products', {
        method:'GET',
    }).then(res=>res.json()))

    // useEffect(()=>{
    //     fetch('https://manageware-server.onrender.com/products')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[])

    return [products, isLoading, refetch];
};

export default useProducts;