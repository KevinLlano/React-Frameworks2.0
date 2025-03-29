import React, { useEffect } from 'react';

const ConfirmationAssocPart: React.FC = () => {
  useEffect(() => {
    // Redirect to /mainscreen after component renders
    window.location.href = '/mainscreen';
  }, []);

  return (
    <div>
      <h1>Your part has been successfully added or removed</h1>
      <a href="http://localhost:8080/">Link to Main Screen</a>
    </div>
  );
}

export default ConfirmationAssocPart;
// This component is responsible for confirming the association of a part with a product.
// It uses the useEffect hook to redirect the user to the main screen after the component mounts.
