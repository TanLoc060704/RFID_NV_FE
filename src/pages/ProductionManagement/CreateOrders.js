import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import OrdersTable from '../../components/OrdersTable';
import SKUModel from '../../components/SKUModel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const CreateOrders = () => {
  //xu ly tab begin
  const [key, setKey] = useState('Create Orders');
  //xu ly tab end

  //xy ly tao table begin 
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
  const header = ['STT', 'SKU', 'Tên File', 'Tag Name', 'Số lượng'];
  const headerOrder = ['STT', 'Đơn Hàng ID', 'Mã Lệnh', 'PO', 'Totail', 'Nhân Viên', "Khách Hàng", "Ngày Tạo", "Ngày Chỉnh Sửa"];
  //xy ly tao table end

 

  //xy ly chon file begin
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  //xy ly chon file end

  return (
    <div className='container ps-0' >
      <div>
        <h3 className='text-center pt-3 pb-3'>Orders</h3>
      </div>

      <div id='div_tong'>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="Create Orders" title="Create Orders" >
            <div id='div_create_orders'>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Label>Mã Lệnh</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="DDH..."
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>PO</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="PO#"
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>Tổng Số Lượng</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="...pcs"
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Label>Mã Sản Phẩm</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="" disabled selected hidden>Chọn mã sản phẩm</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col md={8}>
                  <Form.Label>Khách Hàng</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="" disabled selected hidden>Chọn mã khách hàng</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={4}>
                  <Form.Label>SKU Nam Việt</Form.Label>
                  <Form.Group aria-label="Default select example">
                    <Button variant="outline-secondary" onClick={handleShow} onChange={handleFileChange}
                      disabled={!(selectedOption === 'Gtin96_GS1' || selectedOption === 'Serialization')}>Chọn SKU</Button>
                  </Form.Group>
                  {show && <SKUModel handleShow={handleShow} />}
                </Col>
                <Col md={3}>
                  <Form.Label>Kiểu dữ liệu</Form.Label>
                  <Form.Select aria-label="Default select example" onChange={(e) => handleSelectChange(e)}>
                    <option value="" disabled selected hidden>Chọn Kiểu dữ liệu</option>
                    <option value="Gtin96_GS1">Gtin96_GS1</option>
                    <option value="Serialization">Serialization</option>
                    <option value="HexadecimalConvert">HexadecimalConvert</option>
                    <option value="ImportFile">Import File</option>
                  </Form.Select>
                </Col>
                <Col md={4}>
                  <Form.Label>Insert Data</Form.Label>
                  <Form.Label htmlFor="fileInput" className="d-none">Chọn tệp tin</Form.Label>
                  <Form.Control
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    disabled={!(selectedOption === 'ImportFile' || selectedOption === 'HexadecimalConvert')}
                  />
                </Col>
              </Row>

              <Row className="mb-3" style={{ paddingLeft: 12, paddingRight: 12 }}>
                <h4>Details</h4>
                <OrdersTable data={data} header={header} maxHeight={200} />
              </Row>

              <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Col md={8} style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                  <Button variant="outline-danger">Xóa</Button>
                  <Button variant="outline-warning">Clear</Button>
                  <Button variant="outline-primary">Sửa</Button>
                  <Button variant="outline-success">Tạo Đơn Hàng</Button>
                </Col>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="All Orders" title="All Orders">
            <Row className='pb-4'>
              <Col md={6} style={{display: 'flex' , justifyContent: 'flex-start'}}>
                <Button className='me-3' variant='outline-info'><i class="fa-solid fa-magnifying-glass"></i> Tìm Kiếm</Button>
                <Form.Control style={{maxWidth: 400}} placeholder='Tìm kiếm theo Mã Lệnh'></Form.Control>
              </Col>
              
            </Row>
            <OrdersTable data={data} header={headerOrder} maxHeight={400} />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default CreateOrders
