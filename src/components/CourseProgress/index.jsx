import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';
import ProgressBar from './ProgressBar';
import ChapterCard from './ChapterCard';

// Helper function to get/set progress from localStorage
const getStoredProgress = (courseId) => {
  if (typeof window === 'undefined') return {};
  const stored = localStorage.getItem(`course-progress-${courseId}`);
  return stored ? JSON.parse(stored) : {};
};

const saveProgress = (courseId, progress) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`course-progress-${courseId}`, JSON.stringify(progress));
  }
};

const CourseProgress = ({ courseId, chapters: initialChapters }) => {
  const location = useLocation();
  const [chapters, setChapters] = useState(initialChapters);
  
  // Initialize progress from localStorage
  useEffect(() => {
    const storedProgress = getStoredProgress(courseId);
    
    setChapters(prevChapters => 
      prevChapters.map(chapter => ({
        ...chapter,
        status: storedProgress[chapter.id]?.status || 'not-started',
        progress: storedProgress[chapter.id]?.progress || 0
      }))
    );
  }, [courseId]);
  
  // Update chapter status and save to localStorage
  const updateChapterStatus = (chapterId, status, progress) => {
    setChapters(prevChapters => {
      const updatedChapters = prevChapters.map(chapter => 
        chapter.id === chapterId 
          ? { ...chapter, status, progress }
          : chapter
      );
      
      // Save to localStorage
      const progressToSave = {};
      updatedChapters.forEach(chapter => {
        progressToSave[chapter.id] = {
          status: chapter.status,
          progress: chapter.progress
        };
      });
      
      saveProgress(courseId, progressToSave);
      
      return updatedChapters;
    });
  };
  
  // Mark chapter as started/continued
  const handleChapterStart = (chapterId) => {
    updateChapterStatus(chapterId, 'in-progress', 10); // Start with 10% progress
    // You can add navigation logic here
  };
  
  // Calculate overall progress
  const totalChapters = chapters.length;
  const completedChapters = chapters.filter(chapter => chapter.status === 'completed').length;
  const inProgressChapters = chapters.filter(chapter => chapter.status === 'in-progress').length;
  const overallProgress = Math.round((completedChapters / totalChapters) * 100);
  
  // Auto-detect current chapter based on URL
  useEffect(() => {
    if (!chapters.length) return;
    
    // Get the current path and find the matching chapter
    const currentPath = location.pathname;
    const currentChapter = chapters.find(chapter => 
      chapter.path && currentPath.includes(chapter.path)
    );
    
    if (currentChapter && currentChapter.status === 'not-started') {
      updateChapterStatus(currentChapter.id, 'in-progress', 10);
    }
  }, [location.pathname, chapters]);

  return (
    <div className={styles.courseProgress}>
      <h2>Course Progress</h2>
      <ProgressBar percentage={overallProgress} />
      
      <div className={styles.chapterList}>
        {chapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            id={chapter.id}
            title={chapter.title}
            status={chapter.status}
            progress={chapter.status === 'completed' ? 100 : chapter.progress || 0}
            timeEstimate={chapter.timeEstimate}
            onStart={() => handleChapterStart(chapter.id)}
            path={chapter.path}
            isCurrent={location.pathname.includes(chapter.path || '')}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;
