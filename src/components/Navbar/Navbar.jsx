import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button } from '../../common';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.brandLogo} to={'#'}>
          ajoovest
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <HashLink className={styles.navLink} to={'/'}>
            Home
          </HashLink>
        </li>

        <li>
          <HashLink className={styles.navLink} to={'#how-it-works'}>
            How it works
          </HashLink>
        </li>
        <li>
          <HashLink className={styles.navLink} to={'#about-us'}>
            About us
          </HashLink>
        </li>
        <li>
          <HashLink className={styles.navLink} to={'#contact'}>
            Contact
          </HashLink>
        </li>
      </ul>
      <div className={styles.navBtn}>
        <Button
          text={'create free account'}
          bgColor={'--primary-color'}
          color={'--white-color'}
          hoverColor={'--btn-hover-color'}
        />
        <Button
          text={'log in'}
          bgColor={'--white-color'}
          color={'--primary-text-color'}
          hoverColor={'--bg-color'}
        />
      </div>
    </nav>
  );
}

export default Navbar;
