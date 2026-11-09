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
    title: "ওপেন সোর্স পরিচিতি",
    url: "/docs/intro-to-oss",
    chapters: [
      { id: "ch1", title: "ওপেন সোর্স কী?" },
      { id: "ch2", title: "ওপেন সোর্স লাইসেন্স বোঝা" },
      { id: "ch3", title: "ওপেন সোর্স ইকোসিস্টেম" },
      { id: "ch4", title: "সঠিক প্রজেক্ট খুঁজে নেওয়া" },
      { id: "ch5", title: "ডকুমেন্টেশন পড়া ও বোঝা" },
      { id: "ch6", title: "আপনার ডেভেলপমেন্ট এনভায়রনমেন্ট সেটআপ করা" },
      { id: "ch7", title: "Git ও GitHub বোঝা" },
      { id: "ch8", title: "আপনার প্রথম অবদান রাখা" },
      { id: "ch9", title: "কোড রিভিউয়ের সেরা চর্চা" },
      { id: "ch10", title: "আপনার ওপেন সোর্স পোর্টফোলিও গড়ে তোলা" }
    ]
  },
  {
    id: "becoming-a-maintainer",
    title: "মেইনটেইনার হওয়ার পথে",
    url: "/docs/becoming-a-maintainer",
    chapters: [
      { id: "ch1", title: "মেইনটেইনারের ভূমিকা ও দায়িত্ব" },
      { id: "ch2", title: "প্রজেক্ট গভর্নেন্স মডেল" },
      { id: "ch3", title: "পুল রিকোয়েস্ট ও ইস্যু পরিচালনা" },
      { id: "ch4", title: "মেইনটেইনার হিসেবে কোড রিভিউ" },
      { id: "ch5", title: "কমিউনিটি গড়ে তোলা ও লালন করা" },
      { id: "ch6", title: "কঠিন পরিস্থিতি ও দ্বন্দ্ব সামলানো" },
      { id: "ch7", title: "রিলিজ ম্যানেজমেন্ট ও ভার্সনিং" },
      { id: "ch8", title: "ডকুমেন্টেশন ও যোগাযোগ" },
      { id: "ch9", title: "টেকসই কাজের ধারা ও বার্নআউট এড়ানো" },
      { id: "ch10", title: "নতুন মেইনটেইনার তৈরি ও অনবোর্ডিং" }
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
          <h3>কোর্সের অগ্রগতি</h3>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={styles.themeToggle}
            aria-label={darkMode ? 'লাইট মোডে যান' : 'ডার্ক মোডে যান'}
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
            {selectedCourse.chapters.length}টির মধ্যে {completedChapters.size}টি সম্পন্ন
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
          সম্পন্ন চিহ্নিত করতে সাইডবারে অধ্যায়ের ওপর ক্লিক করুন।
          আপনার অগ্রগতি স্বয়ংক্রিয়ভাবে আপনার ব্রাউজারে সংরক্ষিত হয়।
        </p>

        <div className={styles.progressCard}>
          <div className={styles.progressHeader}>
            <div>
              <h3>কোর্সের অগ্রগতি</h3>
              <p>
                {selectedCourse.chapters.length}টি অধ্যায়ের মধ্যে {completedChapters.size}টি সম্পন্ন
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
          <h2>কোর্সের সারসংক্ষেপ</h2>
          <p>
            এটি{' '}
            <a
              href={selectedCourse.url}
              className={styles.courseLink}
            >
              {selectedCourse.title}
            </a>{' '}
            কোর্সের অগ্রগতি ট্র্যাকার। প্রতিটি অধ্যায়ে আপনার শেখার অগ্রগতি দেখতে সাইডবার ব্যবহার করুন।
          </p>

          <h3>কীভাবে ব্যবহার করবেন</h3>
          <ul className={styles.featureList}>
            <li>সম্পন্ন চিহ্নিত করতে সাইডবারের যেকোনো অধ্যায়ে ক্লিক করুন</li>
            <li>সম্পন্ন অধ্যায়ের পাশে সবুজ টিক চিহ্ন দেখা যাবে</li>
            <li>আপনার অগ্রগতি স্বয়ংক্রিয়ভাবে ব্রাউজারে সংরক্ষিত হয়</li>
            <li>সাইডবারের বোতাম দিয়ে এক কোর্স থেকে অন্য কোর্সে যান</li>
          </ul>

          <h3>অধ্যায়সমূহ</h3>
          <p>
            এই কোর্সে প্রয়োজনীয় বিষয়গুলো নিয়ে {selectedCourse.chapters.length}টি অধ্যায় রয়েছে। নিজের গতিতে অধ্যায়গুলো শেষ করুন এবং অগ্রগতির হিসাব রাখুন।
          </p>
        </div>
      </div>
    </div>
  );
}
