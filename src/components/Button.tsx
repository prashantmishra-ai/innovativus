import React from 'react';

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button style={{
      padding: '10px 20px',
      margin: '10px',
      backgroundColor: '#ff004c', /* Red color */
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem'
    }}>
      {text}
    </button>
  );
};

export default Button;
