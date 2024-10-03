import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OrdersTable from '../../components/OrdersTable';

const SKUManagement = () => {

  const [key, setKey] = useState('Create SKU');

  const data = [
    { id: 1, sku: 'SKU001', upc: '1234567890', content: 'Product 1', soLuong: 10 },
    { id: 2, sku: 'SKU002', upc: '0987654321', content: 'Product 2', soLuong: 5 },
    { id: 3, sku: 'SKU003', upc: '1122334455', content: 'Product 3', soLuong: 8 },
    { id: 4, sku: 'SKU003', upc: '1122334455', content: 'Product 3', soLuong: 8 },
    { id: 1, sku: 'SKU001', upc: '1234567890', content: 'Product 1', soLuong: 10 },
    { id: 2, sku: 'SKU002', upc: '0987654321', content: 'Product 2', soLuong: 5 },
    { id: 3, sku: 'SKU003', upc: '1122334455', content: 'Product 3', soLuong: 8 },
    { id: 4, sku: 'SKU003', upc: '1122334455', content: 'Product 3', soLuong: 8 },
    { id: 1, sku: 'SKU001', upc: '1234567890', content: 'Product 1', soLuong: 10 },
    { id: 2, sku: 'SKU002', upc: '0987654321', content: 'Product 2', soLuong: 5 },
    { id: 3, sku: 'SKU003', upc: '1122334455', content: 'Product 3', soLuong: 8 },
    { id: 4, sku: 'SKU003', upc: '1122334455', content: 'Product 3', soLuong: 8 },
    { id: 1, sku: 'SKU001', upc: '1234567890', content: 'Product 1', soLuong: 10 },
    { id: 2, sku: 'SKU002', upc: '0987654321', content: 'Product 2', soLuong: 5 },
    { id: 3, sku: 'SKU003', upc: '1122334455', content: 'Product 3', soLuong: 8 },
    { id: 4, sku: 'SKU003', upc: '1122334455', content: 'Product 3', soLuong: 8 }
  ];

  const headerOrder = ['STT', 'SKU', 'Mã sản phẩm', "Partition","Filter","Serial","Upc","Head","Content"];


  return (
    <div className='container ps-0'>
      <div>
        <h3 className='text-center pt-3 pb-3'>SKU Management</h3>
      </div>
      {/* Khai báo SKU */}

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-4"
      >
        <Tab eventKey="Create SKU" title="Create SKU">
          <div id='div_tong'>
            <div style={{ position: 'relative', border: '3px solid #9C9C9C', borderRadius: 10, padding: 20 }}>
              <span style={{
                position: 'absolute',
                top: '-20px',
                left: '20px',
                backgroundColor: 'white',
                padding: '0 10px'
              }}>
                Thông tin SKU
              </span>
              <Row className="mb-3">
                <Col md={3}>
                  <Form.Label>SKU</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                  />
                </Col>
                <Col md={3}>
                  <Form.Label>Mã sản phẩm</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="" disabled selected hidden>Chọn mã sản phẩm</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col md={6}>
                  <Form.Label>Khách Hàng</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="" disabled selected hidden>Chọn Khách Hàng</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
            </div>


            {/* Nội dung in */}
            <div style={{ position: 'relative', border: '3px solid #9C9C9C', borderRadius: 10, padding: 20, marginTop: 40 }}>
              <span style={{
                position: 'absolute',
                top: '-20px',
                left: '20px',
                backgroundColor: 'white',
                padding: '0 10px'
              }}>
                Nội dung IN
              </span>
              <Row className="mb-3">
                <Col md={2}>
                  <Form.Label>Partition</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="0-6"
                  />
                </Col>
                <Col md={2}>
                  <Form.Label>Filter</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="0-7"
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>UPC/EAN 13</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>EPC HEAD</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                  />
                </Col>
                <Col md={12} className='pt-3'>
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="nội dung in cách nhau bởi dấu '|'"
                  />
                </Col>
              </Row>
            </div>

            <Row style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 40 }}>
              <Col md={4} style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <Button variant="outline-danger">Xóa</Button>
                <Button variant="outline-warning">Clear</Button>
                <Button variant="outline-primary">Sửa</Button>
                <Button variant="outline-success">Tạo Đơn Hàng</Button>
              </Col>
            </Row>
          </div>
        </Tab>
        <Tab eventKey="All SKU" title="All SKU">
          <Row className='pb-4'>
            <Col md={6} style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button className='me-3' variant='outline-info'><i class="fa-solid fa-magnifying-glass"></i> Tìm Kiếm</Button>
              <Form.Control style={{ maxWidth: 400 }} placeholder='Tìm kiếm SKU'></Form.Control>
            </Col>

          </Row>
          <OrdersTable data={data} header={headerOrder} maxHeight={400} />
        </Tab>
      </Tabs>

    </div>
  )
}

export default SKUManagement
