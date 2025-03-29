import React, { FC } from 'react';

const NegativeError: FC = () => {
  return (
    <div className="negative-error">
      <p>Cannot delete a part used in a product</p>
      <a href="http://localhost:8080/">Link to Main Screen</a>
    </div>
  );
};

export default NegativeError;
