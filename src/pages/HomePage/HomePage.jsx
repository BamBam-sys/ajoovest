import React, { useContext } from 'react';
import {
  CallToAction,
  Features,
  Footer,
  Hero,
  HowItWorks,
  ReinforcingStatement,
} from '../../components';
import styles from './HomePage.module.css';

import { appContext } from '../../context';

function HomePage() {
  const { useObserver } = useContext(appContext);

  const [ref] = useObserver();
  //{ rootMargin: '-50px' }
  return (
    <main>
      <section ref={ref} className={styles.hero}>
        <Hero />
      </section>
      <section className={styles.statement}>
        <ReinforcingStatement />
      </section>
      <section className={styles.howItWorks}>
        <HowItWorks />
      </section>
      <section className={styles.features}>
        <Features />
      </section>
      <section className={styles.cta}>
        <CallToAction />
      </section>
      <section className={styles.footer}>
        <Footer />
      </section>
    </main>
  );
}

export default HomePage;
