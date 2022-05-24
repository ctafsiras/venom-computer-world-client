import React from 'react';

const DeleteConfirmModal = ({ orderId, handleCancel }) => {

    return (

        <div>



            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure You want to delete it?</h3>

                    <div class="modal-action">
                        <label htmlFor="my-modal-6" class="btn">No</label>
                        <label
                            onClick={() => handleCancel(orderId)}
                            htmlFor="my-modal-6" class="btn btn-error">Yes</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;