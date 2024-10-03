import { useState, useEffect } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import XuLyDuLieu from './pages/XuLyDuLieu';
import DangNhap from './pages/DangNhap';
import Footer from './components/Footer';
import SidebarMenu from './components/SidebarMenu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateOrders from './pages/ProductionManagement/CreateOrders';
import OrderLog from './pages/ProductionManagement/OrderLog';
import SKUManagement from './pages/ProductionManagement/SKUManagement';
import Gtin96_GS1 from './pages/CreateData/Gtin96_GS1';
import AddRecord from './pages/CreateData/AddRecord';
import HexadecimalConvert from './pages/CreateData/HexadecimalConvert';
import HistoryData from './pages/CreateData/HistoryData';
import Serialization from './pages/CreateData/Serialization';
import CheckEPC from './pages/QC/CheckEPC';
import CheckList from './pages/Packing/CheckList';
import PackingList from './pages/Packing/PackingList';
import Createdata from './pages/CreateData/Createdata';



function App() {
 
  return (
    <div className="container-fluid p-0">
      <Router>
        <div>
          <Header />
          <div style={{ minHeight: 570}}>
            <Row className='ms-0, me-0'>
              <Col xs={3}>
                <SidebarMenu/>
              </Col>
              <Col xs={9}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<DangNhap />} />

                  <Route path="/CreateOrders" element={<CreateOrders/>}/>
                  <Route path="/SKUManagement" element={<SKUManagement/>}/>
                  <Route path="/OrderLog" element={<OrderLog/>}/>


                  <Route path="/Gtin96_GS1" element={<Gtin96_GS1/>}/>
                  <Route path="/Serialization" element={<Serialization/>}/>
                  <Route path="/AddRecord" element={<AddRecord/>}/>
                  <Route path="/HexadecimalConvert" element={<HexadecimalConvert/>}/>
                  <Route path="/HistoryData" element={<HistoryData/>}/>
                  <Route path="/CreateData" element={<Createdata/>}/>

                  <Route path="/CheckEPC" element={<CheckEPC/>}/>

                  <Route path="/CheckList" element={<CheckList/>}/>
                  <Route path="/PackingList" element={<PackingList/>}/>
                </Routes>
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
