import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DangNhap = ({ handleShow }) => {
    return (
        <>
            <Modal show={handleShow} onHide={handleShow} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    style={{ color: 'gray' }}
                                    label="Remember me"
                                />
                            </Form>

                        </Form.Group>

                        <Button variant="secondary" type="button">
                            Sign in
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default DangNhap;
