# Proxy AI Assistant Repository

This is an educational content repository focused on AI-powered assistant curriculum and interactive demo materials for early childhood education.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Repository Structure and Content
- **Primary Content**: Educational curriculum and demo materials in markdown format
- **Main Files**:
  - `README.md` - Basic repository description
  - `curriculum/curriculum-master.md` - Integrated early childhood curriculum master file
  - `demo-avatar-child-interaction.md` - Interactive lesson demo for letter "A"
  - `.github/workflows/blank.yml` - Basic GitHub Actions workflow

### No Build Process Required
- **IMPORTANT**: This is a documentation/content repository with NO code to build, compile, or execute
- There are no dependencies to install (no package.json, requirements.txt, etc.)
- There are no tests to run
- There are no applications to start or exercise
- All validation is content-based through markdown review

### Content Management Workflow
- Edit markdown files directly using text editors
- Validate markdown syntax and formatting through visual inspection
- Review content for educational accuracy and age-appropriateness
- Test external image links to ensure they remain accessible

### GitHub Actions Workflow
- **File**: `.github/workflows/blank.yml`
- **Function**: Basic CI workflow that runs on push/PR to main branch
- **Commands tested and validated**:
  - `echo "Hello, world!"` - works correctly
  - Multi-line echo commands - work correctly
- **Runtime**: Under 1 minute - NEVER CANCEL, but timeout not critical
- **Purpose**: Template workflow ready for future enhancements

## Validation Requirements

### Content Validation
- **Markdown Files**: Verify all markdown files render correctly
  - Check image links are properly formatted (Unsplash URLs in demo file)
  - **Note**: External URL accessibility testing may fail due to network restrictions - focus on URL format validation
  - Ensure proper markdown syntax for headers, lists, and formatting
  - Review educational content for accuracy and age-appropriateness

### Manual Validation Steps
- **Always validate after content changes**:
  1. Read through modified markdown files for syntax errors
  2. Verify external image URLs are properly formatted (accessibility testing may be limited by network)
  3. Check educational content aligns with curriculum objectives
  4. Ensure consistent formatting across all documentation

### GitHub Workflow Validation
- Workflow runs automatically on push/PR - no manual execution needed
- Expected completion time: under 1 minute
- No specific validation scenario required beyond successful completion

## Repository Navigation

### Key Locations
- **Root directory**: Contains main README and demo interaction file
- **curriculum/**: Educational curriculum master documents
- **.github/workflows/**: CI/CD pipeline configuration
- **No src/, dist/, or build directories** - this is content-only

### Common Commands
```bash
# Navigate to repository root
cd /path/to/proxy-ai-assistant

# List all content files
find . -name "*.md" -type f | sort

# View file structure
ls -la

# Check file contents
cat README.md
cat curriculum/curriculum-master.md
cat demo-avatar-child-interaction.md
```

## Common Tasks

### Adding New Educational Content
- Create new markdown files in appropriate directories
- Follow existing format patterns from curriculum-master.md
- Include proper headers, sections, and educational objectives
- Test any external links or image references

### Modifying Existing Content
- Edit markdown files directly
- Maintain consistent formatting and structure
- Preserve educational objectives and learning outcomes
- Review changes for age-appropriateness

### Workflow Management
- Current workflow is basic template - safe to enhance
- Add specific validation steps for educational content if needed
- Consider adding markdown linting or link checking in future

## File Contents Reference

### README.md
```markdown
# proxy-ai-assistant
AI-powered assistant using OpenAI API
```

### Repository Root Structure
```
.
├── .github/
│   ├── workflows/
│   │   └── blank.yml
│   └── copilot-instructions.md
├── README.md
├── curriculum/
│   └── curriculum-master.md
└── demo-avatar-child-interaction.md
```

### Curriculum Structure
The curriculum-master.md contains:
- Learning objectives (social skills, cognitive abilities, emotional intelligence)
- Thematic units (Nature, Community Helpers, Seasons/Weather)
- Assessment methods (Observations, Portfolios, Checklists)
- Implementation strategies and resources

## Important Notes

- **No software installation required** - content editing only
- **No runtime dependencies** - static content repository
- **Validation is manual** - review content accuracy and markdown formatting
- **GitHub Actions minimal** - basic template workflow only
- **External dependencies**: Image URLs from Unsplash (verify accessibility)
- **Target audience**: Early childhood education (age-appropriate content required)

## Troubleshooting

### If Markdown Rendering Issues
- Check syntax using standard markdown validators
- Verify proper header hierarchy and list formatting
- Ensure image URLs are properly formatted and accessible

### If External URL Testing Fails
- **Expected behavior**: curl commands to external URLs may fail due to network restrictions
- Focus on URL format validation rather than accessibility testing
- External image URLs in demo file should be properly formatted Unsplash URLs

### If Workflow Failures
- Basic workflow should always pass (just echo commands)
- Check .github/workflows/blank.yml for syntax errors
- Workflow timeout not expected - completes under 1 minute

### Content Quality Issues
- Review educational objectives alignment
- Check age-appropriateness for early childhood audience
- Verify curriculum components are comprehensive and integrated
- Ensure demo interactions are engaging and educational