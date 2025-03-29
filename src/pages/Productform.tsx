import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  inv: string;
}

function ProductForm() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    inv: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>(''); // explicit put string type

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation: Check if any field is empty
    if (!product.name || !product.price || !product.inv) {
      setErrorMessage('All fields are required!');
      return;
    }

    // Reset error message if everything is filled
    setErrorMessage('');

    // Add form submission logic here
    // Example: Submit the form data to an API or process it further
    console.log('Form submitted:', product);
  };
  

  return (
    <div>
      <h1>Product Detail</h1>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={product.id} />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
          className="form-control mb-4 col-4"
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="form-control mb-4 col-4"
        />

        <input
          type="text"
          name="inv"
          placeholder="Inventory"
          value={product.inv}
          onChange={handleChange}
          className="form-control mb-4 col-4"
        />

        {errorMessage && (
          <div>
            <p className="error-message">{errorMessage}</p>
          </div>
        )}

        <input type="submit" value="Submit" />
      </form>

      <h2>Available Parts</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through available parts and render rows */}
          {/* Example: */}
          {/* {availParts.map((part) => (
            <tr key={part.id}>
              <td>{part.name}</td>
              <td>{part.price}</td>
              <td>{part.inv}</td>
              <td>
                <a href={`/associatepart/${part.id}`} className="btn btn-primary btn-sm mb-3">
                  Add
                </a>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>

      <h2>Associated Parts</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through associated parts and render rows */}
          {/* Example: */}
          {/* {assParts.map((part) => (
            <tr key={part.id}>
              <td>{part.name}</td>
              <td>{part.price}</td>
              <td>{part.inv}</td>
              <td>
                <a href={`/removepart/${part.id}`} className="btn btn-primary btn-sm mb-3">
                  Remove
                </a>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default ProductForm;
