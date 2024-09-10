const basicPrompt = `
Create a commit message in the format: <type>: <title>
- First line max 50 characters
- Type and scope always lowercase

Allowed <type> values:
feat: New user feature (MINOR version bump)
fix: Bug fix for user (PATCH version bump)
perf: Performance improvements (PATCH version bump)
docs: Documentation changes
style: Formatting, missing semicolons, etc.
refactor: Refactoring production code
test: Adding/refactoring tests (no production code change)
build: Build config, dev tools, or other non-user changes

Example: feat: add user authentication
`;

export default basicPrompt;
