# 🌐 i18n Guidelines

Welcome to our i18n Guidelines! We appreciate your interest in translating our courses.

## Community Translations

At the moment, we are unable to offer translation maintenance.

However, we know some contributors are willing to translate and help our courses to reach a broader audience. We value these contributions! ✨

Please keep reading if you want to translate the [Open Source Education Path](https://opensauced.pizza/learn/#/).

## Why Translating Our Courses

Here are some benefits of translating our courses:

- You will have the opportunity to learn to maintain a project and **become the maintainer** of the translation as it will live in your forked repository.
- You can learn and experience collaborating with contributors, nurturing the translation community, and even assembling your own maintainers' team!
- You will be able to learn how to deploy and host a static website on your own.
- You can make the translation available as soon as possible for a broader audience.
- You can update the translation faster by reviewing and merging in pull requests yourself as a maintainer.

> [!TIP]
> It will be helpful taking our [Becoming a Maintainer](../docs/becoming-a-maintainer/README.md) course to equip you in maintaining your forked repository.

## Getting Started

### 1. Forking the Repository

First, you must fork the [intro repository](https://github.com/OpenSource-Communities/intro). See the official GitHub docs for [forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository).

### 2. Creating a Branch for the Translation

[Create a branch](https://www.shellhacks.com/git-create-new-branch-and-checkout/) where the translation changes will be merged. You can name this branch anything. For example: `jp-translations`.

> [!NOTE]
>
> - This will be the default branch of your translation and the one from which you deploy the translation.
> - The `main` branch should be free from translations.

### 3. Installing and Running the Project

Read our [contributing guidelines](CONTRIBUTING.md#getting-started) to install and run the project locally.

## Working with Translations

The translation process will take time, but don't let this stop you from making the ongoing translations available to the community.

What you need to know when working with translations:

- Maintain the original project's file names and structure, but replace all content with the translations. This will help preventing broken links.
- Ensure there are no broken links and that all links navigate to the correct paths.
- Maintain consistency in terminology and style throughout the translated documentation.
- Keep translations up to date with changes in the original documentation.
- When a course, a chapter, or a section hasn't been translated, you can add a note to inform the readers and direct them to [our website](https://opensauced.pizza/learn/#/).

## Creating Contributing Guidelines for the Forked Repository

You have complete control of how you want contributors to contribute to your forked repo. Therefore, you want to create contributing guidelines for contributors to contribute to your forked repo.

You can name this file anything _except_ `CONTRIBUTING.md`. For example: `contributing-jp.md`.

Put the file in the `contributing` folder at the root. Then, add the link to it as the last list in the "[🤝 Contributing](../README.md#-contributing)" section on the root README as below:

```markdown
- For information on how to contribute to this translations repository, check out our [Translations Contributing Guidelines](LINK-TO-YOUR-FORKED-REPOSITORY-CONTRIBUTING-FILE).
```

## Adding Translation as a Community Translation

Once you are ready to share your translation, add it to the Community Translation list.

Open the `community-translations.md` file located in the `contributing` folder on the root and list your translation. Read the instructions in the file to add it.
