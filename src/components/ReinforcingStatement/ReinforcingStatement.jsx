import React from 'react';
import { TertiaryHeading } from '../../common';
import styles from './ReinforcingStatement.module.css';
import statementImg from '../../assets/statement-img.webp';

function ReinforcingStatement() {
  return (
    <div className={`${styles.statement}`}>
      <div className={styles.statementImg}>
        <img src={statementImg} alt="smiling lady" />
      </div>
      <div className={styles.statementText}>
        <TertiaryHeading
          text={'Keep track of your contributions on the go'}
          color={'var(--white-color)'}
        />
        <p className={styles.statementDescription}>
          from anywhere you are in the world you can keep up with all your
          perodic contributions (ajoo, esusu, adaji, akawo) with your trusted
          preferred agent nationwide
        </p>
      </div>
    </div>
  );
}

export default ReinforcingStatement;
