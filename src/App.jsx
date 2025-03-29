import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ConfirmationAddPart from './pages/Confirmationaddpart';
import ConfirmationAssocPart from './pages/Confirmationassocpart';
import ConfirmationBuyProduct from './pages/Confirmationbuyproduct';
import ConfirmationDeletePart from './pages/Confirmationdeletepart';
import ConfirmationDeleteProduct from './pages/Confirmationdeleteproduct';
import ErrorBuyProduct from './pages/Errorbuyproduct';
import InhousePartForm from './pages/Inhousepartform';
import Mainscreen from './pages/Mainscreen';
import NegativeError from './pages/Negativeerror';
import OutsourcedPartForm from './pages/Outsourcedpartform';
import PartForm from './pages/Patform';
import ProductForm from './pages/Productform';
import SaveProductScreen from './pages/Savedproductscreen';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/mainscreen')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching data:', error)); // Handle fetch errors
  }, []);

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Mainscreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/confirmationaddpart" element={<ConfirmationAddPart />} />
        <Route path="/confirmationassocpart" element={<ConfirmationAssocPart />} />
        <Route path="/confirmationbuyproduct" element={<ConfirmationBuyProduct />} />
        <Route path="/confirmationdeletepart" element={<ConfirmationDeletePart />} />
        <Route path="/confirmationdeleteproduct" element={<ConfirmationDeleteProduct />} />
        <Route path="/purchasefailure" element={<ErrorBuyProduct />} />
        <Route path="/inhousepartform" element={<InhousePartForm />} />
        <Route path="/mainscreen" element={<Mainscreen />} />
        <Route path="/showFormAddInPart" element={<InhousePartForm />} />
        <Route path="/errorBuyProduct" element={<ErrorBuyProduct />} />

        <Route path="/negativeerror" element={<NegativeError />} />
        <Route path="/showFormAddOutPart" element={<OutsourcedPartForm />} />
        <Route path="/partform" element={<PartForm />} />
        <Route path="/showFormAddProduct" element={<ProductForm />} />
        <Route path="/saveproductscreen" element={<SaveProductScreen />} />
        {/* Add more routes here as needed */}
      </Routes>
    </div>
  );
}

export default App;
