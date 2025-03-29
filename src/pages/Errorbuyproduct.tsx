import React from 'react';

export default function ErrorBuyProduct() {
  return (
    <div className="error-buy-product">
      <h1>Purchase has failed</h1>
      <p>There was an error with your purchase.</p>
      <a href="http://localhost:8080/">Return to Main Screen</a>
    </div>
  );
}
