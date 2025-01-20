import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function Homepage() {
  return (
    <div 
      className="homepage" 
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)` }}
    >
      <Link to="/second">
        <button className="homepage-button">Click Here</button>
      </Link>
    </div>
  );
}

export default Homepage;
