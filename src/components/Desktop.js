// Desktop.js

import React from 'react';
import styles from './Desktop.module.css';

import image1 from '../assert/2 Tshirt.jpg';

import image2 from '../assert/3 Tshirt.jpg';

import image3 from '../assert/4 Tshirt.jpg';

import image4 from '../assert/5 Tshirt.jpg';

import image5 from '../assert/6 Tshirt.jpg';

import image6 from '../assert/2 Tshirt.jpg';

import image7 from '../assert/7 tshirt.jpg';

import image8 from '../assert/8 Tshirt.jpg';
import image9 from '../assert/Tshirt 1.jpg';

const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <img className={styles.desktop1Child} alt="" src={image2} />
      <div className={styles.navBar2}>
        <div className={styles.navBar2Child} />
        <div className={styles.category}>
          <div className={styles.accessories}>ACCESSORIES</div>
          <div className={styles.apparels}>APPARELS</div>
          <div className={styles.backpacks}>BACKPACKS</div>
          <div className={styles.headwears}>HEADWEARS</div>
          <div className={styles.medallions}>MEDALLIONS</div>
          <div className={styles.accoutrements}>ACCOUTREMENTS</div>
        </div>
      </div>
      <div className={styles.navBar}>
        <div className={styles.navBarChild} />
        <img className={styles.navBarItem} alt=""  src={image2} />
        <div className={styles.search}>
          <div className={styles.searchChild} />
          <div className={styles.search1}>SEARCH</div>
          <img className={styles.searchItem} alt="" src={image2} />
          <div className={styles.searchInner} />
          <img className={styles.ellipseIcon} alt=""  src={image2} />
          <img className={styles.rectangleIcon} alt=""  src={image2} />
          <img className={styles.searchChild1} alt=""  src={image2} />
        </div>
      </div>
      <div className={styles.desktop1Item} />
      <div className={styles.desktop1Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.desktop1Child1} />
      <div className={styles.desktop1Child2} />
      <div className={styles.box1}>
        <div className={styles.box4}>
          <div className={styles.box4Child} />
          <img className={styles.box4Item} alt=""  src={image1} />
        </div>
        <div className={styles.box3}>
          <div className={styles.box4Child} />
          <img className={styles.box3Item} alt=""  src={image3} />
        </div>
        <div className={styles.box2}>
          <div className={styles.box4Child} />
          <img className={styles.box2Item} alt=""  src={image4} />
        </div>
        <div className={styles.box11}>
          <div className={styles.box4Child} />
          <img className={styles.box1Item} alt=""  src={image5} />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
