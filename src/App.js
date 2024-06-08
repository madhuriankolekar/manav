// App.js

import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slider from "react-slick";
import image1 from './assert/download.jpg';
import image2 from './assert/download.jpg';
import image3 from './assert/download.jpg';
import image4 from './assert/download.jpg';
import image5 from './assert/download.jpg';
import image6 from './assert/download.jpg';
import CustomNavbar from './components/CustomNavbar';
import Image1Screen from './sliderimages/Image1Screen';
import Image2Screen from './sliderimages/Image2Screen';
import Image3Screen from './sliderimages/Image3Screen';
import Image4Screen from './sliderimages/Image4Screen';
import Image5Screen from './sliderimages/Image5Screen';
import Image6Screen from './sliderimages/Image6Screen';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"; 
import SigIn from './components/SigIn';
const App = () => {
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: 'slider' 
  };

  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
        <Route path="/signup" element={<SigIn />} />
          <Route path="/image1" element={<Image1Screen />} />
          <Route path="/image2" element={<Image2Screen />} />
          <Route path="/image3" element={<Image3Screen />} />
          <Route path="/image4" element={<Image4Screen />} />
          <Route path="/image5" element={<Image5Screen />} />
          <Route path="/image6" element={<Image6Screen />} />
          <Route
            path="/"
            element={
              <div className="slider-container">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                  <div className="card">
                    <Link to="/image1"><img src={image1} alt="Image 1" /></Link>
                  </div>
                  <div className="card">
                    <Link to="/image2"><img src={image2} alt="Image 2" /></Link>
                  </div>
                  <div className="card">
                    <Link to="/image3"><img src={image3} alt="Image 3" /></Link>
                  </div>
                  <div className="card">
                    <Link to="/image4"><img src={image4} alt="Image 4" /></Link>
                  </div>
                  <div className="card">
                    <Link to="/image5"><img src={image5} alt="Image 5" /></Link>
                  </div>
                  <div className="card">
                    <Link to="/image6"><img src={image6} alt="Image 6" /></Link>
                  </div>
                </Slider>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;











// import React, { useRef } from 'react';
// import { BrowserRouter as Router, Route, Switch,Routes  } from 'react-router-dom';
// import Slider from "react-slick";
// import CustomNavbar from './components/CustomNavbar';
// import image1 from './assert/download.jpg';
// import image2 from './assert/download.jpg';
// import image3 from './assert/download.jpg';
// import image4 from './assert/download.jpg';
// import image5 from './assert/download.jpg';
// import image6 from './assert/download.jpg';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./styles.css"; // Import your custom CSS file
// import Desktop from './components/Desktop';
// import Signup from './components/Signup';
// import SigIn from './components/SigIn';
// const App = () => {
//   let sliderRef = useRef(null);

//   const play = () => {
//     sliderRef.slickPlay();
//   };

//   const pause = () => {
//     sliderRef.slickPause();
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     className: 'slider' // Add this to apply custom styling
//   };

//   return (

//     <Router>
//       <div className="App">
//         <CustomNavbar />
//         {/* <Routes>
       
//           <Route path="/signup"  component={Signup} />
         
//         </Routes>
//         */}

      

//       <Routes>
//         <Route path="/signup" element={<SigIn />} />
        
//       </Routes>
    
//       {/* <Desktop /> */}
//       <div className="slider-container">
//         <h2>Auto Play {"&"} Pause with buttons</h2>
//         <Slider ref={slider => (sliderRef = slider)} {...settings}>
//           <div className="card">
//             <img src={image1} alt="Image 1" />
//           </div>
//           <div className="card">
//             <img src={image2} alt="Image 2" />
//           </div>
//           <div className="card">
//             <img src={image3} alt="Image 3" />
//           </div>
//           <div className="card">
//             <img src={image4} alt="Image 4" />
//           </div>
//           <div className="card">
//             <img src={image5} alt="Image 5" />
//           </div>
//           <div className="card">
//             <img src={image6} alt="Image 6" />
//           </div>
//         </Slider>
//         <div className="buttons-container" style={{ textAlign: "center" }}>
//           {/* <button className="button" onClick={play}>
//             Play
//           </button>
//           <button className="button" onClick={pause}>
//             Pause
//           </button> */}
//         </div>
//       </div>
//     </div>
//     </Router>
//   );
// };

// // export default App;


// import React, { useRef } from 'react';
// import { BrowserRouter as Router, Route, Switch,Routes  } from 'react-router-dom';
// import Slider from "react-slick";
// import CustomNavbar from './components/CustomNavbar';
// import image1 from './assert/download.jpg';
// import image2 from './assert/download.jpg';
// import image3 from './assert/download.jpg';
// import image4 from './assert/download.jpg';
// import image5 from './assert/download.jpg';
// import image6 from './assert/download.jpg';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./styles.css"; // Import your custom CSS file
// import Desktop from './components/Desktop';
// import Signup from './components/Signup';
// import SigIn from './components/SigIn';
// const App = () => {
//   let sliderRef = useRef(null);

//   const play = () => {
//     sliderRef.slickPlay();
//   };

//   const pause = () => {
//     sliderRef.slickPause();
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     className: 'slider' // Add this to apply custom styling
//   };

//   return (

//     <Router>
//     <Routes>
//       <Route path="/signup" element={<SigIn />} />
//       <Route path="/" element={<CustomNavbar />} />
//     </Routes>
//   </Router>
//   );
// };

// export default App;













// App.js

// Desktop.js



// App.js

// import React from 'react';
// import './App.css'; // Assuming you have an App.css file for global styles
// import Desktop from './components/Desktop';

// function App() {
//   return (
//     <div className="App">
//       <Desktop />
//     </div>
//   );
// }

// export default App;











// import React from 'react';
// import styles from './components/Desktop.module.css';
// import image1 from './assert/download.jpg';
// import image2 from './assert/2 Tshirt.jpg';
// const Desktop = () => {
//   return (
//     <div className={styles.desktop1}>
//       <img className={styles.desktop1Child} alt="" src={image2} />
//       <div className={styles.navBar2}>
//         <div className={styles.navBar2Child} />
//         <div className={styles.category}>
//           <div className={styles.accessories}>ACCESSORIES</div>
//           <div className={styles.apparels}>APPARELS</div>
//           <div className={styles.backpacks}>BACKPACKS</div>
//           <div className={styles.headwears}>HEADWEARS</div>
//           <div className={styles.medallions}>MEDALLIONS</div>
//           <div className={styles.accoutrements}>ACCOUTREMENTS</div>
//         </div>
//       </div>
//       <div className={styles.navBar}>
//         <div className={styles.navBarChild} />
//         <img className={styles.navBarItem} alt="Image 1" src={image2} />
//         <div className={styles.search}>
//           <div className={styles.searchChild} />
//           <div className={styles.search1}>SEARCH</div>
//           <img className={styles.searchItem} alt="" src={image2} />
//           <div className={styles.searchInner} />
//           <img className={styles.ellipseIcon} alt="" src={image2} />
//           <img className={styles.rectangleIcon} alt="" src={image2} />
//           <img className={styles.searchChild1} alt="" src={image2} />
//         </div>
//       </div>
//       <div className={styles.desktop1Item} />
//       <div className={styles.desktop1Inner} />
//       <div className={styles.rectangleDiv} />
//       <div className={styles.desktop1Child1} />
//       <div className={styles.desktop1Child2} />
//       <div className={styles.box1}>
//         <div className={styles.box4}>
//           <div className={styles.box4Child} />
//           <img className={styles.box4Item} alt="" src={image2} />
//         </div>
//         <div className={styles.box3}>
//           <div className={styles.box4Child} />
//           <img className={styles.box3Item} alt="" src={image2} />
//         </div>
//         <div className={styles.box2}>
//           <div className={styles.box4Child} />
//           <img className={styles.box2Item} alt="" src={image2} />
//         </div>
//         <div className={styles.box11}>
//           <div className={styles.box4Child} />
//           <img className={styles.box1Item} alt="" src={image2} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Desktop;

