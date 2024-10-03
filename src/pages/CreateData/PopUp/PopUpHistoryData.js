import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import OrdersTable from '../../../components/OrdersTable';

const PopUpHistoryData = ({ handleShow, handleClose }) => {

    const header = ['STT', 'Tên FIle','EPC Start','EPC end', 'Số lượng']

    const data = [
        { STT: 1, sku: 'File1.txt', soLuong: 10 },
        { STT: 2, sku: 'File2.docx', soLuong: 5 },
        { STT: 3, sku: 'File3.pdf', soLuong: 8 },
        { STT: 4, sku: 'File4.xlsx', soLuong: 12 },
        { STT: 5, sku: 'File5.pptx', soLuong: 7 }
    ];

    return (
        <>
            <Modal show={handleShow} onHide={handleClose} centered size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Chuyển EPC sang EPC Hexadecimal</Modal.Title>
                </Modal.Header>

                <Modal.Body className='pt-4'>
                    <div style={{ position: 'relative', border: '3px solid #9C9C9C', borderRadius: 10, padding: 20, marginBottom: 40 }}>
                        <span style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '20px',
                            backgroundColor: 'white',
                            padding: '0 10px'
                        }}>
                            Tổng số lượng file trong đơn hàng 0787-09
                        </span>
                        <div id='div_create_orders'>
                            <OrdersTable data={data} header={header} maxHeight={600} className="mb-3" />
                        </div >
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="outline-primary">Create Data</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default PopUpHistoryData
