import React from 'react';

interface PartFormProps {
  inv: number;
  minInventory: number;
  maxInventory: number;
  errorMessage?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
}

const PartForm: React.FC<PartFormProps> = ({ inv, minInventory, maxInventory, errorMessage, handleChange }) => {
  return (
    <div className="part-form">
      <div>
        <label htmlFor="inv">Inventory:</label>
        <input
          type="number"
          id="inv"
          name="inv"
          value={inv}
          onChange={(e) => handleChange(e, 'inv')}
          required
        />
      </div>
      <div>
        <label htmlFor="minInventory">Minimum Inventory:</label>
        <input
          type="number"
          id="minInventory"
          name="minInventory"
          value={minInventory}
          onChange={(e) => handleChange(e, 'minInventory')}
          required
        />
      </div>
      <div>
        <label htmlFor="maxInventory">Maximum Inventory:</label>
        <input
          type="number"
          id="maxInventory"
          name="maxInventory"
          value={maxInventory}
          onChange={(e) => handleChange(e, 'maxInventory')}
          required
        />
      </div>
      {errorMessage && (
        <div>
          <p className="error-message">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default PartForm;
