import React, { useEffect } from 'react';

const ConfirmationBuyProduct: React.FC = () => {
  useEffect(() => {
    // Redirect to /mainscreen after component renders
    window.location.href = '/mainscreen';
  }, []);

  return (
    <div>
      <h1>Purchase Successful</h1>
      <p>Your product has been successfully purchased.</p>
      {/* Optional link in case user wants to go manually */}
      <a href="http://localhost:8080/">Link to Main Screen</a>
    </div>
  );
}

export default ConfirmationBuyProduct;
// This component is responsible for confirming the purchase of a product.
// It uses the useEffect hook to redirect the user to the main screen after the component mounts.
