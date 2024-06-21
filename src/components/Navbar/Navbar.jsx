import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo/falcon_archery_logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt='Logo of Falcon Archery Club' />
      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        <li className={styles.navItem}><Link to="/" className={styles.navLink} onClick={toggleMenu}>Who Are We?</Link></li>
        <li className={styles.navItem}><Link to="/daily" className={styles.navLink} onClick={toggleMenu}>Daily Activity</Link></li>
        <li className={styles.navItem}><Link to="/news" className={styles.navLink} onClick={toggleMenu}>News</Link></li>
        <li className={styles.navItem}><Link to="/blog" className={styles.navLink} onClick={toggleMenu}>Our Blogs</Link></li>
      </ul>

      {/* Unless */}
      {/* <button
        onClick={() => window.open('', '_blank')} 
        className={styles.button}>
        Become An Archer! 🏹
      </button> */}
      
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  )
}

export default Navbar