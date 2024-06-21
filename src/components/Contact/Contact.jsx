import React from 'react';
import styles from './Contact.module.css';

// Import the Facebook icon
import { FaFacebookSquare } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2>Contact Us</h2>
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
            <h3>Location</h3>
            <p>Falcon Archery Range, Near New Falcon Complex Gate,</p>
            <p>Next To Malir Cantt. Gate 5</p>
            <p>Karachi, Sindh, Pakistan</p>
        </div>
        <div className={styles.contactItem}>
          <h3>Training Timings</h3>
          <p>Friday and Saturday</p>
          <p>6:00 PM - 7:00 PM</p>
          <p style={{color: 'white'}}>Remember To</p>
        </div>
        <div className={styles.contactItem}>
            <h3>Visit Our Page</h3>
            <a
                href="https://www.facebook.com/profile.php?id=61559293719662"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
            >  
                <FaFacebookSquare size={50} />
            </a>
            <p style={{color: 'white'}}>#Feed The Focus</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
