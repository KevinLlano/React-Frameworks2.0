import React, { useState } from 'react';

export default function OutsourcedPartForm() {
  const [outsourcedPart, setOutsourcedPart] = useState({
    id: '',
    companyName: '',
    name: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOutsourcedPart((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to API or handle it as needed)
    console.log(outsourcedPart);
  };

  return (
    <div className="outsourced-part-form">
      <h1>Outsourced Part Detail</h1>
      <form onSubmit={handleSubmit}>
        {/* Hidden ID Field */}
        <input
          type="hidden"
          name="id"
          value={outsourcedPart.id}
          onChange={handleChange}
        />
        
        {/* Part Name */}
        <div>
          <label htmlFor="name">Part Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={outsourcedPart.name}
            onChange={handleChange}
            placeholder="Part Name"
            required
          />
        </div>

        {/* Part Price */}
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={outsourcedPart.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={outsourcedPart.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="form-control mb-4 col-4"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Save Outsourced Part</button>
      </form>

      {/* Link to Main Screen */}
      <a href="http://localhost:8080/">Link to Main Screen</a>
    </div>
  );
}
