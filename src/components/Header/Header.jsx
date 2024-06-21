import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Header.module.css';

// Import images
import image1 from '../../assets/competitions/iba-friendly/2024-05-15_8.jpg';
import image2 from '../../assets/activities/2023-12-23/2023-12-23_3.jpg';
import image3 from '../../assets/activities/2024-03-30/2024-03-30_3.jpg';
import image4 from '../../assets/competitions/sports-factory/2024-05-1_3.jpg';
import image5 from '../../assets/competitions/njv/2024-02-29_1.jpg';

const images = [image1, image2, image3, image4, image5];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        <h1>Welcome To Falcon Archery Club</h1>
        <p>Where You Fashion In Focus</p>
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        className={styles.carousel}
      >
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </header>
  );
};

export default Header;
