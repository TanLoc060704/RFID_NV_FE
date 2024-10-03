import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


const OrdersTable = ({ data, header, maxHeight }) => {
  return (
    <div className="table-responsive" style={{ maxHeight: maxHeight, overflowY: 'auto', paddingLeft: 0 }}>
      <Table striped bordered hover>
        <thead style={{ position: 'sticky', top: -1, backgroundColor: 'white', zIndex: 1 }}>
          <tr>
            {header.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.sku}</td>
              <td>{item.upc}</td>
              <td>{item.content}</td>
              <td>{item.soLuong}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrdersTable;
