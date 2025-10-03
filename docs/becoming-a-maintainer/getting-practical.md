---
id: getting-practical
title: "Let's Get Practical: Starting Your Project"
sidebar_label: "Getting Practical"
keywords: ["getting practical by creating a new open source project", "creating an open source project", "creating an open source project tutorial", "creating an open source project for beginners", "creating a repository", "creating a README", "adding an open source license", "creating contributing guidelines for an open source project", "adding an open source code of conduct", "creating open source issue forms", "creating an open source pull request template", "promoting open source projects", "recognizing open source contributors", "monitoring open source projects", "open source maintainers", "Open Source", "Open Source Community"]
---

Now that you've gone through the course and understand what it takes to be a successful maintainer, let's get practical and start your first open source project as a maintainer!

## Prerequisites

You'll need the following:

- A [GitHub Account](https://github.com)

## Choosing Your Project

Sometimes, the hardest part is deciding what to work on. Here are some general ideas to get you started:

- Identify a problem or need in the open source community.
- Think about a topic you're passionate about that others might be interested in.
- Think about a problem you've had to solve that others can benefit from.

Don't overthink it for now. You can always go back and update things later. For now, if you need a place to start, let's create a repository for your favorite open source resources.

## Creating Your Repository

We will walk through the steps to set up your project in GitHub. Although it's not the only way to get started with a project, it's the one we'll use in this demonstration.

- Go to [GitHub](https://github.com) and sign in.
- Click on the "+" icon in the upper right corner and select "New repository."
- Enter a repository name and description, and choose whether the repository should be public or private.
- Initialize the repository with a README file and add a license.
- Click the "Create repository" button.

![setting up a repo](../_assets/gifs/set-up-repo.gif)

If you're using our starter idea, you could use the following:

    - Name: favorite-open-source-resources
    - Description: A markdown file of resources I've found most helpful.

## Adding Repository Documentation

Now that you have the repository, you can either edit it directly on GitHub or clone the project and work on it locally. We previously learned how to create detailed READMEs, contributing guides, and codes of conduct in "[How to Setup Your Open Source Project](how-to-setup-your-project.md)". If you need a reminder, take a look back at that chapter.

### Creating Your README

Your project already has a README file, but it's a good idea to update it with information about your project. Here's a template you can use:

```markdown
# Project Name

## Overview

Provide a brief, high-level overview of your project. Include the goals and core values of the project. Explain how it contributes to the open source community and any specific problems it aims to solve.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contributing to the Project](#contributing-to-the-project)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Getting Started

### Installation

Instructions on how to install the project. Include any prerequisites or dependencies.

### Usage

Guide on how to use the project, including any configuration steps or basic examples.

## Contributing to the Project

General instructions on how to submit contributions to the project, with a link to your CONTRIBUTING.md file. Also, include information on how to engage with the community and maintainers.

## Acknowledgments

Show appreciation for the community's contributions, including developers, writers, and any other contributors.

## License

State the license under which the project is released and provide a link to the full license text.
```

### Adding a License

You should have initialized your project with a license, but if you did not, you can add a license to your project by creating a new file named `LICENSE` in the root of your repository. You can use the [Choose a License](https://choosealicense.com/) website to help you select the right license for your project.

### Setting Up Contributing Guidelines

Your project will likely have similar contribution guidelines to other projects. You can follow these steps to create guidelines and provide a template. However, if you need a specific example, you can always refer to the [OpenSauced Contributing Guidelines](https://opensauced.pizza/docs/contributing/introduction-to-contributing/). Feel free to use those guidelines and update them as you see fit for your project.

- [ ] Create a new file named `CONTRIBUTING.md` in the root of your repository.
- [ ] Outline the process for submitting issues and pull requests.
- [ ] Include coding standards, style guides, or any specific requirements.
- [ ] Mention how contributors can ask for help or clarification.

#### Contributing Guidelines Template

```markdown
# Contributing to [Project Name]

Welcome to [Project Name]! We're thrilled you're considering contributing to our project. Every contribution, whether it's code, bug reports, feature requests, documentation, or community engagement, plays a significant role in its success.

## How to Contribute

We value all forms of contributions, not just code. Here's how you can contribute:

- **Code Contributions**: Check our issues labeled `good first issue` or `help wanted`.
- **Documentation**: Improvements to documentation, tutorials, or guides.
- **Community**: Participating in discussions, helping others, and sharing your experiences with the project.

## Getting Started

1. **Setting Up**: Here's how you can set up [Project Name] for development...
2. **Making Changes**: A guide to making changes and testing them.
3. **Submitting Contributions**: Steps to submit your contributions via Pull Requests.

## Community and Communication

- **Code of Conduct**: We have a Code of Conduct that all contributors are expected to adhere to.
- **Where to Ask Questions**: Join our Slack/Discord or post questions in our forums.

## Review Process

After you submit your contribution, here's what happens next...

## Recognition

We believe in recognizing all contributions, not just code. Here's how we do it...

## Additional Resources

- **FAQs**
- **Learning Resources**

Thank you for contributing to [Project Name]!
```

### Setting Up a Code of Conduct

It's essential to have a code of conduct to ensure that everyone feels welcome and safe in your project. There are two ways to add one to your project:

1. **Use a template**. GitHub provides common code of conduct templates to help you set one up quickly. You can read [the instructions on their docs](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project#adding-a-code-of-conduct-using-a-template) to add one to your project.

2. **Add manually**. If you want to copy or adapt from other codes of conduct, you need to add your code of conduct manually by following these steps:

   - [ ] Create a new file named `CONTRIBUTING.md` in the root of your repository.
   - [ ] Copy and paste the code of conduct you'd like to use. We recommend using the [Contributor Covenant](https://www.contributor-covenant.org/).
   - [ ] Add a link to the code of conduct in your README and CONTRIBUTING files.

   :::note
   
   Make sure you attribute the code of conduct to the original author.

   :::

### Using Issue Forms, Pull Request Templates, and Labels

Creating good issues and using labels will help to create a strong project. Before creating your first issue, start by creating issue templates to make the process of submitting an issue clear to your contributors.

#### Creating Issue Forms

In this section, we will create an issue template for a bug report. You can also create templates for other types of issues, such as feature requests, questions, or documentation requests.

Below are the steps to create the template. After the steps, we'll share with you what we use at OpenSauced. Feel free to copy and paste that information into your repository and update it as needed.

##### Bug Report

- [ ] Create a new folder named `.github` in the root of your repository.
- [ ] Within that folder, create a new folder named `ISSUE_TEMPLATE`.
- [ ] In the `.github/ISSUE_TEMPLATE` directory, create a new file named `bug_report.yml`.
- [ ] Add a name (🐛 Bug report), description (Create a bug report to help us improve Open Sauced 🍕) to the template, and title ("Bug: ").
- [ ] If there are specific labels you want automatically generated when this issue is created, add them to the template. (`labels: [👀 needs triage, 🐛 bug]`)
- [ ] Next, you'll add the body, which includes the type and attributes for each section. This generally contains a checklist of steps to reproduce the bug. As part of that section, you should:
  - [ ] Add a section for the expected behavior and actual behavior.
  - [ ] Add a checklist of steps to reproduce the bug.
  - [ ] Add a section for screenshots, if applicable.
  - [ ] Add a section for additional context, if applicable.
- [ ] Finally, add a section for the code of conduct and contributing docs.

Here's what we use at OpenSauced:

```yml
name: 🐛 Bug report
description: Create a bug report to help us improve Open Sauced 🍕
title: "Bug: "
labels: [👀 needs triage, 🐛 bug]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  - type: textarea
    attributes:
      label: Describe the bug
      description: A clear and concise description of what the bug is.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Steps to reproduce
      description: Describe how to reproduce the behavior.
      placeholder: |
        1. Go to '...'
        2. Click on '...'
        3. Scroll down to '...'
        4. See error
    validations:
      required: true
  - type: dropdown
    attributes:
      multiple: true
      label: Browsers
      description: Select the browsers where the issue can be reproduced (that you know of).
      options:
        - "Chrome"
        - "Firefox"
        - "Safari"
        - "Edge"
        - "Opera"
        - "Other (add additional context)"
  - type: input
    id: context
    attributes:
      label: Additional context (Is this in dev or production?)
      description: Add any other context about the problem or helpful links here.
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://opensauced.pizza/docs/contributing/code-of-conduct/)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
  - type: checkboxes
    id: contribution
    attributes:
      label: Contributing Docs
      description: If you plan on contributing code please read - [Contribution Guide](https://opensauced.pizza/docs/contributing/introduction-to-contributing/)
      options:
        - label: I agree to follow this project's Contribution Docs
          required: false
```

##### Feature Request

Now, let's follow the same process and make a feature request template.

- [ ] In the `.github/ISSUE_TEMPLATE` directory, create a new file named `feature_request.yml`.
- [ ] Add a name (🚀 Feature request), description (Suggest an idea for this project 💡), and title ("Feature: ") to the template.
- [ ] If there are specific labels you want automatically generated when this issue is created, add them to the template. We use 👀 needs triage, 💡 feature.
- [ ] Next, you'll add the body, which includes the type and attributes for each section. This generally contains a checklist of steps to reproduce the bug. As part of that section, you should:
  - [ ] Add a section for the expected behavior and actual behavior.
  - [ ] Add a dropdown for the type of feature request.
  - [ ] Add a section for the suggested solution.
  - [ ] Add a section for screenshots, if applicable.
  - [ ] Add a section for additional context, if applicable.
- [ ] Finally, add a section for the code of conduct and contributing docs.

Here's what we use at OpenSauced:

```yml
name: 🚀 Feature request
description: Suggest an idea for this project 💡
title: "Feature: "
labels: [👀 needs triage, 💡 feature]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this feature request!
  - type: dropdown
    attributes:
      multiple: false
      label: Type of feature
      description: Select the type of feature request, the lowercase should also be the PR prefix.
      options:
        - "🍕 Feature"
        - "🐛 Fix"
        - "📝 Documentation"
        - "🎨 Style"
        - "🧑‍💻 Refactor"
        - "🔥 Performance"
        - "✅ Test"
        - "🤖 Build"
        - "🔁 CI"
        - "📦 Chore"
        - "⏩ Revert"
    validations:
      required: true
  - type: textarea
    attributes:
      label: Current behavior
      description: Is your feature request related to a problem? Please describe.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Suggested solution
      description: Describe the solution you'd like.
  - type: input
    id: context
    attributes:
      label: Additional context
      description: Add any other context about the problem or helpful links here.
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://opensauced.pizza/docs/contributing/code-of-conduct/)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
  - type: checkboxes
    id: contribution
    attributes:
      label: Contributing Docs
      description: If you plan on contributing code please read - [Contribution Guide](https://opensauced.pizza/docs/contributing/introduction-to-contributing/)
      options:
        - label: I agree to follow this project's Contribution Docs
          required: false
```

#### Writing Your First Issue

- In your repository, click the "Issues" tab and then the "New issue" button.

  ![create issue](../_assets/images/create-issue.png)

- Select the type of issue you want to create. In this example, we'll select Feature Request.
- Write your issue. If you're following along the example, we'll write a feature request for a new resource:

  ```markdown
  **Type of feature:** 🍕 Feature
  **Current behavior:** I'd like to see a new resource for #100DaysOfOSS.
  **Suggested solution:** Add a new resource that introduces people to open source through [#100DaysOfOSS](https://opensauced.pizza/docs/community/100-days-of-oss/).
  **Code of Conduct:** I agree to follow this project's Code of Conduct.
  **Contributing Docs:** I agree to follow this project's Contribution Docs.
  ```

- Once you've completed the issues, click "Submit new issue."

  ![feature-form.png](../_assets/images/feature-form.png)

### Promoting Your Project

Now that you have your project set up, it's time to promote it! Here are some ideas to get you started:

- Share your project on social media, forums, and relevant communities.
- Write blog posts or tutorials about your project.
- Present your project at meetups, conferences, or online webinars.
- Create a Highlight on OpenSauced to showcase your project.
- Share your project with friends, family, and colleagues.
- Ask for feedback from your network.

### Recognizing Contributions

In order to maintain a healthy project where contributors feel valued, it's important to recognize contributions. Here are some ways to do that:

- Use tools like the [All Contributors](https://allcontributors.org) bot to acknowledge different types of contributions.
- Highlight contributors in your README or on your project's website.
- Create a Highlight on OpenSauced to showcase contributors.
- Thank contributors publicly for their work.

### Monitoring Your Project

Once your project is up and running, monitoring its health and activity is important. Here are some ways to do that:

- Create an OpenSauced [Workspace](https://opensauced.pizza/docs/features/workspaces/) to track your project's activity.
- Set up notifications for new issues and pull requests.
- Solicit feedback from users and contributors using discussions or surveys.
- Reflect on the project's direction and make adjustments as necessary.

You can learn more about how to create a successful project with OpenSauced with our [Maintainers Guide to OpenSauced](https://opensauced.pizza/docs/maintainers/maintainers-guide-to-open-sauced/).

---

Congratulations on creating your first project! Now, you can share it on our [Maintainers Guestbook](maintainers-guestbook.md) page.

:::tip

Remember, these steps are guidelines; the key to a healthy open source project is to foster an open, inclusive, and collaborative environment.

:::
