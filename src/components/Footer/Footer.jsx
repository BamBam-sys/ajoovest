import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className={styles.brand}>ajooVest</div>
        <div className={styles.products}>
          <h3>products</h3>
          <Link to={'/'} className={styles.link}>
            Lorem
          </Link>
          <Link to={'/'} className={styles.link}>
            Lorem ipsum
          </Link>
          <Link to={'/'} className={styles.link}>
            Lorem
          </Link>
          <Link to={'/'} className={styles.link}>
            Lorem ipsum
          </Link>
          <Link to={'/'} className={styles.link}>
            Lorem
          </Link>
        </div>

        <div className={styles.company}>
          <h3>company</h3>
          <Link to={'/'} className={styles.link}>
            About
          </Link>
          <Link to={'/'} className={styles.link}>
            FAQs
          </Link>
          <Link to={'/'} className={styles.link}>
            Blog
          </Link>
        </div>

        <div className={styles.legal}>
          <h3>legal</h3>
          <Link to={'/'} className={styles.link}>
            Terms
          </Link>
          <Link to={'/'} className={styles.link}>
            Privacy
          </Link>
          <Link to={'/'} className={styles.link}>
            Security
          </Link>
        </div>

        <div className={styles.contact}>
          <div className={styles.socials}>
            <a href={'/'}>
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href={'/'}>
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href={'/'}>
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
          <a
            href="https://goo.gl/maps/qcdeAVPL3EM5wAMN9"
            className={styles.link}
          >
            38, Olanrewaju Ninalowo Crescent, Lekki, Lagos, Nigeria
          </a>
          <a href="mailto:contact@ajoovest.com" className={styles.link}>
            contact@ajoovest.com
          </a>
          <a href="tel:+234 816 837 1973" className={styles.link}>
            +234 816 837 1973
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
