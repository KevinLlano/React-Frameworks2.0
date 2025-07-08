import React, { FC, useState, useEffect } from "react";


interface Item {
  id: number;
  name: string;
  price: number;
  inv: number;
  partType?: string;
  companyName?: string;
}

const initialParts: Item[] = [
  { id: 1, name: "Engine V8", price: 2500.0, inv: 5, partType: "InHouse" },
  { id: 2, name: "All-Season Tire", price: 150.0, inv: 20, partType: "Outsourced", companyName: "Goodyear" },
  { id: 3, name: "Brake Pads", price: 75.0, inv: 30, partType: "InHouse" },
  { id: 4, name: "12V Battery", price: 120.0, inv: 15, partType: "Outsourced", companyName: "ACDelco" },
  { id: 5, name: "Spark Plugs", price: 10.0, inv: 100, partType: "InHouse" },
];

const initialProducts: Item[] = [
  { id: 1, name: "Mustang GT", price: 35000.0, inv: 2 },
  { id: 2, name: "Camaro SS", price: 37000.0, inv: 3 },
  { id: 3, name: "Charger R/T", price: 32000.0, inv: 1 },
  { id: 4, name: "Corvette Z06", price: 75000.0, inv: 1 },
  { id: 5, name: "Tesla Model S", price: 80000.0, inv: 2 },
];

const Mainscreen: FC = () => {
  const [parts, setParts] = useState<Item[]>([]);
  const [products, setProducts] = useState<Item[]>([]);
  const [partKeyword, setPartKeyword] = useState("");
  const [productKeyword, setProductKeyword] = useState("");

  useEffect(() => {
    // Load parts from localStorage 
    const storedParts = localStorage.getItem("parts");
    if (storedParts) {
      const stored = JSON.parse(storedParts);
      const combined = [...initialParts, ...stored.filter(
        (sp: any) => !initialParts.some(ip => ip.id === sp.id)
      )];
      setParts(combined);
    } else {
      setParts(initialParts);
    }
    // Load products from localStorage 
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const stored = JSON.parse(storedProducts);
      const combined = [...initialProducts, ...stored.filter(
        (sp: any) => !initialProducts.some(ip => ip.id === sp.id)
      )];
      setProducts(combined);
    } else {
      setProducts(initialProducts);
    }
  }, []);


  const handleUpdatePart = (id: number) => {
    // Navigate to the update form with the part id in the URL
    window.location.href = `/showPartFormForUpdate/${id}`;
  };

  const handleDeletePart = (id: number) => {
    const filteredParts = parts.filter((part) => part.id !== id);
    setParts(filteredParts);
    localStorage.setItem("parts", JSON.stringify(filteredParts));
  };

  const handleBuyProduct = async (id: number) => {
    alert("Product purchased, your product has been successfully purchased!");
  };

  const handleUpdateProduct = (id: number) => {
    window.location.href = `/showProductFormForUpdate/${id}`;
  };

  const handleDeleteProduct = (id: number) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  };

  const handleAddPart = (newPart: Item) => {
    setParts((prevParts) => {
      const updatedParts = [...prevParts, newPart];
      localStorage.setItem("parts", JSON.stringify(updatedParts));
      return updatedParts;
    });
  };

  const clearSearch = () => {
    setPartKeyword("");
    setProductKeyword("");
  };

  return (
    <div className=" px-4 py-10 bg-gradient-to-br from-black via-blue-100 to-pink-100 min-h-screen">
      {/* Navigation */}
      <nav className="mb-8 flex justify-between items-center">
        <a
          href="/about"
          className="inline-block px-5 py-2 border-2 border-pink-500 text-pink-600 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition"
        >
          About Us
        </a>
        <span className="text-2xl font-bold text-pink-700 drop-shadow">Kevin's Hot Wheels</span>
      </nav>

      <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-100 rounded-2xl shadow-2xl p-10 mb-10 border-2 border-blue-200">
        <h1 className="text-4xl font-extrabold  bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 mb-2 text-center drop-shadow-lg">
          Car Supply Shop
        </h1>
        <hr className="mb-8 border-pink-200" />

        {/* Car Parts Section */}
        <h2 className="text-3xl font-bold mb-4 text-green-700">Car Parts</h2>
        <form className="mb-4 flex flex-col md:flex-row gap-2 bg-green-50 p-4 rounded-lg shadow">
          <input
            type="text"
            className="flex-1 border-2 border-green-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            placeholder="Filter parts..."
            value={partKeyword}
            onChange={(e) => setPartKeyword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded shadow hover:from-green-600 hover:to-green-800 transition font-semibold"
          >
            Search
          </button>
          <button
            type="button"
            className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200 transition font-semibold border border-green-300"
            onClick={clearSearch}
          >
            Clear
          </button>
        </form>

        <div className="mb-6 flex gap-2">
          <a
            href="/showFormAddInPart"
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition text-sm font-semibold"
          >
            Add Inhouse Part
          </a>
          <a
            href="/showFormAddOutPart"
            className="bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition text-sm font-semibold"
          >
            Add Outsourced Part
          </a>
        </div>

        {/* Parts Table */}
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full bg-white border-2 border-blue-200 rounded shadow">
            <thead>
              <tr className="bg-gradient-to-r from-blue-100 to-pink-100">
                <th className="py-3 px-4 border-b text-center text-blue-700 font-bold">Name</th>
                <th className="py-3 px-4 border-b text-center text-blue-700 font-bold">Price</th>
                <th className="py-3 px-4 border-b text-center text-blue-700 font-bold">Inventory</th>
                <th className="py-3 px-4 border-b text-center text-blue-700 font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {parts
                .filter((part) => part.name.toLowerCase().includes(partKeyword.toLowerCase()))
                .map((part) => (
                  <tr key={part.id} className="hover:bg-yellow-50">
                    <td className="py-2 px-4 border-b">
                      {part.name}
                      {part.partType === "Outsourced" && part.companyName && (
                        <span className="text-pink-500 ml-2 text-xs">({part.companyName})</span>
                      )}
                    </td>
                    <td className="py-2 px-4 border-b">${Number(part.price).toFixed(2)}</td>
                    <td className="py-2 px-4 border-b">{Number(part.inv)}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-700 transition text-sm font-semibold"
                        onClick={() => {
                          alert('Purchase Successful! Your part has been successfully purchased!');
                        }}
                      >
                        Buy Now
                      </button>
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700 transition text-sm font-semibold"
                        onClick={() => handleUpdatePart(part.id)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700 transition text-sm font-semibold"
                        onClick={() => handleDeletePart(part.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Car Products Section */}
        <h2 className="text-3xl font-bold mb-4 text-pink-700">Car Products</h2>
        <form className="mb-4 flex flex-col md:flex-row gap-2">
          <input
            type="text"
            className="flex-1 border-2 border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Filter products..."
            value={productKeyword}
            onChange={(e) => setProductKeyword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded shadow hover:from-blue-600 hover:to-pink-600 transition font-semibold"
          >
            Search
          </button>
          <button
            type="button"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition font-semibold"
            onClick={clearSearch}
          >
            Clear
          </button>
        </form>

        <div className="mb-6">
          <a
            href="/showFormAddProduct"
            className="bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition text-sm font-semibold"
          >
            Add Product
          </a>
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 border-pink-200 rounded shadow">
            <thead>
              <tr className="bg-gradient-to-r from-pink-100 to-blue-100">
                <th className="py-3 px-4 border-b text-center text-pink-700 font-bold">Name</th>
                <th className="py-3 px-4 border-b text-center text-pink-700 font-bold">Price</th>
                <th className="py-3 px-4 border-b text-center text-pink-700 font-bold">Inventory</th>
                <th className="py-3 px-4 border-b text-center text-pink-700 font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((product) => product.name.toLowerCase().includes(productKeyword.toLowerCase()))
                .map((product) => (
                  <tr key={product.id} className="hover:bg-blue-50">
                    <td className="py-2 px-4 border-b">{product.name}</td>
                    <td className="py-2 px-4 border-b">${Number(product.price).toFixed(2)}</td>
                    <td className="py-2 px-4 border-b">{Number(product.inv)}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-700 transition text-sm font-semibold"
                        onClick={() => handleBuyProduct(product.id)}
                      >
                        Buy Now
                      </button>
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700 transition text-sm font-semibold"
                        onClick={() => handleUpdateProduct(product.id)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700 transition text-sm font-semibold"
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
      </div>
    </div>
  );
};

export default Mainscreen;
