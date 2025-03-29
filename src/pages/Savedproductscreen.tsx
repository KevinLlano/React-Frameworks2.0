import React from 'react';
import { Link } from 'react-router-dom';

const SaveProductScreen: React.FC = () => {
  return (
    <div>
      <p>Please save product before adding parts!</p>
      <Link to="/">Link to Main Screen</Link>
    </div>
  );
};

export default SaveProductScreen;
