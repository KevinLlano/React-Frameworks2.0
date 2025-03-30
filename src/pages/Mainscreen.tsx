import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Item {
  name: string;
  price: number;
  inv: number;
}

const Mainscreen: FC = () => {
  // State for parts and products
  const [parts, setParts] = useState<Item[]>([]);
  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    setParts([
      { name: "Engine V8", price: 2500.0, inv: 5 },
      { name: "All-Season Tire", price: 150.0, inv: 20 },
      { name: "Brake Pads", price: 75.0, inv: 30 },
      { name: "12V Battery", price: 120.0, inv: 15 },
      { name: "Spark Plugs", price: 10.0, inv: 100 },
    ]);

    setProducts([
      { name: "Mustang GT", price: 35000.0, inv: 2 },
      { name: "Camaro SS", price: 37000.0, inv: 3 },
      { name: "Charger R/T", price: 32000.0, inv: 1 },
      { name: "Corvette Z06", price: 75000.0, inv: 1 },
      { name: "Tesla Model S", price: 80000.0, inv: 2 },
    ]);
  }, []);

  return (
    <div className="container">
      <h1>Car Supply Shop</h1>
      <hr />
      <h2>Car Parts</h2>

      {/* Search form */}
      <form action="/mainscreen">
        Filter:{" "}
        <input
          type="text"
          name="partkeyword"
          id="partkeyword"
          size={50}
          required
        />
        &nbsp;
        <input type="submit" value="Search" />
        &nbsp;
        <input
          type="button"
          value="Clear"
          id="btnClearPart"
          onClick={() => window.location.reload()}
        />
      </form>
      <br />

      {/* Add Inhouse Part Button */}
      <Link to="/showFormAddInPart" className="btn btn-primary btn-sm mb-3">
        Add Inhouse Part
      </Link>
      <Link to="/showFormAddOutPart" className="btn btn-primary btn-sm mb-3">
        Add Outsourced Part
      </Link>

      {/* Car Parts Table */}
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
        
          {parts.map((part, index) => (
            <tr key={index}>
              <td>{part.name}</td>
              <td>{part.price}</td>
              <td>{part.inv}</td>
              <td>
                <Link
                  to={`/showPartFormForUpdate/${index}`}
                  className="btn btn-primary btn-sm mb-3"
                >
                  Update
                </Link>
                <Link
                  to={`/deletepart/${index}`}
                  className="btn btn-primary btn-sm mb-3"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Car Products</h2>

      {/* Search form for products */}
      <form action="/mainscreen">
        Filter:{" "}
        <input
          type="text"
          name="productkeyword"
          id="productkeyword"
          size={50}
          required
        />
        &nbsp;
        <input type="submit" value="Search" />
        &nbsp;
        <input
          type="button"
          value="Clear"
          id="btnClearProduct"
          onClick={() => window.location.reload()}
        />
      </form>
      <br />

      {/* Add Product Button */}
      <Link to="/showFormAddProduct" className="btn btn-primary btn-sm mb-3">
        Add Product
      </Link>

      {/* Car Products Table */}
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
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.inv}</td>
              <td>
                <Link
                  to={`/buyProduct/${index}`}
                  className="btn btn-primary btn-sm mb-3"
                >
                  Buy Now
                </Link>
                <Link
                  to={`/showProductFormForUpdate/${index}`}
                  className="btn btn-primary btn-sm mb-3"
                >
                  Update
                </Link>
                <Link
                  to={`/deleteproduct/${index}`}
                  className="btn btn-primary btn-sm mb-3"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mainscreen;
