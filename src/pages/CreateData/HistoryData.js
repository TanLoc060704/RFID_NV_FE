import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import PopUpHistoryData from './PopUp/PopUpHistoryData';

const HistoryData = () => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const handleClose = () => setShow(false);

  return (
    <div className='container ps-0' >
      <div className='pb-3'>
        <h3 className='text-center pt-3 pb-1'>Hexadecimal Convert</h3>
      </div>

      <div id='div_tong'>
        <Row className='pb-4'>
          <Col md={6} style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button style={{ width: 150 }} className='me-3' variant='outline-info'>
              <i class="fa-solid fa-magnifying-glass"></i> Tìm Kiếm</Button>
            <Form.Control style={{ width: '100%' }} placeholder='Tìm kiếm theo Mã Lệnh'></Form.Control>
          </Col>
          <Col md={3}>
            <Form.Select aria-label="Default select example">
              <option>Khách hàng</option>
              <option value="1">GESIN</option>
              <option value="2">Đạm Cà Mau</option>
              <option value="3">Blue Horizon</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select aria-label="Default select example">
              <option>Ngày/Tháng/Năm</option>
              <option value="1">Cao Đến Thấp</option>
              <option value="2">Thấp Đến Cao</option>
            </Form.Select>
          </Col>
        </Row>
        <Row style={{ minHeight: 500 }}>
          <Col md={3}>
            <Card className="shadow-lg mb-4" style={{ width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
              <Card.Body className="p-3">
                <Card.Title className="text-dark font-weight-bold">Mã Lệnh: 0347-09</Card.Title>
                <Card.Text className="text-muted mb-1">
                  <strong>PO:</strong> 123
                </Card.Text>
                <Card.Text className="text-muted mb-1">
                  <strong>Total:</strong> 10000
                </Card.Text>
                <Card.Text className="text-muted mb-1">
                  <strong>Người Tạo:</strong> Nguyễn Tấn Lộc
                </Card.Text>
                <Card.Text className="text-muted mb-1">
                  <strong>Khách Hàng:</strong> GESIN
                </Card.Text>
                <Card.Text className="text-muted mb-1">
                  <strong>Ngày Tạo:</strong> 1/10/2024
                </Card.Text>
                <Card.Text className="text-muted mb-3">
                  <strong>Loại Data:</strong> Serialization
                </Card.Text>
                <Button variant="outline-secondary" className="w-100" onClick={handleShow}>Xem chi tiết</Button>
                {show && <PopUpHistoryData handleShow={handleShow} handleClose={handleClose} />}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row >
          <nav aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center' }}>
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link text-dark" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
              <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
              <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link text-dark" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </Row>
      </div>
    </div>
  )
}

export default HistoryData
