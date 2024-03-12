import React, { useState } from 'react';
import './Menu.css';

export default function Menu({handleMenu}) {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index) => {
    setActiveButton(index);
    handleMenu(index)
  };

  return (
    <div className='btn_List'> 
        <h1>Product</h1>
        <div className='btn_List_items'>
            <button
                className={`btn ${activeButton === 0 ? 'active' : ''}`}
                onClick={() => handleClick(0)}
            >
                모두
            </button>
            <button
                className={`btn ${activeButton === 1 ? 'active' : ''}`}
                onClick={() => handleClick(1)}
            >
                전자기기
            </button>
            <button
                className={`btn ${activeButton === 2 ? 'active' : ''}`}
                onClick={() => handleClick(2)}
            >
                쥬얼리
            </button>
            <button
                className={`btn ${activeButton === 3 ? 'active' : ''}`}
                onClick={() => handleClick(3)}
            >
                여성의류
            </button>
            <button
                className={`btn ${activeButton === 4 ? 'active' : ''}`}
                onClick={() => handleClick(4)}
            >
                남성의류
            </button>
        </div>
    </div>
  );
}

