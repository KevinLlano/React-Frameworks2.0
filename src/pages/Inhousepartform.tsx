import React, { FormEvent } from 'react';

const InhousePartForm: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <h1>Inhouse Part Detail</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="partId">Part ID:</label>
          <input type="number" id="partId" name="partId" readOnly />
        </div>

        <p>
          <input type="text" name="name" placeholder="Name" className="form-control mb-4 col-4" />
          <p className="error">Name Error</p>
        </p>

        <p>
          <input type="text" name="price" placeholder="Price" className="form-control mb-4 col-4" />
          <p className="error">Price Error</p>
        </p>

        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>

      <a href="http://localhost:8080/">Link to Main Screen</a>
    </div>
  );
}

export default InhousePartForm;
