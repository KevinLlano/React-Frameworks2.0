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
    <div className="w-full">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-8 border border-gray-700 text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Outsourced Part Detail</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="id"
            value={outsourcedPart.id}
            onChange={handleChange}
          />

          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-semibold">Part Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={outsourcedPart.name}
              onChange={handleChange}
              placeholder="Part Name"
              className="form-control mb-1 col-4 border border-gray-300 rounded px-2 py-1"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-1 font-semibold">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={outsourcedPart.price}
              onChange={handleChange}
              placeholder="Price"
              className="form-control mb-1 col-4 border border-gray-300 rounded px-2 py-1"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="companyName" className="block mb-1 font-semibold">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={outsourcedPart.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="form-control mb-1 col-4 border border-gray-300 rounded px-2 py-1"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Save Outsourced Part
            </button>
          </div>
        </form>

        <a href="http://localhost:5173" className="block mt-6 text-blue-600 hover:underline">
          Link to Main Screen
        </a>
      </div>
    </div>
  );
};

export default OutsourcedPartForm;