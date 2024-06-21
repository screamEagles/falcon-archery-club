import React from 'react';
import styles from './About.module.css';
import sirAbid from '../../assets/coaches/sir_abid.jpg';
import sirMoiz from '../../assets/coaches/sir_moiz.jpg';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.whoAreWe}>
        <h2>Who Are We?</h2>
        <p>
          Welcome to Falcon Archery Club! We are a community of archery enthusiasts
          dedicated to promoting the sport and helping members of all skill levels
          improve their abilities. Whether you're a seasoned pro or a complete beginner,
          you'll find a welcoming and supportive environment here.
        </p>
        <p>
          Our club offers regular training sessions, workshops, and competitions to
          help you hone your skills. Our members range from young children to adults,
          all sharing a passion for archery.
        </p>
        <p>
          Join us today and experience the thrill of hitting your target, the joy of
          camaraderie, and the satisfaction of continuous improvement.
        </p>
      </section>
      <section className={styles.meetOurCoach}>
        <h2>Meet Our Coaches</h2>

        {/* Sir Abid */}
        <div className={styles.coachContainer}>
          <img src={sirAbid} alt="Coach" className={styles.coachImage} />
          <div className={styles.coachInfo}>
            <p>
              Meet <b>Sir Abid Ejaz</b>, one of the founders of the Ba-Kamaan Club. He has a Level 1 Coach Certification from US Archery, and for over five years, he has trained scores of archers, including national players who compete in HEC-organised competitions.
            </p>
            <p>
              Sir Abid's aim in life is to bring a positive impact on the community through sports, especially during troubling times.
            </p>
            <p>Contact: +92 322 8283335</p>
          </div>
        </div><br />

        {/* Sir Moiz */}
        <div className={styles.coachContainer}>
          <img src={sirMoiz} alt="Coach" className={styles.coachImage} />
          <div className={styles.coachInfo}>
            <p>
              Say hello to <b>Sir Moiz Malik</b>, who has taught people how to excel in archery for over five years. He has trained various players, including national champions for as little as eight years, and universities like IBA to reach their full potential.
            </p>
            <p>
              Sir Moiz's coaching philosophy focuses on building a firm foundation in archery techniques, fostering mental resilience, and promoting a positive attitude towards the sport.
            </p>
            <p>Contact: +92 317 2756805</p>
          </div>
        </div>

      </section>
      <br />
    </div>
  );
};

export default About;
