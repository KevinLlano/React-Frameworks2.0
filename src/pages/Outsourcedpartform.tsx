import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface OutsourcedPart {
  id: string;
  companyName: string;
  name: string;
  price: string;
  inv: string;
}

const OutsourcedPartForm: React.FC = () => {
  const navigate = useNavigate();
  const [outsourcedPart, setOutsourcedPart] = useState<OutsourcedPart>({
    id: '',
    companyName: '',
    name: '',
    price: '',
    inv: ''
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
    const newPart = {
      ...outsourcedPart,
      id: outsourcedPart.id || Date.now().toString(),
      partType: 'Outsourced',
    };
    const storedParts = localStorage.getItem('parts');
    const partsArray = storedParts ? JSON.parse(storedParts) : [];
    const updatedParts = [...partsArray, newPart];
    localStorage.setItem('parts', JSON.stringify(updatedParts));
    navigate("/");
  };

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-8 text-center ">
        <div className="flex flex-col items-center">
          <button 
            onClick={() => navigate("/")}
            className="text-blue-500 underline mb-4"
          >
            &larr; Return to Main Screen
          </button>
          <h1 className="text-2xl font-bold mb-4 text-blue-600">Outsourced Part Detail</h1>
          <form onSubmit={handleSubmit} className="w-80">
            <input
              type="hidden"
              name="id"
              value={outsourcedPart.id}
              onChange={handleChange}
            />
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                value={outsourcedPart.name}
                onChange={handleChange}
                placeholder="Part Name"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="price"
                name="price"
                value={outsourcedPart.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="inv"
                name="inv"
                value={outsourcedPart.inv}
                onChange={handleChange}
                placeholder="Inventory"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={outsourcedPart.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OutsourcedPartForm;