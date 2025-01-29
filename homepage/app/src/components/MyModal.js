<<<<<<< HEAD
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function MyModal(props) {
    return (
        <Modal show={props.isOpen} onHide={props.onClose} id={props.id} dialogClassName="modal-xl">
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: '500px', overflowY: 'auto' }}>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={props.onClose}>ปิด</button>
                <button type="button" className="btn btn-primary" onClick={props.onSave}>บันทึก</button>
            </Modal.Footer>
        </Modal>
    );
=======
function MyModal (props) {
    return <>
        <div className="modal" tabIndex="-1" id={props.id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-titlr">{props.title}</h5>
                        <button 
                        id={`${props.id}_btnClose`}
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>

            </div>

        </div>
    </>
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
}

export default MyModal;