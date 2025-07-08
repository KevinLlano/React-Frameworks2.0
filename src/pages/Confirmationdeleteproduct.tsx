import React, { useEffect } from 'react';

const ConfirmationDeleteProduct: React.FC = () => {
  useEffect(() => {
    window.location.href = '/mainscreen';
  }, []);

  return (
    <div>
      <h1>Your product has been deleted</h1>
      <a href="http://localhost:8080/">Link to Main Screen</a>
    </div>
  );
}

export default ConfirmationDeleteProduct;
