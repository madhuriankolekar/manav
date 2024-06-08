// Image1Screen.js
import React from 'react';
import { Link } from 'react-router-dom';
import image2 from '../assert/download.jpg';

const Image2Screen = () => {
  return (
    <div>
      <h2>Image 2</h2>
      <img src={image2} alt="Image 1" />
      <button>Checkout</button>
      <button>Add to Cart</button>
    </div>
  );
};

export default Image2Screen;

// Similarly, create Image2Screen.js, Image3Screen.js, ..., Image6Screen.js for other images.
