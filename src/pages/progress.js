import React from 'react';
import Layout from '@theme/Layout';
import CourseProgress from '@site/src/components/CourseProgress';
import styles from './progress.module.css';

export default function ProgressPage() {
  return (
    <Layout
      title="আমার শেখার অগ্রগতি"
      description="ওপেন সোর্স কোর্সগুলোতে আপনার অগ্রগতির হিসাব রাখুন"
    >
      <main className={styles.progressPage}>
        <div className="container">
          <h1>আমার শেখার অগ্রগতি</h1>
          <p className={styles.subtitle}>
            আমাদের ওপেন সোর্স কোর্সগুলোতে আপনার অগ্রগতির হিসাব রাখুন। আপনার অগ্রগতি আপনার ব্রাউজারে সংরক্ষিত থাকে।
          </p>
          <CourseProgress />
        </div>
      </main>
    </Layout>
  );
}
