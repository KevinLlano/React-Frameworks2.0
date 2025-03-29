import React, { useEffect } from 'react';

export default function ConfirmationAddProduct() {
  useEffect(() => {
    // Redirect to /mainscreen after the component renders
    window.location.href = '/mainscreen';
  }, []);

  return (
    <div>
      <h1>Your product has been added or updated</h1>
      <a href="http://localhost:8080/">Link to Main Screen</a>
    </div>
  );
}
