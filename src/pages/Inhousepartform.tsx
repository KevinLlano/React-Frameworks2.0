import React from 'react';

export default function InhousePartForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <div>
      <h1>Inhouse Part Detail</h1>

      {/* Form for saving/updating the Inhouse Part */}
      <form onSubmit={handleSubmit}>
        {/* Part ID field */}
        <div>
          <label htmlFor="partId">Part ID:</label>
          <input type="number" id="partId" name="partId" readOnly />
        </div>

        {/* Name field */}
        <p>
          <input type="text" name="name" placeholder="Name" className="form-control mb-4 col-4" />
          <p className="error">Name Error</p>
        </p>

        {/* Price field */}
        <p>
          <input type="text" name="price" placeholder="Price" className="form-control mb-4 col-4" />
          <p className="error">Price Error</p>
        </p>

        {/* Submit button */}
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>

      {/* Link to Main Screen */}
      <a href="http://localhost:8080/">Link to Main Screen</a>
    </div>
  );
}
