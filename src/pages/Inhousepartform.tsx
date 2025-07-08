import React, { FormEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        const partsArray = JSON.parse(storedParts);
        const found = partsArray.find((p: Part) => String(p.id) === id);
        if (found) setFormData(found);
      }
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price"
          ? parseFloat(value) || 0
          : name === "inv" || name === "partId"
          ? value
            ? Number(value)
            : 0
          : value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newPart = { ...formData };
    if (!id) {
      // New part: assign new id
      newPart.id = Date.now();
    }
    const storedParts = localStorage.getItem("parts");
    let partsArray = storedParts ? JSON.parse(storedParts) : [];
    if (id) {
      // Update existing part
      partsArray = partsArray.map((p: Part) => (String(p.id) === id ? newPart : p));
    } else {
      // Add new part
      partsArray = [...partsArray, newPart];
    }
    localStorage.setItem("parts", JSON.stringify(partsArray));
    if (onAddPart) onAddPart(newPart);
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center">
      <a href="/" className="text-blue-500 underline mb-4 mt-14">
        &larr; Return to Main Screen
      </a>
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
            type="text"
            name="inv"
            value={formData.inv || ""}
            onChange={handleChange}
            placeholder="Inventory"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="partId"
            value={formData.partId || ""}
            onChange={handleChange}
            placeholder="Part ID"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InhousePartForm;
