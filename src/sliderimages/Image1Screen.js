// Image1Screen.js
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assert/download.jpg';

const Image1Screen = () => {
  return (
    <div>
      <h2>Image 1</h2>
      <img src={image1} alt="Image 1" />
      <button>Checkout</button>
      <button>Add to Cart</button>
    </div>
  );
};

export default Image1Screen;

// Similarly, create Image2Screen.js, Image3Screen.js, ..., Image6Screen.js for other images.
