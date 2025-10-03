# Markdown Style Guide

This guide outlines the standards for Markdown formatting in this repository to ensure consistency, readability, and maintainability.

## Headings

- Use ATX-style headings: `#` for level 1, `##` for level 2, etc.
- Always include a space after the `#`.
- Example:
  ```
  # Main Title
  ## Subsection
  ```

## Lists

- Use `-` for unordered lists.
- Use `1. 2.` for ordered lists.
- Indent sublists with 2 spaces.
- Example:
  ```
  - Item 1
    - Subitem
  1. First
  2. Second
  ```

## Code Blocks

- Use fenced code blocks with triple backticks (```).
- Specify the language for syntax highlighting when possible.
- Do not indent top-level code blocks.
- For code blocks inside list items, indent the entire block with 4 spaces.
- Example:
  ```
  ```bash
  echo "Hello"
  ```
  ```

## Links

- Use inline link style: `[text](url)`
- Example: `[Open Source](https://opensource.org/)`

## Emphasis

- Use `**text**` for bold.
- Use `*text*` for italic.
- Use `` `text` `` for inline code.

## Images

- Use `![alt text](path/to/image.png)`

## Tables

- Use Markdown table syntax with pipes and dashes.
- Example:
  ```
  | Header 1 | Header 2 |
  |----------|----------|
  | Cell 1   | Cell 2   |
  ```

## Miscellaneous

- Use consistent spacing and indentation throughout.
- Avoid trailing spaces.
- Use blank lines to separate sections for readability.
