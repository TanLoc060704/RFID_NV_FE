import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import PopUpGtin96_GS1 from './PopUp/PopUpGtin96_GS1';
import PopUpSerialization from './PopUp/PopUpSerialization';
import PopUpHexadecimalConvert from './PopUp/PopUpHexadecimalConvert'


const Createdata = () => {

  const [showGtin96, setShowGtin96] = useState(false);
  const [showHexadecimal, setShowHexadecimal] = useState(false);
  const [showSerialization, setShowSerialization] = useState(false);

  const [data, setData] = useState([
    {
      maLenh: '0347-09',
      po: '123',
      total: '10000',
      nguoiTao: 'Nguyễn Tấn Lộc',
      khachHang: 'GESIN',
      ngayTao: '1/10/2024',
      loaiData: 'Gtin96 - GS1'
    },
    {
      maLenh: '0348-10',
      po: '124',
      total: '20000',
      nguoiTao: 'Trần Văn A',
      khachHang: 'Đạm Cà Mau',
      ngayTao: '2/10/2024',
      loaiData: 'HexadecimalConvert'
    },
    {
      maLenh: '0339-11',
      po: '125',
      total: '15000',
      nguoiTao: 'Nguyễn Tấn Lộc',
      khachHang: 'Blue Horizon',
      ngayTao: '3/10/2024',
      loaiData: 'Serialization'
    } 
  ]);

  const handleShow = (loaiData) => {
    switch (loaiData) {
      case 'Gtin96 - GS1':
        setShowGtin96(!showGtin96);
        break;
      case 'HexadecimalConvert':
        setShowHexadecimal(!showHexadecimal);
        break;
      case 'Serialization':
        setShowSerialization(!showSerialization);
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setShowGtin96(false);
    setShowHexadecimal(false);
    setShowSerialization(false);
  };



  return (
    <div className='container ps-0' >
      <div className='pb-3'>
        <h3 className='text-center pt-3 pb-1'>Create Data</h3>
      </div>

      <div id='div_tong'>
        <Row className='pb-4'>
          <Col md={6} style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button style={{ width: 150 }} className='me-3' variant='outline-info'>
              <i class="fa-solid fa-magnifying-glass"></i> Tìm Kiếm</Button>
            <Form.Control style={{ width: '100%' }} placeholder='Tìm kiếm theo Mã Lệnh'></Form.Control>
          </Col>
          <Col md={2}>
            <Form.Select aria-label="Default select example">
              <option>Loại</option>
              <option value="1">Gtin96 - GS1</option>
              <option value="2">Serialization</option>
              <option value="3">HexadecimalConvert</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select aria-label="Default select example">
              <option>Khách hàng</option>
              <option value="1">GESIN</option>
              <option value="2">Đạm Cà Mau</option>
              <option value="3">Blue Horizon</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select aria-label="Default select example">
              <option>dd/mm/yyy</option>
              <option value="1">Cao Đến Thấp</option>
              <option value="2">Thấp Đến Cao</option>
            </Form.Select>
          </Col>
        </Row>
        <Row style={{ minHeight: 500 }}>
          {data.map((item, index) => (
            <Col key={index} md={3}>
              <Card className="shadow-lg mb-4" style={{ width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
                <Card.Body className="p-3">
                  <Card.Title className="text-dark font-weight-bold">Mã Lệnh: {item.maLenh}</Card.Title>
                  <Card.Text className="text-muted mb-1">
                    <strong>PO:</strong> {item.po}
                  </Card.Text>
                  <Card.Text className="text-muted mb-1">
                    <strong>Total:</strong> {item.total}
                  </Card.Text>
                  <Card.Text className="text-muted mb-1">
                    <strong>Người Tạo:</strong> {item.nguoiTao}
                  </Card.Text>
                  <Card.Text className="text-muted mb-1">
                    <strong>Khách Hàng:</strong> {item.khachHang}
                  </Card.Text>
                  <Card.Text className="text-muted mb-1">
                    <strong>Ngày Tạo:</strong> {item.ngayTao}
                  </Card.Text>
                  <Card.Text className="text-muted mb-3">
                    <strong>Loại Data:</strong> {item.loaiData}
                  </Card.Text>
                  <Button variant="outline-secondary" className="w-100" onClick={() => handleShow(item.loaiData)}>
                    Xem chi tiết
                  </Button>
                
                </Card.Body>
              </Card>
            </Col>
          ))}
          {showGtin96 && <PopUpGtin96_GS1 handleShow={showGtin96} handleClose={handleClose} />}
          {showHexadecimal && <PopUpHexadecimalConvert handleShow={showHexadecimal} handleClose={handleClose} />}
          {showSerialization && <PopUpSerialization handleShow={showSerialization} handleClose={handleClose} />}
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

export default Createdata
