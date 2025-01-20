import React from 'react';
import './SecondPage.css';

function SecondPage() {
  return (
    <div 
      className="second-page" 
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Gradient.png)` }}
    >
      <h1 className="second-heading">Pheonotics</h1>

      <div className="options">
        <img
          src={`${process.env.PUBLIC_URL}/Frame 3.png`}
          alt="Option 1"
          className="option-image"
          onClick={() => alert('Clicked on Frame 3')}
        />
        <img
          src={`${process.env.PUBLIC_URL}/Frame 4.png`}
          alt="Option 2"
          className="option-image"
          onClick={() => alert('Clicked on Frame 4')}
        />
        <img
          src={`${process.env.PUBLIC_URL}/Frame 5.png`}
          alt="Option 3"
          className="option-image"
          onClick={() => alert('Clicked on Frame 5')}
        />
      </div>
    </div>
  );
}

export default SecondPage;
