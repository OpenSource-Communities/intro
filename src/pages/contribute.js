import React from 'react';
import Layout from '@theme/Layout';
import styles from './contribute.module.css';

function ContributeHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Contribute to This Course</h1>
        <p className={styles.subtitle}>
          This project itself is open source. The platform you're learning from welcomes contributions from the community.
        </p>
      </div>
    </header>
  );
}

function ContributeSection({ title, description, points, action }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.pointsList}>
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
      {action && (
        <a className={styles.actionButton} href={action.url} target="_blank" rel="noopener noreferrer">
          {action.text} →
        </a>
      )}
    </div>
  );
}

export default function Contribute() {
  return (
    <Layout title="Contribute" description="Contribute to the Open Source Education Path">
      <ContributeHeader />
      <main className={styles.main}>
        <div className="container">
          <section className={styles.quickStart}>
            <h2>Getting Started</h2>
            <p>Contributing to this project is straightforward. Here's a simple 4-step process:</p>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h4>Fork & Clone</h4>
                <p>Fork the repository and clone it to your local machine.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h4>Create Branch</h4>
                <p>Create a new branch for your changes using: <code>git checkout -b feat/your-feature</code></p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h4>Make Changes</h4>
                <p>Make your changes and test them thoroughly in your local environment.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h4>Submit PR</h4>
                <p>Push your changes and create a pull request with a clear, detailed description.</p>
              </div>
            </div>
          </section>

          <section className={styles.contributionTypes}>
            <h2>Ways to Contribute</h2>
            <p>There are many ways to help improve this educational platform. Choose the area that interests you:</p>
            <div className={styles.grid}>
              <ContributeSection
                title="Content & Documentation"
                description="Help improve the quality of our educational materials. We welcome corrections, clarifications, and additions that make the content more useful for learners."
                points={[
                  'Fix typos, grammar, and spelling errors',
                  'Clarify confusing or ambiguous explanations',
                  'Add more practical examples and use cases',
                  'Improve and enhance code snippets',
                  'Update outdated information and resources'
                ]}
                action={{
                  text: 'View Documentation Issues',
                  url: 'https://github.com/OpenSource-Communities/intro/issues?q=is%3Aissue+is%3Aopen+label%3Adocumentation'
                }}
              />

              <ContributeSection
                title="Code & Features"
                description="Help build new features, fix bugs, and improve the technical aspects of the platform. This includes UI components, styling, and performance optimizations."
                points={[
                  'Add interactive learning components',
                  'Fix UI and user experience bugs',
                  'Improve design, layout, and styling',
                  'Optimize page performance and loading times',
                  'Implement requested features and enhancements'
                ]}
                action={{
                  text: 'View Code Issues',
                  url: 'https://github.com/OpenSource-Communities/intro/issues?q=is%3Aissue+is%3Aopen+label%3Acode'
                }}
              />

              <ContributeSection
                title="Translations & Localization"
                description="Help make this course accessible to people around the world by translating and localizing content. We have guidelines to ensure consistency and quality."
                points={[
                  'Translate course content to new languages',
                  'Localize examples and cultural references',
                  'Proofread and review existing translations',
                  'Help maintain translation quality and consistency',
                  'Add support for new languages and regions'
                ]}
                action={{
                  text: 'View i18n Guidelines',
                  url: 'https://github.com/OpenSource-Communities/intro/blob/main/contributing/i18n-guidelines.md'
                }}
              />

              <ContributeSection
                title="Community & Support"
                description="Strengthen our community by helping other learners, sharing your experiences, and providing feedback. Community contributions are just as valuable."
                points={[
                  'Help answer questions in discussions',
                  'Share your success stories and learnings',
                  'Report bugs and issues you discover',
                  'Suggest improvements and new ideas',
                  'Mentor newer contributors and help them get started'
                ]}
                action={{
                  text: 'Join Community Discussions',
                  url: 'https://github.com/OpenSource-Communities/intro/discussions'
                }}
              />
            </div>
          </section>

          <section className={styles.resources}>
            <h2>Resources & Guidelines</h2>
            <p>Everything you need to know before you start contributing:</p>
            <div className={styles.resourcesList}>
              <div className={styles.resourceItem}>
                <h4>Contributing Guidelines</h4>
                <p>Our detailed guide on how to contribute, including coding standards, commit conventions, and the PR process.</p>
                <a 
                  href="https://github.com/OpenSource-Communities/intro/blob/main/contributing/CONTRIBUTING.md" 
                  className={styles.resourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Guidelines
                </a>
              </div>

              <div className={styles.resourceItem}>
                <h4>Report an Issue</h4>
                <p>Found a bug? Have a suggestion? Create an issue on GitHub. We use issue templates to help you provide all necessary information.</p>
                <a 
                  href="https://github.com/OpenSource-Communities/intro/issues/new/choose" 
                  className={styles.resourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Create New Issue
                </a>
              </div>

              <div className={styles.resourceItem}>
                <h4>Community Discussions</h4>
                <p>Have questions or want to discuss ideas? Join our community discussions to connect with other contributors and get help.</p>
                <a 
                  href="https://github.com/OpenSource-Communities/intro/discussions" 
                  className={styles.resourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discussions
                </a>
              </div>

              <div className={styles.resourceItem}>
                <h4>GitHub Repository</h4>
                <p>Explore the full source code, see what's in progress, and understand the project structure. All our code is publicly available.</p>
                <a 
                  href="https://github.com/OpenSource-Communities/intro" 
                  className={styles.resourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Repository
                </a>
              </div>
            </div>
          </section>

          <section className={styles.cta}>
            <h2>Ready to Start Contributing?</h2>
            <p>Whether you're fixing a typo or building a new feature, every contribution helps improve the learning experience for thousands of people learning about open source. We appreciate your help!</p>
            <div className={styles.ctaButtons}>
              <a 
                href="https://github.com/OpenSource-Communities/intro/fork" 
                className={styles.primaryButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fork on GitHub
              </a>
              <a 
                href="https://github.com/OpenSource-Communities/intro/blob/main/contributing/CONTRIBUTING.md" 
                className={styles.secondaryButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Guidelines
              </a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
