import React, { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button } from '../../common';

const useOffScreen = (options) => {
  const ref = useRef();
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    const navRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (navRef) observer.observe(navRef);

    return () => {
      if (navRef) observer.unobserve(navRef);
    };
  }, [ref, options]);

  return [ref, visible];
};

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const [ref, visible] = useOffScreen({ rootMargin: '400px' });

  useEffect(() => {
    !navOpen
      ? (document.documentElement.style.overflowY = 'scroll')
      : (document.documentElement.style.overflowY = 'hidden');
  }, [navOpen]);

  const handleMobileNav = () => {
    setNavOpen((prev) => !prev);
  };

  const mobileNavStyles = navOpen ? styles.openNav : '';

  return (
    <>
      <nav
        className={`${styles.navbar} ${styles.nonSticky} ${mobileNavStyles}`}
        ref={ref}
      >
        <Link className={styles.brandLogo} to={'#'}>
          ajoovest
        </Link>

        <div className={styles.mainNav}>
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
        </div>
        <div className={styles.mobileNavBtn}>
          {navOpen ? (
            <ion-icon name="close-outline" onClick={handleMobileNav}></ion-icon>
          ) : (
            <ion-icon name="menu-outline" onClick={handleMobileNav}></ion-icon>
          )}
        </div>
      </nav>

      {!visible && (
        <nav className={`${styles.navbar} ${styles.sticky} ${mobileNavStyles}`}>
          <Link className={styles.brandLogo} to={'#'}>
            ajoovest
          </Link>

          <div className={styles.mainNav}>
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
          </div>
          <div className={styles.mobileNavBtn}>
            {navOpen ? (
              <ion-icon
                name="close-outline"
                onClick={handleMobileNav}
              ></ion-icon>
            ) : (
              <ion-icon
                name="menu-outline"
                onClick={handleMobileNav}
              ></ion-icon>
            )}
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
