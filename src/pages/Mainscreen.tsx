import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Mainscreen: FC = () => {
  return (
    <div className="container">
      <h1>Car Supply Shop</h1>
      <hr />
      <h2>Car Parts</h2>

      {/* Search form */}
      <form action="/mainscreen">
        Filter: <input type="text" name="partkeyword" id="partkeyword" size={50} required />
        &nbsp;
        <input type="submit" value="Search" />
        &nbsp;
        <input type="button" value="Clear" id="btnClearPart" onClick={() => window.location.reload()} />
      </form>
      <br />

      {/* Add Inhouse Part Button */}
      <Link to="/showFormAddInPart" className="btn btn-primary btn-sm mb-3">Add Inhouse Part</Link>
      <Link to="/showFormAddOutPart" className="btn btn-primary btn-sm mb-3">Add Outsourced Part</Link>

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
          {/* Example static row */}
          <tr>
            <td>Part Name</td>
            <td>1</td>
            <td>1</td>
            <td>
              <Link to="/showPartFormForUpdate/1" className="btn btn-primary btn-sm mb-3">Update</Link>
              <Link to="/deletepart/1" className="btn btn-primary btn-sm mb-3">Delete</Link>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Car Products</h2>

      {/* Search form for products */}
      <form action="/mainscreen">
        Filter: <input type="text" name="productkeyword" id="productkeyword" size={50} required />
        &nbsp;
        <input type="submit" value="Search" />
        &nbsp;
        <input type="button" value="Clear" id="btnClearProduct" onClick={() => window.location.reload()} />
      </form>
      <br />

      {/* Add Product Button */}
      <Link to="/showFormAddProduct" className="btn btn-primary btn-sm mb-3">Add Product</Link>

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
          {/* Example static row */}
          <tr>
            <td>Product Name</td>
            <td>1</td>
            <td>1</td>
            <td>
              <Link to="/buyProduct/1" className="btn btn-primary btn-sm mb-3">Buy Now</Link>
              <Link to="/showProductFormForUpdate/1" className="btn btn-primary btn-sm mb-3">Update</Link>
              <Link to="/deleteproduct/1" className="btn btn-primary btn-sm mb-3">Delete</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mainscreen;
