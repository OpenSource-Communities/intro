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
        <h1 className={styles.heroTitleOS}>ওপেন সোর্স শিক্ষা পথ</h1>
        <p className={styles.heroSubtitle}>আপনার ওপেন সোর্স যাত্রাকে শক্তিশালী করুন: প্রথম অবদান থেকে প্রজেক্টের নেতৃত্ব পর্যন্ত</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="হোম" description="ওপেন সোর্স শিক্ষা পথে স্বাগতম">
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>ওপেন সোর্স পরিচিতি</h3>
                <p>ওপেন সোর্স প্রজেক্টে অবদান রাখার জন্য প্রয়োজনীয় দক্ষতা ও জ্ঞান অর্জনে সহায়তা করার জন্যই এই কোর্স তৈরি করা হয়েছে। সফল কন্ট্রিবিউটর হওয়ার পথে আপনার যাত্রা শুরু করতে এতে আছে আকর্ষণীয় সব অনুশীলন, এমনকি আপনার প্রথম পুল রিকোয়েস্ট মার্জ করানোর সুযোগও।</p>
                <Link className={styles.cardLink} to="/intro-to-oss">
                  ওপেন সোর্স পরিচিতি কোর্স শুরু করুন
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>মেইনটেইনার হওয়ার পথে</h3>
                <p>যাঁরা ওপেন সোর্স প্রজেক্টের মেইনটেইনার হতে আগ্রহী, তাঁদের সহায়তা করার জন্য এই কোর্স তৈরি করা হয়েছে। এটি মেইনটেইনারদের সেরা চর্চাগুলো সম্পর্কে ধারণা দেয় এবং তাঁদের কাজে সহায়ক রিসোর্স ও টুলের সন্ধান দেয়। হাতে-কলমে শেখার জন্য কোর্সে একটি টিউটোরিয়ালও রয়েছে।</p>
                <Link className={styles.cardLink} to="/becoming-a-maintainer">
                  মেইনটেইনার হওয়ার পথে কোর্স শুরু করুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}