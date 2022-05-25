import React from 'react';

const DeleteConfirmModal = ({ orderId, handleCancel }) => {

    return (

        <div>



            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure You want to delete it?</h3>

                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">No</label>
                        <label
                            onClick={() => handleCancel(orderId)}
                            htmlFor="my-modal-6" className="btn btn-error">Yes</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;