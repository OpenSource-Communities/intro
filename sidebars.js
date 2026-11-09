// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // Manually create sidebars for each course
  
    introToOSS: [
      {
        type: 'category',
        label: 'ওপেন সোর্স পরিচিতি',
        items: [
          'intro-to-oss/Contributor-README',
          'intro-to-oss/what-is-open-source',
          'intro-to-oss/why-open-source',
          'intro-to-oss/tools-to-be-successful',
          'intro-to-oss/how-to-contribute-to-open-source',
          'intro-to-oss/the-secret-sauce',
          'intro-to-oss/types-of-contributions',
          'intro-to-oss/conclusion',
          'intro-to-oss/additional-resources',
          'intro-to-oss/glossary',
        ],
      },
    ],
  
    becomingAMaintainer: [
      {
        type: 'category',
        label: 'মেইনটেইনার হওয়ার পথে',
        items: [
          'becoming-a-maintainer/Maintainer-README',
          'becoming-a-maintainer/intro',
          'becoming-a-maintainer/how-to-setup-your-project',
          'becoming-a-maintainer/issues-and-pull-requests',
          'becoming-a-maintainer/communication-and-collaboration',
          'becoming-a-maintainer/maintaining-code-quality',
          'becoming-a-maintainer/building-community',
          'becoming-a-maintainer/maintainer-powerups',
          'becoming-a-maintainer/your-team',
          'becoming-a-maintainer/metrics-and-analytics',
          'becoming-a-maintainer/getting-practical',
          'becoming-a-maintainer/maintainers-guestbook',
          'becoming-a-maintainer/additional-resources',
          'becoming-a-maintainer/glossary',
        ],
      },
    ],
  };
  
  export default sidebars;