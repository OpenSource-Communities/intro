// Helper function to get progress from localStorage
export const getStoredProgress = (courseId) => {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem(`course-progress-${courseId}`);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error reading progress from localStorage:', error);
    return {};
  }
};

// Helper function to save progress to localStorage
export const saveProgress = (courseId, progress) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(`course-progress-${courseId}`, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress to localStorage:', error);
    }
  }
};

// Calculate overall course progress
export const calculateCourseProgress = (chapters) => {
  if (!chapters?.length) return 0;
  
  const totalChapters = chapters.length;
  const completedChapters = chapters.filter(chapter => chapter.status === 'completed').length;
  
  return Math.round((completedChapters / totalChapters) * 100);
};

// Mark a chapter as completed
export const markChapterComplete = (courseId, chapterId, chapters) => {
  const updatedChapters = chapters.map(chapter => {
    if (chapter.id === chapterId) {
      return { 
        ...chapter, 
        status: 'completed',
        progress: 100,
        completedAt: new Date().toISOString()
      };
    }
    return chapter;
  });

  // Save to localStorage
  const progressToSave = {};
  updatedChapters.forEach(chapter => {
    progressToSave[chapter.id] = {
      status: chapter.status,
      progress: chapter.progress,
      completedAt: chapter.completedAt
    };
  });

  saveProgress(courseId, progressToSave);
  return updatedChapters;
};

// Get the next chapter to continue
// Helper function to get the next chapter to continue
export const getNextChapter = (currentPath, chapters) => {
  if (!chapters?.length) return null;
  
  // Find the current chapter index
  const currentIndex = chapters.findIndex(chapter => 
    chapter.path && currentPath.includes(chapter.path)
  );
  
  // If current chapter not found or it's the last one, return null
  if (currentIndex === -1 || currentIndex === chapters.length - 1) {
    return null;
  }
  
  // Return the next chapter
  return chapters[currentIndex + 1];
};

// Get chapter by ID
export const getChapterById = (chapters, chapterId) => {
  return chapters.find(chapter => chapter.id === chapterId);
};

// Get chapter by path
export const getChapterByPath = (chapters, path) => {
  return chapters.find(chapter => chapter.path && path.includes(chapter.path));
};
