import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';

const SKUModel = ({ handleShow }) => {
    return (
        <>
            <Modal show={handleShow} onHide={handleShow} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>PO details</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Row>
                        <Col md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                            <Card style={{ width: '18rem' }} >
                                <Card.Body>
                                    <Card.Title>S-GES-D01</Card.Title>
                                    <Card.Text>
                                        UPC:1029337345989
                                    </Card.Text>
                                    <Card.Text>
                                        Conten: 1 con vit de ra 3 con ngong
                                    </Card.Text>
                                    <Form.Control
                                        type="number"
                                        id="qty"
                                        placeholder="Số lượng"
                                        style={{marginBottom:15}}
                                    />
                                    <Button variant="secondary">Add</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SKUModel
