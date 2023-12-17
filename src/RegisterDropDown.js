import React, { useState } from 'react';

const RegisterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container" >
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isOpen ? 'Close Dropdown' : 'Open Dropdown'}
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleItemClick('Option 1')}>
            Option 1
          </div>
          <div className="dropdown-item" onClick={() => handleItemClick('Option 2')}>
            Option 2
          </div>
          <div className="dropdown-item" onClick={() => handleItemClick('Option 3')}>
            Option 3
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterDropdown;
