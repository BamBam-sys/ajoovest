import React from 'react';
import { Fade } from 'react-reveal';
import { SecondaryHeading, TertiaryHeading } from '../../common';
import styles from './HowItWorks.module.css';

function HowItWorks() {
  return (
    <div className="container">
      <SecondaryHeading
        text={'Easy steps to use this service'}
        color={'var(--secondary-text-color)'}
      />
      <Fade left cascade>
        <div className={styles.steps}>
          <div className={styles.step}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <TertiaryHeading
              text={'Download'}
              color={'var(--secondary-text-color)'}
            />
            <p className={styles.stepDescription}>
              First you download the app on the
              <a href="/"> appstore </a>
              or
              <a href="/"> playstore </a>. you can then proceed to creating an
              account on the application.
            </p>
          </div>
          <div className={styles.step}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <TertiaryHeading
              text={'Deposit cash'}
              color={'var(--secondary-text-color)'}
            />
            <p className={styles.stepDescription}>
              Visit your preferred AjooVest/POS agent (or have them come to you)
              Give the agent cash and tell him purpose (interface allows user to
              save for Ajoo, Target, or specified reason).
            </p>
          </div>
          <div className={styles.step}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <TertiaryHeading
              text={'Confirm/Authenticate'}
              color={'var(--secondary-text-color)'}
            />
            <p className={styles.stepDescription}>
              Authenticate cash deposit by going on your app to enter
              transaction Pin.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default HowItWorks;
