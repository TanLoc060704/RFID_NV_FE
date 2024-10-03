import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <Col className="bg-light" style={{ minHeight: 570 }} >
      <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Production management</Accordion.Header>
          <Accordion.Body className='p-1'>
            <ListGroup className='border-0'>
              <ListGroup.Item as={Link} to="/CreateOrders" className="border-0 list-group-item-action">Create Orders</ListGroup.Item>
              <ListGroup.Item as={Link} to="/SKUManagement" className="border-0 list-group-item-action">SKU Management</ListGroup.Item>
              <ListGroup.Item as={Link} to="/OrderLog" className="border-0 list-group-item-action">Order Log</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Create data</Accordion.Header>
          <Accordion.Body className='p-1'>
            <ListGroup className='border-0'>
              <ListGroup.Item as={Link} to="/CreateData" className="border-0 list-group-item-action">Create Data</ListGroup.Item>
              <ListGroup.Item as={Link} to="/Gtin96_GS1" className="border-0 list-group-item-action">Gtin 96 - GS1</ListGroup.Item>
              <ListGroup.Item as={Link} to="/Serialization" className="border-0 list-group-item-action">Serialization</ListGroup.Item>
              <ListGroup.Item as={Link} to="/HexadecimalConvert" className="border-0 list-group-item-action">Hexadecimal Convert</ListGroup.Item>
              <ListGroup.Item as={Link} to="/HistoryData" className="border-0 list-group-item-action">History Data</ListGroup.Item>
              <ListGroup.Item as={Link} to="/AddRecord" className="border-0 list-group-item-action">Add Record</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Quality Control (QC)</Accordion.Header>
          <Accordion.Body className='p-1'>
            <ListGroup className='border-0'>
              <ListGroup.Item as={Link} to="/CheckEPC" className="border-0 list-group-item-action">Check EPC</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Packing</Accordion.Header>
          <Accordion.Body className='p-1'>
            <ListGroup className='border-0'>
              <ListGroup.Item as={Link} to="/CheckList" className="border-0 list-group-item-action">Check list</ListGroup.Item>
              <ListGroup.Item as={Link} to="/PackingList" className="border-0 list-group-item-action">Packing data</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
}

export default SidebarMenu;
