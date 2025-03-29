import React, { useState, ChangeEvent, FormEvent } from 'react';

interface OutsourcedPart {
  id: string;
  companyName: string;
  name: string;
  price: string;
}

const OutsourcedPartForm: React.FC = () => {
  const [outsourcedPart, setOutsourcedPart] = useState<OutsourcedPart>({
    id: '',
    companyName: '',
    name: '',
    price: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setOutsourcedPart((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    console.log(outsourcedPart);
  };

  return (
    <div className="outsourced-part-form">
      <h1>Outsourced Part Detail</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="id"
          value={outsourcedPart.id}
          onChange={handleChange}
        />
        
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

        <button type="submit">Save Outsourced Part</button>
      </form>

      <a href="http://localhost:8080/">Link to Main Screen</a>
    </div>
  );
};

export default OutsourcedPartForm;
// This code defines a React functional component for an Outsourced Part Form. It uses TypeScript for type safety and includes state management with hooks. The form captures the part's name, price, and company name, and handles form submission by logging the data to the console. The component also includes a link back to the main screen.

