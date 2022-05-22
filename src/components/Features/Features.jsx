import React from 'react';
import { SecondaryHeading, TertiaryHeading } from '../../common';
import styles from './Features.module.css';
import iphone from '../../assets/iPhone 12 Pro.svg';
import { Fade } from 'react-reveal';

function Features() {
  return (
    <div className="container">
      <div className={styles.headingText}>
        <SecondaryHeading
          text={'We offer you transparency and adequate record keeping.'}
          color={'var(--primary-text-color)'}
        />
        <p className={styles.description}>
          AjooVest for Enterprise allows easy transparent loan repayment
          practise for MFBs AjooVest for Banked Informal individuals allows card
          remittances on app
        </p>
      </div>
      <div className={styles.features}>
        <div className={styles.featureImg}>
          <img src={iphone} alt="iphone 12" />
        </div>
        <Fade right cascade>
          <div className={styles.featureText}>
            <TertiaryHeading
              text={'Analyze your contributions and monitor your balance'}
              color={'var(  --primary-text-color)'}
            />
            <p>
              Build a credit history, get rewarded for responsible financial
              behaviour.
            </p>
            <a href="/">Learn more</a>
          </div>
        </Fade>

        <div className={styles.featureText}>
          <TertiaryHeading text={'Target savings and group savings'} />
          <p>
            We bring you into a world where there are endless possibilities and
            opportunities Save for specific financial targets Save with your
            friends, family, groups, etc.
          </p>
          <a href="/">Learn more</a>
        </div>
        <div className={styles.featureImg}>
          <img src={iphone} alt="iphone 12" />
        </div>
      </div>
    </div>
  );
}

export default Features;
