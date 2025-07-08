import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: string;
  inv: string;
}

function ProductForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    price: '',
    inv: ''
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (id) {
      // Editing: load product from localStorage by id
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        const products = JSON.parse(storedProducts);
        const productToEdit = products.find((p: any) => String(p.id) === id);
        if (productToEdit) {
          setProduct(productToEdit);
        }
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
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-8 ">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow border border-gray-300">
        
        <button 
          onClick={() => navigate("/")}
          className="block mb-6 text-blue-600 hover:underline text-center"
        >
          Back to Main Screen
        </button>
        <h1 className="text-2xl font-bold mb-6 text-blue-600 text-center">Product Detail</h1>
        
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {errorMessage}
          </div>
        )}
        
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;