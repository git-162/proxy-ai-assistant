# proxy-ai-assistant

AI-powered assistant repository containing educational content and curriculum
materials for interactive learning experiences.

Always reference these instructions first and fallback to search or bash
commands only when you encounter unexpected information that does not match
the info here.

## Working Effectively

### Repository Setup and Validation

- Bootstrap the repository:
  - `git clone <repository-url>`
  - `cd proxy-ai-assistant`
  - `git status` -- validates git operations (executes in ~3ms)
  - `npm install -g markdownlint-cli` -- installs markdown linting tool
    (takes ~10 seconds)

- Validate markdown content:
  - `markdownlint *.md` -- lints all markdown files in root
  - `find . -name "*.md" -exec markdownlint {} \;` -- lints all markdown
    files recursively

- Basic file operations:
  - All standard file operations work: `cat`, `ls`, `wc`, `find`, `grep`
  - File creation, editing, and deletion work normally

### Content Management

- Always validate markdown formatting using markdownlint before committing
  changes
- Fix common markdown issues found by linter:
  - MD041: Ensure first line is a top-level heading (# Title)
  - MD013: Keep lines under 80 characters when possible
  - MD022: Add blank lines around headings
  - MD032: Add blank lines around lists
  - MD047: End files with single newline character
- Use imperative tone for educational content: "Do this", "Remember that"
- Maintain consistency with existing content structure and style

## Validation

### Required Validation Steps

- Always run `markdownlint *.md` after editing any markdown files
- Check git status with `git status` to verify file changes
- Validate file content with `cat <filename>` to ensure changes are correct
- Run `wc -l *.md` to check file sizes and ensure no accidental truncation

### Manual Verification Scenarios

- After editing demo-avatar-child-interaction.md: Verify all learning
  scenarios are complete and properly formatted
- After editing curriculum files: Ensure all curriculum components maintain
  educational structure
- After editing README.md: Confirm description accurately reflects repository
  purpose
- Test that all external image links in markdown files are accessible
  (manual verification required)

## Common Tasks

### File Structure Overview

```text
proxy-ai-assistant/
├── .github/
│   ├── workflows/
│   │   └── blank.yml          # Basic CI workflow
│   └── copilot-instructions.md # These instructions
├── curriculum/
│   └── curriculum-master.md   # Educational curriculum content
├── README.md                  # Repository overview
└── demo-avatar-child-interaction.md # Interactive lesson demo
```

### Editing Educational Content

- Demo interactions: Edit `demo-avatar-child-interaction.md` for
  avatar-child learning scenarios
- Curriculum content: Edit `curriculum/curriculum-master.md` for educational
  frameworks
- Always maintain educational best practices and child-friendly language
- Preserve image references and interactive elements structure

### Git Operations

- Standard git commands work normally with fast execution (~3ms)
- Check status: `git status`
- View changes: `git diff`
- View history: `git log --oneline -10`
- All git operations are fast and reliable

### GitHub Actions

- Basic CI workflow exists in `.github/workflows/blank.yml`
- Workflow runs basic echo commands for validation
- No build or test processes - documentation-only repository

## Content Guidelines

### Educational Content Standards

- Use clear, age-appropriate language for early childhood education
- Maintain interactive elements structure (Avatar/Child dialogue format)
- Include proper image attribution and accessibility descriptions
- Follow curriculum standards outlined in curriculum-master.md

### Technical Standards

- All markdown files must pass markdownlint validation
- Maintain consistent heading structure and formatting
- Use proper markdown syntax for links, images, and lists
- End all files with single newline character

## Available Tools and Dependencies

### Pre-installed Tools

- Node.js and npm (for markdown tooling)
- Python3 and pip (available but not used)
- Docker (available but not used)
- Standard Unix tools: git, cat, ls, wc, find, grep

### Markdown Validation

- markdownlint-cli: Install with `npm install -g markdownlint-cli`
- Execution: `markdownlint <files>` or `markdownlint *.md`
- Common issues to fix: heading format, line length, blank lines, file
  endings

## Time Expectations

### Fast Operations (< 1 second)

- All git commands (`git status`, `git diff`, `git log`)
- File reading operations (`cat`, `ls`, `wc`)
- Basic file editing and creation

### Medium Operations (< 30 seconds)

- Installing markdownlint-cli (~10 seconds)
- Running markdownlint on all files (~1-2 seconds)

### No Build or Test Processes

- This is a documentation-only repository
- No compilation, building, or complex testing required
- All validation is file-based and fast

## Troubleshooting

### Common Issues

- Markdownlint errors: Follow specific rule guidance (MD041, MD013, MD022,
  MD032, MD047)
- File encoding: All files are UTF-8, standard text editors work
- Git issues: All standard git operations work normally
- No dependency conflicts: Repository has no complex dependencies

### When Instructions Don't Work

- If markdownlint isn't available: Re-install with
  `npm install -g markdownlint-cli`
- If file operations fail: Check file permissions and paths
- If git operations fail: Verify you're in the correct repository directory
- If unexpected content: This is an educational content repository, not a
  code repository
