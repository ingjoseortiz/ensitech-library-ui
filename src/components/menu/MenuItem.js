import React from 'react';

const MenuItem = ({ title }) => {
  return (
    <div className="menu-item">
      <span>{title}</span>
    </div>
  );
};

export default MenuItem;