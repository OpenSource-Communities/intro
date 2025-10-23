import React, { useCallback } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

const ChapterCard = ({ 
  id, 
  title, 
  status, 
  progress, 
  timeEstimate, 
  onStart,
  path,
  isCurrent
}) => {
  const isCompleted = status === 'completed';
  const isInProgress = status === 'in-progress';
  const location = useLocation();

  const handleAction = useCallback((e) => {
    e.preventDefault();
    if (!isCompleted && !isInProgress) {
      onStart?.();
    }
    // If the chapter has a path, let the link handle navigation
    // The progress update will happen via the URL change detection
  }, [isCompleted, isInProgress, onStart]);
  
  return (
    <div 
      className={`${styles.chapterCard} 
        ${isCompleted ? styles.completed : ''} 
        ${isCurrent ? styles.currentChapter : ''}`}
    >
      <div className={styles.chapterHeader}>
        <span className={styles.chapterNumber}>Chapter {id}</span>
        {isCompleted ? (
          <span className={styles.statusBadge}>
            <span className={styles.checkmark}>✓</span> Completed
          </span>
        ) : isInProgress ? (
          <span className={`${styles.statusBadge} ${styles.inProgressBadge}`}>
            In Progress
          </span>
        ) : null}
      </div>
      
      <h3 className={styles.chapterTitle}>{title}</h3>
      
      <div className={styles.progressContainer}>
        <div 
          className={styles.chapterProgress} 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className={styles.chapterFooter}>
        <span className={styles.timeEstimate}>⏱️ {timeEstimate}</span>
        {path ? (
          <a 
            href={path} 
            className={`${styles.actionButton} ${isCompleted ? styles.completedButton : ''}`}
            onClick={handleAction}
          >
            {isCompleted ? 'Review' : isInProgress ? 'Continue' : 'Start'}
          </a>
        ) : (
          <button 
            className={`${styles.actionButton} ${isCompleted ? styles.completedButton : ''}`}
            onClick={handleAction}
            disabled={isCompleted}
          >
            {isCompleted ? 'Completed' : isInProgress ? 'Continue' : 'Start'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ChapterCard;
