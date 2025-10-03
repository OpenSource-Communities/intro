# Contributing to OpenSauced Intro

Contributions are always welcome, no matter how large or small. Before contributing, please read the [Code of Conduct](https://github.com/OpenSource-Communities/.github/blob/main/CODE_OF_CONDUCT.md) and follow the directions in this guide.

## Recommended Communication Style

1. Always include screenshots for visual changes.
2. Always provide a detailed description in the pull request. Leave nothing ambiguous for the reviewer(s).
3. Always review your code first. Be sure to run the project locally and test it before asking for a review.
4. Always communicate in the GitHub repository. Whether it is in the issue or the pull request, keeping the lines of communication open and visible to everyone on the team helps everyone around you.

## Issues

- When you contribute to the project for the first time, please consider checking the [bug](https://github.com/OpenSource-Communities/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22), [good first issue](https://github.com/OpenSource-Communities/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), or [beginners only](https://github.com/OpenSource-Communities/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22beginners+only%22) labels.

- If you wish to work on an open issue, please comment with `.take`, and it will be assigned to you. <br> If an issue is not assigned, it is assumed to be available for anyone to work on. So, assign yourself to an issue **before** beginning work to avoid conflicts.

  > **NOTE**: Please only self-assign an issue with the label "beginners only" or "good first issue" **one time**. <br> Maintainers may remove you from the assignees and not accept your pull request if you choose to proceed.

- Do you spot a bug in any of our courses? Or do you have an idea for enhancing our courses and want to add a section or a chapter to a course?

  You can create an issue and fill out our issue form to address it. But our maintainers need to triage the issue before you can work on it. If you wish to work on the issue you submitted, please inform and tag the maintainers in the comment.

You can always ask for help in our [Community](https://github.com/OpenSource-Communities/intro/discussions) if you get stuck while working on your changes or need clarification.

## Pull Requests (PRs)

We actively welcome your PRs. However, before working on changes, you must ensure that **you are assigned** to an existing issue and **link your work to the issue in your PR template**.

### Before Submitting a PR Template

1. Ensure that your changes are made in a new branch.

2. Run and check your changes locally. Ensure that everything works as it should.

### Submitting a PR Template

1. Ensure that you address one issue in one PR. <br> If you work on multiple issues, work on them separately and create one PR to address each issue.

2. Complete the PR template. Make sure you **fill in all sections** and that you have:

   - **A valid title**. The PR title must begin with `feat:`, `fix:`, or anything related to your changes.
   - **A related issue**. [Link the issue number](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) that you worked on and add a keyword of "Closes", "Fixes", or "Resolves" in front of it. For example: Closes #123, Fixes #234, etc.

3. Do NOT delete any section of the PR template. <br> If a section is irrelevant to your changes, please explain or respond with "N/A".

### After Submitting a PR Template

1. Ensure that all checks are passed. <br> If you see any GitHub action bots or checks that failed after you submit your PR template, you need to read each one and understand why it failed. Then, you must address and fix it until all of them pass.

2. Do NOT DM maintainers or tag them in the comments to review your PR. <br> Maintainers are always notified whenever there is an incoming PR. If you haven't received a review within a week, please tag them in the PR comments to ask for an estimated review time.

3. Keep your branch up to date while waiting for review and resolve any merge conflicts in your terminal.

4. Respond to and address the reviewer's feedback.

### ⚠️ A PR will be marked as invalid and may be closed if:

- The issue is not assigned to the contributor who opened the PR.
- No issue is linked to the PR.
- The PR template is incomplete, or any section in the template is deleted.
- Changes are made directly in the default (`main`) branch.

## Getting Started

### Setup the Project Locally

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [intro repository](https://github.com/OpenSource-Communities/intro) to your own GitHub account.
2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the forked repository to your local machine.

   ```bash
   git clone https://github.com/YOUR-USERNAME/intro.git
   ```

3. Navigate to and open the project in your code editor.

   ```bash
   cd intro
   ```

4. Create a new branch to work on your changes. Do NOT work directly on the `main` branch.

   ```bash
   git checkout -b YOUR-BRANCH-NAME
   ```

   Replace "YOUR-BRANCH-NAME" with a descriptive name for your branch — for example, `feat/add-submit-button`.

5. Install the dependencies and run the project.

### Local Development

> [!NOTE]
> This project is built with [Docusaurus](https://docusaurus.io/).

Running the project locally is essential to see your changes in real-time and test them thoroughly when you're contributing.

1. **Install the dependencies and run the project locally**.

   ```bash
   npm ci
   npm start
   ```

   After the local development server is ready, it will automatically open the project at `http://localhost:3000/learn` on your browser.

2. **Make and test changes**.

   With the local server running, you can make changes to the files and immediately see the results in your browser. Test your changes thoroughly.

3. **Stop the server**.

   After completing and testing the changes, you can stop the local server by pressing `Ctrl + C` in the terminal.

## Working with the Content

The contents of our courses are written in [Markdown](https://www.markdownguide.org/), a lightweight and easy-to-use markup language that allows you to format text in a readable and visually appealing way.

Please read the "[Using Markdown for This Project](#using-markdown-for-this-project)" section for details about how to use it in this project.

### Adding Definitions to the Glossary

If you add definitions to the "Glossary" chapter in the [Intro to Open Source](../docs/intro-to-oss/glossary.md) or [Becoming a Maintainer](../docs/becoming-a-maintainer/glossary.md) course, ensure the definitions are added **alphabetically**.

### Adding a New Section to a Chapter

If your content can fall under the category of one of the course chapters, consider adding it as a new section to the chapter. Create a `heading 2` title and write your content.

You can add a new chapter if it's more suitable for a standalone section.

### Adding a New Chapter and Adding it to the Sidebar

In this section, we will walk you through adding a new chapter to any of our courses and adding it to the sidebar.

#### Adding a New Chapter

Follow these steps to add a new chapter to our course:

1. **Create a new Markdown file**.

   Create a new Markdown (`.md`) file in the course directory and name the file to reflect the chapter's content — for example, `how-to-contribute-to-open-source.md` for a chapter about how to contribute to open source.

   > **NOTE**: Be sure to follow naming conventions. Notice that file names are not capitalized, and there are hyphens in place of spaces between words.

2. **Add front matter**.

   At the beginning of the file, add front matter that is enclosed by three dashes `---` with below variables:

   - `id`: The ID is used to refer to a document when hand-writing sidebars. You can use the file name as an ID.
   - `title`: The chapter's title (`h1`).
   - `sidebar_label`: The title on the sidebar.
   - `keywords`: Keywords for the topics in the chapter.

   Here is an example:

   ```yml
   ---
   id: what-is-open-source
   title: "What is Open Source?"
   sidebar_label: "What is Open Source"
   keywords:
     [
       "what is open source",
       "open source definition",
       "open source licenses explained",
       "open source history",
       "open source evolution",
       "Open Source",
       "Open Source Community",
     ]
   ---
   ```

3. **Write content**.

   Open the newly created Markdown file in a text editor and write the content for your chapter using the Markdown syntax. You can include headings, text, images, links, lists, and other elements to present your information effectively.

   > **NOTE**: There should only be **one** `heading 1` in each file.

4. **Test your changes**.

   Before finalizing your new chapter, you should test your changes locally. You can build or render the project to ensure your new chapter appears as expected within the course structure.

5. **Update the sidebar**.

   After you add a new chapter, you must also add it to the sidebar for the users to discover the content.

#### Adding New Chapters to the Sidebar

The sidebar serves as a navigation menu. So, when you add a new chapter to a course, it's important to update the sidebar by including the link to the chapter. That way, users can navigate to the content seamlessly.

Follow these steps to add new chapters to the sidebar:

1. Open the `sidebars.js` file located on the root.
2. **Add the new chapter link**.

   - Insert your new chapter in the `items` array of the related course. If you're unsure where best to put it, you can comment on the issue and tag the maintainers to ask for help.
   - Use the below format to add the link to the new chapter:

     ```text
     'FOLDER-NAME/ID',
     ```

     Replace `FOLDER-NAME` with the course's folder name and `ID` with the `id` in the file's front matter. For example:

     ```javascript
     'intro-to-oss/what-is-open-source',
     ```

3. **Create a pull request**.

   Once you have created the new chapter and verified that it meets our project's requirements, you can submit your contribution by creating a pull request.

4. **Review and feedback**.

   Wait for maintainers to review your pull request, and be prepared to receive feedback from them or collaborators. Make changes if necessary to refine your contribution.

After your contribution is accepted, your new chapter will become part of our course, enhancing its content for users and contributors.

## Using Markdown for This Project

When contributing to this project, you must follow our Markdown convention below:

### 1. Headings

Use the hash (`#`) symbol to create headings (titles and subtitles). There are six levels of section headings, and the number of symbols indicates the heading level.

```markdown
# Heading 1

## Heading 2
```

### 2. Text Formatting

- Make text bold by enclosing it with double asterisks (`**`).
- Make text italic by enclosing it with single underscores (`_`).
- Create inline code by wrapping text with backticks (`` ` ``).

```markdown
**This is a bold text.**

_This is an italic text._

This is an `inline code`.
```

### 3. Lists

- Create ordered lists using numbers followed by a period (`1.`, `2.`, etc.).
- Create unordered lists using hyphens (`-`).

```markdown
1.  Item 1
2.  Item 2

- Unordered Item 1
- Unordered Item 2
```

### 4. Links

Create links using square brackets (`[]`) for the link text and parentheses (`()`) for the URL.

```markdown
[Open Source Education Path](https://opensauced.pizza/learn/)
```

### 5. Images

Embed images using an exclamation mark (`!`), followed by square brackets (`[]`) for the alt text, and parentheses (`()`) for the image URL.

```markdown
![Create new repository on GitHub](../_assets/images/new-repo.png)
```

### 6. Blockquotes

Create blockquotes using the greater-than symbol (`>`).

```markdown
> This is a blockquote.
```

### 7. Code Blocks

Create code blocks using triple backticks (` ``` `) for fenced code blocks and specify a language next to the backticks before the fenced code block to highlight the syntax.

````
```bash
git pull
```
````

### Markdown Tips

- Preview your Markdown locally to ensure proper formatting before submitting your contribution.
- Keep your Markdown content organized, and use headings to structure your sections.
- There can only be one `heading 1` in each chapter.
- Use code blocks to highlight code snippets or configuration examples.
- Check out the official [Markdown Guide](https://www.markdownguide.org/basic-syntax/) website for more information about using Markdown.

## Translating the Courses

Translating our courses helps make them more accessible to a broader audience. If you want to translate our [Open Source Education Path](https://opensauced.pizza/learn/#/), please read our [🌐 i18n Guidelines](i18n-guidelines.md) page.
