// Image1Screen.js
import React from 'react';
import { Link } from 'react-router-dom';
import image6 from '../assert/download.jpg';

const Image6Screen = () => {
  return (
    <div>
      <h2>Image 1</h2>
      <img src={image6} alt="Image 1" />
      <button>Checkout</button>
      <button>Add to Cart</button>
    </div>
  );
};

export default Image6Screen;

// Similarly, create Image2Screen.js, Image3Screen.js, ..., Image6Screen.js for other images.
