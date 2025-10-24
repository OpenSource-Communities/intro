import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// SVG Icons
const Check = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Moon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Sun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const courses = [
  {
    id: "intro-to-oss",
    title: "Intro to Open Source",
    url: "/docs/intro-to-oss",
    chapters: [
      { id: "ch1", title: "What is Open Source?" },
      { id: "ch2", title: "Understanding Open Source Licenses" },
      { id: "ch3", title: "The Open Source Ecosystem" },
      { id: "ch4", title: "Finding the Right Project" },
      { id: "ch5", title: "Reading and Understanding Documentation" },
      { id: "ch6", title: "Setting Up Your Development Environment" },
      { id: "ch7", title: "Understanding Git and GitHub" },
      { id: "ch8", title: "Making Your First Contribution" },
      { id: "ch9", title: "Code Review Best Practices" },
      { id: "ch10", title: "Building Your Open Source Portfolio" }
    ]
  },
  {
    id: "becoming-a-maintainer",
    title: "Becoming a Maintainer",
    url: "/docs/becoming-a-maintainer",
    chapters: [
      { id: "ch1", title: "The Role and Responsibilities of a Maintainer" },
      { id: "ch2", title: "Project Governance Models" },
      { id: "ch3", title: "Managing Pull Requests and Issues" },
      { id: "ch4", title: "Code Review as a Maintainer" },
      { id: "ch5", title: "Building and Nurturing Community" },
      { id: "ch6", title: "Handling Difficult Situations and Conflicts" },
      { id: "ch7", title: "Release Management and Versioning" },
      { id: "ch8", title: "Documentation and Communication" },
      { id: "ch9", title: "Sustainability and Avoiding Burnout" },
      { id: "ch10", title: "Growing and Onboarding New Maintainers" }
    ]
  }
];

export default function CourseProgress() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [completedChapters, setCompletedChapters] = useState(new Set());
  const [allProgress, setAllProgress] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference
  useEffect(() => {
    const saved = localStorage.getItem("dark-mode");
    if (saved) {
      setDarkMode(JSON.parse(saved));
    }
    
    // Check for system preference if no saved preference
    if (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Save dark mode preference and apply to document
  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  // Load progress for all courses
  useEffect(() => {
    const progressData = {};
    courses.forEach((course) => {
      const saved = localStorage.getItem(`course-progress-${course.id}`);
      progressData[course.id] = saved ? JSON.parse(saved).length : 0;
    });
    setAllProgress(progressData);
  }, [completedChapters]);

  // Load progress for selected course
  useEffect(() => {
    const saved = localStorage.getItem(`course-progress-${selectedCourse.id}`);
    setCompletedChapters(new Set(saved ? JSON.parse(saved) : []));
  }, [selectedCourse.id]);

  // Save progress to localStorage
  useEffect(() => {
    if (completedChapters.size > 0) {
      localStorage.setItem(
        `course-progress-${selectedCourse.id}`,
        JSON.stringify(Array.from(completedChapters))
      );
    }
  }, [completedChapters, selectedCourse.id]);

  const toggleChapter = (chapterId) => {
    setCompletedChapters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId);
      } else {
        newSet.add(chapterId);
      }
      return newSet;
    });
  };

  const getCourseProgress = (courseId) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    const completed = allProgress[courseId] || 0;
    return (completed / course.chapters.length) * 100;
  };

  const progress = (completedChapters.size / selectedCourse.chapters.length) * 100;

  return (
    <div className={clsx(styles.courseTracker, 'container')}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h3>Course Progress</h3>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={styles.themeToggle}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun className={styles.icon} />
            ) : (
              <Moon className={styles.icon} />
            )}
          </button>
        </div>
        
        <div className={styles.courseList}>
          {courses.map((course) => {
            const courseProgress = getCourseProgress(course.id);
            const completed = allProgress[course.id] || 0;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className={clsx(styles.courseButton, {
                  [styles.activeCourse]: selectedCourse.id === course.id
                })}
              >
                <div className={styles.courseTitle}>{course.title}</div>
                <div className={styles.progressBarContainer}>
                  <div 
                    className={styles.progressBar}
                    style={{ width: `${courseProgress}%` }}
                  />
                </div>
                <div className={styles.progressText}>
                  {completed}/{course.chapters.length}
                </div>
              </button>
            );
          })}
        </div>

        <div className={styles.chapterList}>
          {selectedCourse.chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => toggleChapter(chapter.id)}
              className={styles.chapterButton}
            >
              <span className={styles.chapterNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.chapterTitle}>
                {chapter.title}
              </span>
              {completedChapters.has(chapter.id) && (
                <Check className={styles.checkIcon} />
              )}
            </button>
          ))}
        </div>

        <div className={styles.progressSummary}>
          <div className={styles.progressText}>
            {completedChapters.size} of {selectedCourse.chapters.length} completed
          </div>
          <div className={styles.progressBarContainer}>
            <div 
              className={clsx(styles.progressBar, styles.mainProgressBar)}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h1>{selectedCourse.title}</h1>
        <p className={styles.subtitle}>
          Click on chapters in the sidebar to mark them as complete. 
          Your progress is automatically saved in your browser.
        </p>

        <div className={styles.progressCard}>
          <div className={styles.progressHeader}>
            <div>
              <h3>Course Progress</h3>
              <p>
                {completedChapters.size} of {selectedCourse.chapters.length} chapters completed
              </p>
            </div>
            <div className={styles.progressPercentage}>
              {Math.round(progress)}%
            </div>
          </div>
          <div className={styles.progressBarFull}>
            <div 
              className={styles.progressBarFill}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className={styles.overview}>
          <h2>Course Overview</h2>
          <p>
            This is a progress tracker for the{' '}
            <a
              href={selectedCourse.url}
              className={styles.courseLink}
            >
              {selectedCourse.title}
            </a>{' '}
            course. Use the sidebar to track your learning progress through each chapter.
          </p>

          <h3>How to Use</h3>
          <ul className={styles.featureList}>
            <li>Click on any chapter in the sidebar to mark it as complete</li>
            <li>A green checkmark will appear next to completed chapters</li>
            <li>Your progress is saved automatically in your browser</li>
            <li>Switch between courses using the buttons in the sidebar</li>
          </ul>

          <h3>Chapters</h3>
          <p>
            This course contains {selectedCourse.chapters.length} chapters covering
            essential topics. Work through them at your own pace and track your progress.
          </p>
        </div>
      </div>
    </div>
  );
}
