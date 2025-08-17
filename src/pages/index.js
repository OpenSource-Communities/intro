import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitleOS}>Open Source Education Path</h1>
        <p className={styles.heroSubtitle}>Empowering Your Open Source Journey: From First Contribution to Project Leadership</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Welcome to Open Source Education Path">
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>Intro to Open Source</h3>
                <p>This course is designed to equip you with the skills and knowledge you need to contribute to open source projects. It offers engaging exercises to help you begin your journey towards becoming a successful contributor, and even provides an opportunity to get your first pull request merged.</p>
                <Link className={styles.cardLink} to="/intro-to-oss">
                  Start the Intro to Open Source Course
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>Becoming a Maintainer</h3>
                <p>This course is designed to aid people who are interested in becoming open source project maintainers. It guides you through maintainers' best practices and provides resources and tools that help maintainers perform their tasks. This course is equipped with a tutorial for you to get practical.</p>
                <Link className={styles.cardLink} to="/becoming-a-maintainer">
                  Start the Becoming a Maintainer Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}