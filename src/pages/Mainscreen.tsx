import React, { FC, useState, useEffect } from "react";
import axios from "axios";

interface Item {
  id: number;
  name: string;
  price: number;
  inv: number;
}

const initialParts: Item[] = [
  { id: 1, name: "Engine V8", price: 2500.0, inv: 5 },
  { id: 2, name: "All-Season Tire", price: 150.0, inv: 20 },
  { id: 3, name: "Brake Pads", price: 75.0, inv: 30 },
  { id: 4, name: "12V Battery", price: 120.0, inv: 15 },
  { id: 5, name: "Spark Plugs", price: 10.0, inv: 100 },
];

const initialProducts: Item[] = [
  { id: 1, name: "Mustang GT", price: 35000.0, inv: 2 },
  { id: 2, name: "Camaro SS", price: 37000.0, inv: 3 },
  { id: 3, name: "Charger R/T", price: 32000.0, inv: 1 },
  { id: 4, name: "Corvette Z06", price: 75000.0, inv: 1 },
  { id: 5, name: "Tesla Model S", price: 80000.0, inv: 2 },
];

const Mainscreen: FC = () => {
  const [parts, setParts] = useState<Item[]>(initialParts);
  const [products, setProducts] = useState<Item[]>(initialProducts);

  useEffect(() => {
    axios.get("/api/parts")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setParts(res.data);
        }
      })
      .catch(console.error);

    axios.get("/api/products")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setProducts(res.data);
        }
      })
      .catch(console.error);
  }, []);

  // Handler functions remain unchanged
  const handleUpdatePart = (id: number) => {
    window.location.href = `/showPartFormForUpdate/${id}`;
  };

  const handleDeletePart = async (id: number) => {
    await axios.delete(`/deletepart/${id}`);
    setParts(parts.filter((part) => part.id !== id));
  };

  const handleBuyProduct = async (id: number) => {
    await axios.post(`/buyProduct/${id}`);
    alert("Product purchased!");
  };

  const handleUpdateProduct = (id: number) => {
    window.location.href = `/showProductFormForUpdate/${id}`;
  };

  const handleDeleteProduct = async (id: number) => {
    await axios.delete(`/deleteproduct/${id}`);
    setProducts(products.filter((product) => product.id !== id));
  };

  // Full JSX implementation
  return (
    <div className="container">
      <h1>Car Supply Shop</h1>

      <h2>Car Parts</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part.id}>
              <td>{part.name}</td>
              <td>${part.price.toFixed(2)}</td>
              <td>{part.inv}</td>
              <td>
                <button onClick={() => handleUpdatePart(part.id)}>Update</button>
                <button onClick={() => handleDeletePart(part.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Car Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.inv}</td>
              <td>
                <button onClick={() => handleBuyProduct(product.id)}>Buy Now</button>
                <button onClick={() => handleUpdateProduct(product.id)}>Update</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mainscreen;