import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; 

interface Product {
  id: string;
  name: string;
  price: string;
  inv: string;
}

function ProductForm() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    price: '',
    inv: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (id) {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        const productsArray = JSON.parse(storedProducts);
        const found = productsArray.find((p: Product) => String(p.id) === id);
        if (found) setProduct(found);
      }
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.inv) {
      setErrorMessage('All fields are required!');
      return;
    }

    setErrorMessage('');

    let newProduct = { ...product };
    if (!id) {
      newProduct.id = Date.now().toString();
    }
    let productsArray = JSON.parse(localStorage.getItem('products') || '[]');
    if (id) {
      // Update existing product
      productsArray = productsArray.map((p: Product) => (String(p.id) === id ? newProduct : p));
    } else {
      // Add new product
      productsArray.push(newProduct);
    }
    localStorage.setItem('products', JSON.stringify(productsArray));
    window.location.href = "/";
  };

  {/* redirect/navigation to mainscreen */}
        <Link to="/" className="block mt-4 mb-8 text-blue-600 hover:underline text-center">
          Back to Main Screen
        </Link>
  
  return (
    <div className="w-full min-h-screen bg-gray-50 py-8 ">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow border border-gray-300">
        
        <Link to="/" className="block mb-6 text-blue-600 hover:underline text-center">
          Back to Main Screen
        </Link>
        <h1 className="text-2xl font-bold mb-6 text-blue-600 text-center">Product Detail</h1>
        <form onSubmit={handleSubmit} className="w-80 mx-auto flex flex-col items-center mb-8">
          <input type="hidden" name="id" value={product.id} />

          <div className="mb-4 text-left">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={product.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4 text-left">
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              value={product.price}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4 text-left">
            <input
              type="text"
              name="inv"
              id="inv"
              placeholder="Inventory"
              value={product.inv}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {errorMessage && (
            <div className="mb-4">
              <p className="text-red-600 text-sm">{errorMessage}</p>
            </div>
          )}

          <div className="text-center">
            <input
              type="submit"
              value="Submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
            />
          </div>
        </form>

        <h2 className="text-xl font-semibold mb-2 text-gray-700">Available Parts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full table-auto border border-gray-300 rounded">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Inventory</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through available parts and render rows */}
              {/* Example: */}
              {/* {availParts.map((part) => (
                <tr key={part.id}>
                  <td className="px-4 py-2">{part.name}</td>
                  <td className="px-4 py-2">{part.price}</td>
                  <td className="px-4 py-2">{part.inv}</td>
                  <td className="px-4 py-2">
                    <a href={`/associatepart/${part.id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
                      Add
                    </a>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-700">Associated Parts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 rounded">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Inventory</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through associated parts and render rows */}
              {/* Example: */}
              {/* {assParts.map((part) => (
                <tr key={part.id}>
                  <td className="px-4 py-2">{part.name}</td>
                  <td className="px-4 py-2">{part.price}</td>
                  <td className="px-4 py-2">{part.inv}</td>
                  <td className="px-4 py-2">
                    <a href={`/removepart/${part.id}`} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">
                      Remove
                    </a>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;