import React from 'react';
import {RiDeleteBinLine} from 'react-icons/ri';

const DeleteModal = ({product, handleProductDelete}) => {
    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box text-center">
                    <div>
                    <span className='text-5xl text-red-500 flex justify-center border-2 rounded-full w-min mx-auto bg-gray-200  p-2'> <RiDeleteBinLine/> </span>
                    </div>
                    <h3 class="font-bold text-lg">You are about to delete a product</h3>
                    <p class="py-4 text-gray-500 font-bold">Are you sure?</p>
                    <div class="modal-action">
                        <label for="delete-modal" class="btn">Cancel</label>
                        <label onClick={() => handleProductDelete(product._id)} for="delete-modal" class="btn bg-red-500 border-0">delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;