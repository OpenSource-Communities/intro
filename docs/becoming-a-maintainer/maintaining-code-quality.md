---
id: maintaining-code-quality
title: "How to Maintain Code Quality and Documentation"
sidebar_label: "Maintaining Code Quality and Documentation"
keywords: ["maintaining code quality", "maintaining code quality of open source projects", "maintaining documentation", "maintaining open source project documentation", "code reviews best practices", "ensuring high-quality contributions in open source", "open source maintainers", "Open Source", "Open Source Community"]
---

Maintaining a project with high code quality and up-to-date documentation is important. This helps contributors understand the project and makes it easier for them to contribute.

This chapter will cover ways to maintain code quality and documentation in your open source project.

## Code Reviews and High-Quality Contributions

Code reviews are essential to maintaining code quality in an open source project. You should take the time to review each pull request and ensure that the proposed changes are high quality and do not introduce any new bugs or issues. You will receive pull requests from contributors who are new to the project and might not be familiar with the codebase. It is important to be patient and provide constructive feedback to help them improve their contributions.

The following sections will cover some best practices for conducting code reviews and ensuring high-quality contributions.

### Conventional Commits

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) is a specification for structuring commit messages. It provides an easy way to understand the type of changes being made and helps maintain a clean and organized commit history.

Using Conventional Commits in your project is highly recommended. You can encourage contributors to use them when making changes to the project by adding a guide to your contribution guidelines. The "[Commits](https://opensauced.pizza/docs/contributing/introduction-to-contributing/#commits)" section in the OpenSauced contributing guidelines asks contributors to use Conventional Commits.

Here are some examples of Conventional Commit messages:

```text
feat: add password reset functionality
docs: update installation instructions
chore(build): update dependencies
fix(login): resolve issue with incorrect password validation
refactor(api): streamline error handling in user service
```

### Incomplete Pull Requests

When you review a pull request, the first thing to check is that the proposed changes are complete and do not introduce new bugs or issues. It should also be clear what the proposed changes are about and what problem they are trying to solve.

The contributor should link the proposed changes to an existing issue, and they should fill out all necessary information in the pull request template. If the pull request is incomplete, reach out to the contributor and ask them to provide the missing information.

Remember that you will be dealing with contributors at all levels. Some might be new to open source and not realize they have failed to provide the necessary information. Giving constructive feedback with patience is important to help them improve their contributions.

### Large and Unfocused Pull Requests

Sometimes, you might get pull requests that are too large and unfocused. Examples of large and unfocused pull requests include:

- Pull requests that try to solve multiple issues at once
- Pull requests that refactor large parts of the codebase
- Pull requests that add a lot of new functionality

Large pull requests can be challenging to review effectively and sometimes introduce bugs. In this situation, it is important to ask the contributor to break down the pull request into smaller, more focused pull requests.

### Automated Tests

Setting up testing can help ensure that new contributions don't break existing functionality. Automated tests can be run on every pull request to ensure the new code passes all the tests. This will help maintain the quality of the code and make it easier for contributors to contribute.

If some tests in the new pull request don't pass the checks, contact the contributor and ask them to fix the failing tests. Sometimes, the contributor might need help understanding why the tests are failing. In these cases, you need to work with the contributor to help them understand the problem and fix the failing tests.

To learn more about testing, please refer to [this section](maintainer-powerups.md#testing) in the "Maintainer Power Ups" chapter.

### Code Quality Check

It is important to check for code quality and good software engineering practices when conducting code reviews. This includes checking for proper variable naming, adherence to coding standards, and easy-to-read and understand code. A coding style guide is encouraged to help contributors understand your project's coding standards.

Many tools can help you check for code quality. You can set up linting for your project to ensure there are no syntax errors or style issues. You can also set up code scanning tools to check for security vulnerabilities and other issues in the codebase.

To learn more about these tools, please refer to [this section](maintainer-powerups.md#code-scanning-tools) in the "Maintainer Power Ups" chapter.

### Branch Protection Rules

You can set up branch protection rules on GitHub to ensure all pull requests are reviewed before merging. You can also create a rule to require a certain number of approvals before a pull request can be merged. This not only ensures that maintainers have reviewed all contributions but also helps maintain the quality of the code, especially for larger projects.

You can learn more about branch protection rules in the [official GitHub documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule#about-branch-protection-rules).

## Project Documentation Maintainance

Documentation is an essential part of maintaining an open source project. It helps contributors understand the project and makes it easier for them to contribute. Therefore, it is important to keep the documentation up to date and ensure it reflects the project's current state.

Regularly reviewing your project's documentation is recommended to ensure it is up-to-date and accurate. You can set a schedule to review your project's documentation manually once a month. As you review the documentation, look for ways to improve it and make it easier for contributors to understand the project. Think about times when a new contributor struggled to understand the project and update the documentation to make it easier for them to understand.

Another thing to consider in your review is running through the installation and setup instructions to ensure they are accurate and up to date. Are there any steps that still need to be included? Are there any steps that are no longer necessary? If so, update the documentation to reflect the project's current state.

If you have a more complex project, consider adding diagrams or images to help explain the project's architecture. This can help contributors understand how the project is structured and make it easier for them to contribute.

Now, let's move to the [next chapter](building-community.md), where we will discuss building and nurturing a welcoming and supportive community.
