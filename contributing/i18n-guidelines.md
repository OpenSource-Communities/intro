# 🌐 i18n Guidelines

Welcome to our i18n Guidelines! We appreciate your interest in translating our courses.

## Community Translations

Currently, we are unable to offer translation maintenance.

However, we value contributors who are willing to translate and help our courses reach a broader audience. Your contributions are highly appreciated! ✨

If you want to translate the [Open Source Education Path with OpenSauced](https://opensauced.pizza/learn/#/), please continue reading.

## Why Translate Our Courses

Here are some benefits of translating our courses:

- Gain the opportunity to learn project maintenance and **become the maintainer** of the translation, as it will reside in your forked repository.
- Collaborate with contributors, nurture a translation community, and even assemble your own team of maintainers.
- Learn how to deploy and host a static website independently.
- Make the translation available to a broader audience as soon as possible.
- Update the translation quickly by reviewing and merging pull requests yourself as a maintainer.

> [!TIP]
> Consider taking our [Becoming a Maintainer](../docs/becoming-a-maintainer/README.md) course to equip yourself with the skills needed to maintain your forked repository.

## Getting Started

### 1. Fork the Repository

First, fork the [intro repository](https://github.com/open-sauced/intro). Refer to the official GitHub documentation for [forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository).

### 2. Create a Branch for the Translation

[Create a branch](https://www.shellhacks.com/git-create-new-branch-and-checkout/) where the translation changes will be merged. You can name this branch anything, such as `jp-translations`.

> [!NOTE]
>
> - This branch will serve as the default branch for your translation and the one from which you deploy the translation.
> - The `main` branch should remain free of translations.

### 3. Install and Run the Project

Refer to our [contributing guidelines](CONTRIBUTING.md#getting-started) for instructions on installing and running the project locally.

## Working with Translations

The translation process may take time, but don’t let this discourage you from making ongoing translations available to the community.

Key points to remember when working with translations:

- Maintain the original project’s file names and structure, but replace all content with translations. This helps prevent broken links.
- Ensure all links navigate to the correct paths and that there are no broken links.
- Maintain consistency in terminology and style throughout the translated documentation.
- Keep translations up to date with changes in the original documentation.
- For untranslated courses, chapters, or sections, add a note to inform readers and direct them to [our website](https://opensauced.pizza/learn/#/).

## Creating Contributing Guidelines for the Forked Repository

You have full control over how contributors can contribute to your forked repository. Create contributing guidelines tailored to your forked repository.

Name this file something other than `CONTRIBUTING.md`, such as `contributing-jp.md`.

Place the file in the `contributing` folder at the root. Then, add a link to it in the "[🤝 Contributing](../README.md#-contributing)" section of the root README as follows:

```markdown
- For information on how to contribute to this translations repository, check out our [Translations Contributing Guidelines](LINK-TO-YOUR-FORKED-REPOSITORY-CONTRIBUTING-FILE).
```

## Adding Translation as a Community Translation

Once your translation is ready to share, add it to the Community Translation list.

Open the `community-translations.md` file located in the `contributing` folder at the root and list your translation. Follow the instructions in the file to add it.
