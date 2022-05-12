import React from 'react';

export const spinner = ({ text = '', size = '5rem' }) => {
  const header = text ? <h4>{text}</h4> : null;
  return (
    <div className="spinner">
      {header}
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  );
};
