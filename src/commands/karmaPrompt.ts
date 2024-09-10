const karmaPrompt = `
Create a commit message in the format:
<type>(<scope>): <subject>

<body>

Guidelines:
- First line max 72 characters, followed by a blank line
- Type and scope always lowercase
- Use imperative, present tense in <subject>: "change" not "changed" nor "changes"
- <scope> can be empty (omit parentheses) for global changes or in smaller projects

Allowed <type> values:
feat: New feature for the user (MINOR version bump)
fix: Bug fix for the user (PATCH version bump)
perf: Performance improvements (PATCH version bump)
docs: Documentation changes
style: Formatting, missing semicolons, etc.
refactor: Refactoring production code
test: Adding/refactoring tests (no production code change)
build: Build configuration, dev tools, or other non-user changes

<scope> examples:
init, runner, watcher, config, web-server, proxy, etc.

<body>:
- Include motivation for the change
- Contrast with previous behavior

Example:
feat(auth): implement user authentication

This change adds a new authentication system for users. It includes:
- New login and registration endpoints
- JWT token generation and validation
- Updates to the user model for password storage

Previously, the application had no user authentication. This feature 
will allow for secure access to user-specific content and functionalities.
`;

export default karmaPrompt;
