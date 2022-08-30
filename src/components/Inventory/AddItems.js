import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddItems = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;

    //function to add products to db
    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;
        const supplier = e.target.supplier.value;
        const image = e.target.photo.value;

        const product = { email, name, price, quantity, description, supplier, image };
        
        console.log(product);

        //send data to the server
        fetch('http://localhost:5000/add-product', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product added successfully");
                    e.target.reset();
                }
            })
    }


    return (
        <div className='py-10 bg-gray-200'>
            <h2 className='text-3xl font-bold text-indigo-500 mb-6'>Add a New Product</h2>
            <form onSubmit={handleAddProduct} class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
                    <div class="card-body">
                        <div class="form-control">
                        <input type="text" name='name' placeholder="Product Name" class="input input-bordered" />
                        </div>
                        <div className='flex justify-between'>                            
                            <div class="form-control">
                            <input type="number" name='price' placeholder="Price" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                            <input type="number" name='quantity' placeholder="Quantity" class="input input-bordered" />
                            </div>
                        </div>
                        <div className='flex justify-between'>                            
                            <div class="form-control">
                            <input type="text" name='supplier' placeholder="Supplier" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                            <input type="text" name='photo' placeholder="Photo Link" class="input input-bordered" />
                            </div>
                        </div>
                        <div class="form-control">
                        <textarea type="text" name='description' placeholder="Description" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                        <button type='submit' class="btn bg-indigo-500 hover:bg-indigo-600 border-0">Submit</button>
                        </div>
                    </div>
                    </form>

        </div>
    );
};

export default AddItems;