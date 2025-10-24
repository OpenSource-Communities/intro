import React from 'react';
import Layout from '@theme/Layout';
import CourseProgress from '@site/src/components/CourseProgress';
import styles from './progress.module.css';

export default function ProgressPage() {
  return (
    <Layout
      title="My Learning Progress"
      description="Track your progress through the Open Source courses"
    >
      <main className={styles.progressPage}>
        <div className="container">
          <h1>My Learning Progress</h1>
          <p className={styles.subtitle}>
            Track your progress through our Open Source courses. Your progress is saved in your browser.
          </p>
          <CourseProgress />
        </div>
      </main>
    </Layout>
  );
}
