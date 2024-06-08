// Image1Screen.js
import React from 'react';
import { Link } from 'react-router-dom';
import image3 from '../assert/download.jpg';

const Image3Screen = () => {
  return (
    <div>
      <h2>Image 1</h2>
      <img src={image3} alt="Image 1" />
      <button>Checkout</button>
      <button>Add to Cart</button>
    </div>
  );
};

export default Image3Screen;

// Similarly, create Image2Screen.js, Image3Screen.js, ..., Image6Screen.js for other images.
