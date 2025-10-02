# Contributing to OpenSauced Intro

Contributions are always welcome, no matter how large or small. Before contributing, please read the [Code of Conduct](https://github.com/OpenSource-Communities/.github/blob/main/CODE_OF_CONDUCT.md) and follow the directions in this guide.

## Recommended Communication Style

1. Always include screenshots for visual changes.
2. Provide a detailed description in the pull request. Avoid leaving anything ambiguous for the reviewer(s).
3. Review your code thoroughly. Run the project locally and test it before requesting a review.
4. Communicate openly in the GitHub repository. Whether in issues or pull requests, keeping communication visible to the team fosters collaboration and transparency.

## Issues

- If you are contributing for the first time, consider checking the [bug](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22), [good first issue](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), or [beginners only](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22beginners+only%22) labels.

- If you wish to work on an open issue, comment with `.take`, and it will be assigned to you. <br> If an issue is unassigned, it is available for anyone to work on. Assign yourself to an issue **before** starting work to avoid conflicts.

  > **NOTE**: Please self-assign issues labeled "beginners only" or "good first issue" **only once**. <br> Maintainers may remove you from the assignees and reject your pull request if you proceed otherwise.

- Found a bug in our courses? Have an idea to enhance our courses or add a section or chapter? Create an issue and fill out the issue form. However, maintainers must triage the issue before you can work on it. If you wish to work on your submitted issue, inform and tag the `@open-sauced/docs` team in the comments.

If you get stuck or need clarification, ask for help in our [Community](https://github.com/open-sauced/intro/discussions).

## Pull Requests (PRs)

We actively welcome your PRs. However, ensure that **you are assigned** to an issue and **link your work to the issue in your PR template** before making changes.

### Before Submitting a PR Template

1. Make changes in a new branch.
2. Run and test your changes locally to ensure everything works as expected.

### Submitting a PR Template

1. Address one issue per PR. <br> For multiple issues, work on them separately and create a PR for each.
2. Complete the PR template. Ensure you:
   - **Provide a valid title**: Start the title with `feat:`, `fix:`, or another relevant prefix.
   - **Link the related issue**: [Link the issue number](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) using keywords like "Closes", "Fixes", or "Resolves" (e.g., Closes #123).
3. Do NOT delete any section of the PR template. <br> If a section is irrelevant, explain or respond with "N/A".

### After Submitting a PR Template

1. Ensure all checks pass. <br> If any GitHub action bots or checks fail, review the errors, address them, and ensure all checks pass.
2. Avoid directly messaging maintainers or tagging them for reviews. <br> Maintainers are notified of incoming PRs. If no review occurs within a week, tag them in the PR comments to request an estimated review time.
3. Keep your branch up to date and resolve any merge conflicts promptly.
4. Respond to and address reviewer feedback.

### ⚠️ A PR may be marked as invalid and closed if:

- The issue is not assigned to the contributor who opened the PR.
- No issue is linked to the PR.
- The PR template is incomplete or sections are deleted.
- Changes are made directly in the default (`main`) branch.

## Getting Started

### Set Up the Project Locally

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [intro repository](https://github.com/open-sauced/intro) to your GitHub account.
2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the forked repository to your local machine.

   ```bash
   git clone https://github.com/YOUR-USERNAME/intro.git
   ```

3. Navigate to the project directory in your code editor.

   ```bash
   cd intro
   ```

4. Create a new branch for your changes. Do NOT work directly on the `main` branch.

   ```bash
   git checkout -b YOUR-BRANCH-NAME
   ```

   Replace "YOUR-BRANCH-NAME" with a descriptive name for your branch, such as `feat/add-submit-button`.

5. Install dependencies and run the project.

### Local Development

> [!NOTE]
> This project is built with [Docusaurus](https://docusaurus.io/).

Running the project locally allows you to see your changes in real-time and test them thoroughly.

1. **Install dependencies and start the local server**:

   ```bash
   npm ci
   npm start
   ```

   The local development server will automatically open the project at `http://localhost:3000/learn` in your browser.

2. **Make and test changes**:

   With the server running, make changes to the files and see the results immediately in your browser. Test your changes thoroughly.

3. **Stop the server**:

   After completing and testing your changes, stop the server by pressing `Ctrl + C` in the terminal.

## Working with the Content

The course content is written in [Markdown](https://www.markdownguide.org/), a lightweight markup language for formatting text.

### Adding Definitions to the Glossary

When adding definitions to the "Glossary" chapter in the [Intro to Open Source](../docs/intro-to-oss/glossary.md) or [Becoming a Maintainer](../docs/becoming-a-maintainer/glossary.md) course, ensure the definitions are added **alphabetically**.

### Adding a New Section to a Chapter

If your content fits within an existing chapter, add it as a new section. Use a `heading 2` title and write your content.

If the content is better suited as a standalone section, consider creating a new chapter.

### Adding a New Chapter and Updating the Sidebar

Follow these steps to add a new chapter to a course and include it in the sidebar:

#### Adding a New Chapter

1. **Create a new Markdown file**:

   Create a `.md` file in the course directory. Name the file to reflect the chapter’s content (e.g., `how-to-contribute-to-open-source.md`).

   > **NOTE**: Follow naming conventions. File names should be lowercase, with hyphens replacing spaces.

2. **Add front matter**:

   At the beginning of the file, include front matter enclosed by three dashes `---` with the following variables:

   - `id`: Use the file name as the ID.
   - `title`: The chapter’s title (`h1`).
   - `sidebar_label`: The title displayed in the sidebar.
   - `keywords`: Keywords related to the chapter’s topics.

   Example:

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

3. **Write content**:

   Open the file and write the chapter content using Markdown syntax. Include headings, text, images, links, and lists as needed.

   > **NOTE**: Each file should have only **one** `heading 1`.

4. **Test your changes**:

   Test your changes locally to ensure the new chapter appears correctly within the course structure.

5. **Update the sidebar**:

   Add the new chapter to the sidebar for easy navigation.

#### Updating the Sidebar

1. Open the `sidebars.js` file in the root directory.
2. **Add the new chapter link**:

   Insert the new chapter in the `items` array of the relevant course. Use the format:

   ```text
   'FOLDER-NAME/ID',
   ```

   Replace `FOLDER-NAME` with the course folder name and `ID` with the file’s `id`. Example:

   ```javascript
   'intro-to-oss/what-is-open-source',
   ```

3. **Create a pull request**:

   Submit your contribution by creating a pull request.

4. **Review and feedback**:

   Wait for maintainers to review your pull request. Make changes if necessary.

After acceptance, your new chapter will enhance the course content for users and contributors.

## Using Markdown for This Project

Follow these Markdown conventions when contributing:

### 1. Headings

Use the hash (`#`) symbol for headings. The number of symbols indicates the heading level.

```markdown
# Heading 1

## Heading 2
```

### 2. Text Formatting

- **Bold**: Enclose text with double asterisks (`**`).
- _Italic_: Enclose text with single underscores (`_`).
- `Inline code`: Wrap text with backticks (`` ` ``).

```markdown
**Bold text**

_Italic text_

`Inline code`
```

### 3. Lists

- Ordered lists: Use numbers followed by a period (`1.`, `2.`).
- Unordered lists: Use hyphens (`-`).

```markdown
1. Ordered Item 1
2. Ordered Item 2

- Unordered Item 1
- Unordered Item 2
```

### 4. Links

Use square brackets (`[]`) for link text and parentheses (`()`) for the URL.

```markdown
[Open Source Education Path](https://opensauced.pizza/learn/)
```

### 5. Images

Use an exclamation mark (`!`), square brackets (`[]`) for alt text, and parentheses (`()`) for the image URL.

```markdown
![Create new repository on GitHub](../_assets/images/new-repo.png)
```

### 6. Blockquotes

Use the greater-than symbol (`>`).

```markdown
> This is a blockquote.
```

### 7. Code Blocks

Use triple backticks (` ``` `) for fenced code blocks. Specify a language for syntax highlighting.

````
```bash
git pull
```
````

### Markdown Tips

- Preview your Markdown locally to ensure proper formatting.
- Organize content with headings.
- Use code blocks for code snippets or configuration examples.
- Refer to the [Markdown Guide](https://www.markdownguide.org/basic-syntax/) for more details.

## Translating the Courses

Translating our courses makes them accessible to a broader audience. To translate the [Open Source Education Path](https://opensauced.pizza/learn/#/), read our [🌐 i18n Guidelines](i18n-guidelines.md).
