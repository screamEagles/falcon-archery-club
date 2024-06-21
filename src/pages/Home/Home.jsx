import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import styles from './Home.module.css';
import activityImage from '../../assets/activities/2024-03-30/2024-03-30_1.jpg';
import newsImage from '../../assets/competitions/njv/2024-02-29_6.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleActivityClick = () => {
    navigate('/daily');
  };

  const handleNewsClick = () => {
    navigate('/news');
  };

  return (
    <div className={styles.homeContainer}>
      <Header />
      <About />
      <h1>Check Our...</h1>
      <div className={styles.buttonContainer}>
        <div 
          className={styles.button}
          onClick={handleActivityClick}
          style={{ backgroundImage: `url(${activityImage})`, margin: 'auto', marginBottom: '1rem' }}
        >
          <span>Activity</span>
        </div>
        <div 
          className={styles.button}
          onClick={handleNewsClick}
          style={{ backgroundImage: `url(${newsImage})`, margin: 'auto', marginBottom: '1rem' }}
        >
          <span>News</span>
        </div>
      </div>
      <Contact />
      <footer className={styles.footer}>
        Falcon Archery Club - 2024
      </footer>
    </div>
  );
};

export default Home;
