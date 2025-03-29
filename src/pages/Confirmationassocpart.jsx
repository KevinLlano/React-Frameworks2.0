import React, { useEffect } from 'react';

export default function ConfirmationAssocPart() {
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
