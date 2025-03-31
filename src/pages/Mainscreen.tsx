import React, { FC, useState, useEffect } from "react";
import axios from "axios";

interface Item {
  id: number;
  name: string;
  price: number;
  inv: number;
  companyName?: string;  // Added for outsourced parts
  partType?: string;     // Added for inhouse/outsourced distinction
}

const initialParts: Item[] = [
  { id: 1, name: "Engine V8", price: 2500.0, inv: 5, partType: 'InHouse' },
  { id: 2, name: "All-Season Tire", price: 150.0, inv: 20, partType: 'Outsourced', companyName: "Goodyear" },
  { id: 3, name: "Brake Pads", price: 75.0, inv: 30, partType: 'InHouse' },
  { id: 4, name: "12V Battery", price: 120.0, inv: 15, partType: 'Outsourced', companyName: "ACDelco" },
  { id: 5, name: "Spark Plugs", price: 10.0, inv: 100, partType: 'InHouse' },
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
  const [partKeyword, setPartKeyword] = useState("");
  const [productKeyword, setProductKeyword] = useState("");

  // Keep all your original useEffect and handlers exactly as they were
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

  // New search clear function
  const clearSearch = () => {
    setPartKeyword("");
    setProductKeyword("");
    // Add any additional search reset logic here
  };

  return (
    <div className="container">
      {/* Added Navigation */}
      <nav className="mb-4">
        <a href="/about" className="btn btn-outline-primary">About Us</a>
      </nav>

      <h1>Car Supply Shop</h1>
      <hr />

      {/* Car Parts Section - Added Search and Add Buttons */}
      <h2>Car Parts</h2>
      <form className="mb-4">
        <div className="row g-3">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Filter parts..."
              value={partKeyword}
              onChange={(e) => setPartKeyword(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-primary me-2">Search</button>
            <button type="button" className="btn btn-secondary" onClick={clearSearch}>Clear</button>
          </div>
        </div>
      </form>

      <div className="mb-3">
        <a href="/showFormAddInPart" className="btn btn-primary btn-sm me-2">Add Inhouse Part</a>
        <a href="/showFormAddOutPart" className="btn btn-primary btn-sm">Add Outsourced Part</a>
      </div>

      {/* Enhanced Parts Table */}
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
          {parts.map((part) => (
            <tr key={part.id}>
              <td>
                {part.name}
                {part.partType === 'Outsourced' && part.companyName && (
                  <span className="text-muted ms-2">({part.companyName})</span>
                )}
              </td>
              <td>${part.price.toFixed(2)}</td>
              <td>{part.inv}</td>
              <td>
                <button 
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleUpdatePart(part.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeletePart(part.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Car Products Section - Added Search */}
      <h2>Car Products</h2>
      <form className="mb-4">
        <div className="row g-3">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Filter products..."
              value={productKeyword}
              onChange={(e) => setProductKeyword(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-primary me-2">Search</button>
            <button type="button" className="btn btn-secondary" onClick={clearSearch}>Clear</button>
          </div>
        </div>
      </form>

      <div className="mb-3">
        <a href="/showFormAddProduct" className="btn btn-primary btn-sm">Add Product</a>
      </div>

      {/* Enhanced Products Table */}
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
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.inv}</td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleBuyProduct(product.id)}
                >
                  Buy Now
                </button>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleUpdateProduct(product.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mainscreen;