import React, { FormEvent, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Part {
  id: number;
  name: string;
  price: number;
  inv: number;
  partId?: number;
}

interface InhousePartFormProps {
  onAddPart?: (newPart: Part) => void;
}

const InhousePartForm: React.FC<InhousePartFormProps> = ({ onAddPart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const initialFormData: Part = {
    id: 0,
    name: "",
    price: 0,
    inv: 0,
    partId: undefined,
  };
  const [formData, setFormData] = useState<Part>(initialFormData);

  useEffect(() => {
    if (id) {
      // Editing: load part from localStorage by id
      const storedParts = localStorage.getItem("parts");
      if (storedParts) {
        const parts = JSON.parse(storedParts);
        const partToEdit = parts.find((p: any) => p.id === parseInt(id));
        if (partToEdit) {
          setFormData(partToEdit);
        }
      }
    }
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" || name === "inv" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const newPart = {
      ...formData,
      id: id ? parseInt(id) : Date.now(),
      partType: "InHouse",
    };

    let partsArray = JSON.parse(localStorage.getItem("parts") || "[]");
    
    if (id) {
      // Update existing part
      partsArray = partsArray.map((part: any) => 
        part.id === parseInt(id) ? newPart : part
      );
    } else {
      // Add new part
      partsArray = [...partsArray, newPart];
    }
    
    localStorage.setItem("parts", JSON.stringify(partsArray));
    if (onAddPart) onAddPart(newPart);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center">
      <button 
        onClick={() => navigate("/")}
        className="text-blue-500 underline mb-4 mt-14"
      >
        &larr; Return to Main Screen
      </button>
      <h1 className="text-2xl font-bold mb-6">Inhouse Part Detail</h1>
      <form onSubmit={handleSubmit} className="w-80">
        <input type="hidden" name="id" value={formData.id} />
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            step="0.01"
            name="price"
            value={formData.price === 0 ? "" : formData.price.toString()}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            name="inv"
            value={formData.inv === 0 ? "" : formData.inv.toString()}
            onChange={handleChange}
            placeholder="Inventory"
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
  );
};

export default InhousePartForm;
