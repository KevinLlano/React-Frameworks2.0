import React, { useEffect } from 'react';

const ConfirmationDeletePart: React.FC = () => {
  useEffect(() => {
    // Redirect to /mainscreen after component renders
    window.location.href = '/mainscreen';
  }, []);

  return (
    <div>
      <h1>Your part has been deleted</h1>
      <a href="http://localhost:8080/">Link to Main Screen</a>
    </div>
  );
}

export default ConfirmationDeletePart;
// This component will redirect to the main screen after a part is deleted.
// It uses the useEffect hook to perform the redirection when the component mounts.