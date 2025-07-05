import React, { FormEvent } from 'react';

const InhousePartForm: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-8 border border-gray-700 text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Inhouse Part Detail</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="partId" className="block mb-1 font-semibold">Part ID:</label>
            <input type="number" id="partId" name="partId" readOnly className="form-control mb-2 col-4 border border-gray-300 rounded px-2 py-1" />
          </div>

          <div className="mb-4">
            <input type="text" name="name" placeholder="Name" className="form-control mb-1 col-4 border border-gray-300 rounded px-2 py-1" />
            <p className="error text-red-600 text-sm">Name is required</p>
          </div>

          <div className="mb-4">
            <input type="text" name="price" placeholder="Price" className="form-control mb-1 col-4 border border-gray-300 rounded px-2 py-1" />
            <p className="error text-red-600 text-sm">Price is required</p>
          </div>

          <div>
            <input type="submit" value="Submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer" />
          </div>
        </form>

        <a href="http://localhost:5173/" className="block mt-6 text-blue-600 hover:underline">Link to Main Screen</a>
      </div>
    </div>
  );
}

export default InhousePartForm;