/**
 * Automatically enable word wrap in code blocks on mobile devices
 * This script clicks the word wrap button when the page loads on mobile screens
 */

function enableWordWrapOnMobile() {
  // Check if we're on a mobile device (screen width <= 996px)
  if (window.innerWidth <= 996) {
    // Wait for the DOM to be fully loaded and code blocks to render
    setTimeout(() => {
      // Find all word wrap buttons
      // The button has class 'clean-btn' and when enabled also has 'wordWrapButtonEnabled_*'
      const wordWrapButtons = document.querySelectorAll('.clean-btn[aria-label*="word wrap"], .clean-btn[aria-label*="Word wrap"], .clean-btn[title*="word wrap"], .clean-btn[title*="Word wrap"]');
      
      wordWrapButtons.forEach(button => {
        // Check if the button is NOT already enabled
        // When enabled, it has a class containing 'wordWrapButtonEnabled'
        const isEnabled = Array.from(button.classList).some(className => 
          className.includes('wordWrapButtonEnabled')
        );
        
        if (!isEnabled) {
          // Click the button to enable word wrap
          button.click();
        }
      });
    }, 500); // Wait 500ms for code blocks to render
  }
}

// Run on initial page load
if (typeof window !== 'undefined') {
  // Execute when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enableWordWrapOnMobile);
  } else {
    enableWordWrapOnMobile();
  }
  
  // Also run when navigating between pages (Docusaurus uses client-side routing)
  window.addEventListener('popstate', enableWordWrapOnMobile);
  
  // Listen for route changes in Docusaurus
  if (window.docusaurus) {
    window.docusaurus.prefetch = function() {
      // Hook into Docusaurus navigation
      enableWordWrapOnMobile();
    };
  }
  
  // Use MutationObserver to detect when new code blocks are added to the page
  const observer = new MutationObserver((mutations) => {
    let shouldCheck = false;
    
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          // Check if a code block or button was added
          if (node.nodeType === 1) { // Element node
            if (node.matches && (
              node.matches('.theme-code-block') || 
              node.matches('.clean-btn') ||
              node.querySelector('.theme-code-block') ||
              node.querySelector('.clean-btn')
            )) {
              shouldCheck = true;
            }
          }
        });
      }
    });
    
    if (shouldCheck) {
      enableWordWrapOnMobile();
    }
  });
  
  // Start observing the document body for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
