import React from 'react';

const ErrorBuyProduct: React.FC = () => {
  return (
    <div className="error-buy-product">
      <h1>Purchase has failed</h1>
      <p>There was an error with your purchase.</p>
      <a href="http://localhost:8080/">Return to Main Screen</a>
    </div>
  );
}

export default ErrorBuyProduct;
// This component is responsible for displaying an error message when a purchase fails.
// It provides a link to return to the main screen.
