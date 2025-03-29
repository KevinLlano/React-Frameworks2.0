import React, { useEffect } from 'react';

export default function ConfirmationBuyProduct() {
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
