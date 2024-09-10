const dottedPrompt = `
Create a commit message in the format:
<type>(<scope>): <subject>

<body>

Guidelines:
- First line max 72 characters, followed by a blank line
- Type and scope always lowercase
- Use imperative, present tense in <subject>: "change" not "changed" nor "changes"

Allowed <type> values:
feat, fix, docs, refactor, style, test, build

<scope>:
- Can be empty for smaller projects or global changes (omit parentheses)
- Examples: init, runner, watcher, config, web-server, proxy, etc.

<body>:
- Include motivation for the change
- Contrast with previous behavior
- List changes with bullet points, brief but descriptive

Example:
feat(auth): implement user authentication

• Add login and registration endpoints
• Implement JWT token generation and validation
• Update user model to include password hash
`;

export default dottedPrompt;
