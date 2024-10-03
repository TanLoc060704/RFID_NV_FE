import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const PopUpGtin96_GS1 = ({ handleShow , handleClose }) => {

    return (
        <>
            <Modal show={handleShow} onHide={handleClose} centered size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Tất cả SKU trong đơn hàng</Modal.Title>
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
                            Thông tin SKU SỐ 1 Trong đơn hàng 0787-09
                        </span>
                        <div id='div_create_orders'>
                            <Row className="mb-3">
                                <Col md={1}>
                                    <Form.Label>SKU</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        disabled
                                    />
                                </Col>
                                <Col md={1}>
                                    <Form.Label>Partition</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        disabled
                                    />
                                </Col>
                                <Col md={1}>
                                    <Form.Label>Filter</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        disabled
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Label>Serial</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        disabled
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Label>UPC</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        disabled
                                    />
                                </Col>
                                <Col md={1} className='pb-3'>
                                    <Form.Label>Số lượng</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        disabled
                                    />
                                </Col>
                                <Col md={10}>
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        disabled
                                    />
                                </Col>
                                <Col md={2}>
                                    <Form.Label>Số lượng file</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        defaultValue={1}
                                    />
                                </Col>
                            </Row>
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

export default PopUpGtin96_GS1
