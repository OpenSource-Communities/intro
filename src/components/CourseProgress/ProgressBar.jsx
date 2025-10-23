import React from 'react';
import styles from './styles.module.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span className={styles.progressText}>{percentage}% Complete</span>
      </div>
    </div>
  );
};

export default ProgressBar;
