import React from 'react';

const SizeSelector = ({ sizes, onSelectSize }) => {
  const handleChange = (event) => {
    onSelectSize(event.target.value);
  };

  return (
    <div className="size-selector" data-testid="size-selector">
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>Select Size</option>
        {sizes.map((size) => (
          <option key={size.size} value={size.size} disabled={size.quantity === 0}>
            {size.size} {size.quantity === 0 && '(OUT OF STOCK)'}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;
