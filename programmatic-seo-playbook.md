# Programmatic Local SEO Playbook

This playbook documents the exact workflow, architecture, and scripts used to programmatically generate, format, and bulk-import hundreds of highly localized, SEO-optimized service pages and blog posts into a CMS (like Wix). You can copy this structure to a new workspace for any new client.

---

## 🏗️ 1. Workspace Architecture

When starting a new SEO project, establish the following file structure:

```text
/client-seo-workspace/
│
├── articles/                   # Output directory for generated markdown
│   ├── service-pages/
│   └── blog/
│
├── content-plan.md             # The Single Source of Truth matrix
├── ARTICLE-INSTRUCTIONS.md     # Brand voice, SEO rules, and layout templates
├── generate_all_articles.js    # Script to generate markdown files from the plan
├── compile_csv.js              # Script to convert markdown to HTML and build the CSV
└── fix_slugs_validation.js     # Script to format slugs/URLs specifically for the CMS
```

---

## 🗺️ 2. The Content Plan (`content-plan.md`)

Instead of managing scattered documents, maintain a single Markdown table. This matrix acts as the database for the generation scripts.

**Structure Example:**

```markdown
### Window Cleaning Pages
| ID | Slug | H1 | Meta Title | Meta Description | Primary KW | Secondary KWs | Location | Status |
|----|------|----|------------|------------------|------------|---------------|----------|--------|
| 001 | window-cleaning-san-luis-obispo | Expert Window Cleaning in San Luis Obispo | Window Cleaning San Luis Obispo | Professional window washing in San Luis Obispo... | window cleaning | window washers, window washing service | San Luis Obispo | complete |
```

---

## 📝 3. The Rules & Prompts (`ARTICLE-INSTRUCTIONS.md`)

This file contains the core AI prompting instructions and brand voice guidelines. It guarantees consistency across hundreds of pages.

**Must include:**
1. **Client Info:** Business name, phone, service area.
2. **Brand Voice:** E.g., "Friendly & professional. Write like a knowledgeable neighbor."
3. **SEO Rules:** 
   - Primary keyword density (< 3%)
   - Internal linking rules
   - PAA (People Also Ask) FAQ structures
4. **Markdown Templates:** Standardized boilerplate for how a service page or blog post should be structured, including frontmatter fields.

---

## 🤖 4. The Generation Engine (`generate_all_articles.js`)

This script reads the `content-plan.md`, loops through the rows, injects localized variables (like city-specific weather conditions), and outputs structured `.md` files.

<details>
<summary>Click to view base `generate_all_articles.js` template</summary>

```javascript
const fs = require('fs');
const path = require('path');

const contentPlan = fs.readFileSync('content-plan.md', 'utf-8');
const articlesDir = path.join(__dirname, 'articles', 'service-pages');

if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
}

// 1. Define Local Context Variables
// This makes mass-generated content feel bespoke and human-written
const cityContexts = {
    'San Luis Obispo': { env: 'seasonal dust and morning fog', region: 'the Central Coast' },
    'Paso Robles': { env: 'hot, dry summers and agricultural dust', region: 'North County' },
    'default': { env: 'seasonal weather changes', region: 'your local area' }
};

function getCityContext(city) {
    for (const key in cityContexts) {
        if (city.includes(key)) return cityContexts[key];
    }
    return cityContexts['default'];
}

// 2. Define Service Templates (Markdown with variables)
const templates = {
    'Window Cleaning': `Living in {region} means dealing with {env}. Our {primary_kw} team is here to help... \n\n## Our Services in {city}\n\nCall us today for top {secondary_1}.`
};

// 3. Parse Content Plan & Generate
const planLines = contentPlan.split(/\r?\n/);
let currentService = null;

for (let line of planLines) {
    line = line.trim();
    if (line.startsWith('### Window Cleaning Pages')) currentService = 'Window Cleaning';
    
    // Parse table rows
    if (currentService && line.startsWith('|') && !line.startsWith('| ID |') && !line.startsWith('|----')) {
        let cols = line.split(/(?<!\\)\|/);
        cols = cols.slice(1, -1).map(col => col.trim());
        
        if (cols.length === 9) {
            let [id, slug, h1, metaT, metaD, primaryKW, secondaryKWs, city, status] = cols;
            let filename = slug.replace('/', '') + '.md';
            let filePath = path.join(articlesDir, filename);
            
            if (!fs.existsSync(filePath)) {
                let context = getCityContext(city);
                let template = templates[currentService]
                    .replace(/{city}/g, city)
                    .replace(/{region}/g, context.region)
                    .replace(/{env}/g, context.env)
                    .replace(/{primary_kw}/g, primaryKW);
                    
                let frontmatter = `---
id: ${id}
slug: ${slug}
meta_title: ${metaT}
meta_description: ${metaD}
---\n\n`;
                
                fs.writeFileSync(filePath, frontmatter + template, 'utf-8');
            }
        }
    }
}
console.log("Generation complete.");
```
</details>

---

## 🔄 5. The CMS Compiler (`compile_csv.js`)

CMS platforms like Wix or WordPress often require HTML content rather than Markdown during bulk CSV imports. This script reads the generated `.md` files, converts them to HTML with inline styles, and maps them directly to the original metadata in a final `service_pages.csv`.

<details>
<summary>Click to view base `compile_csv.js` template</summary>

```javascript
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('content-plan.md', 'utf-8');
const articlesDir = path.join(__dirname, 'articles', 'service-pages');
const slugToHtml = {};

// Custom Markdown to HTML converter with inline styles for CMS compatibility
function markdownToWixHTML(markdown) {
    let html = markdown;
    html = html.replace(/^## (.*$)/gim, '<h3 style="margin-top: 36px; margin-bottom: 16px; font-weight: bold; font-size: 1.8em;">$1</h3>');
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    
    // Convert lists
    let lines = html.split('\n');
    let inList = false;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().startsWith('- ')) {
            lines[i] = '<li>' + lines[i].trim().substring(2) + '</li>';
            if (!inList) {
                lines[i] = '<ul>\n' + lines[i];
                inList = true;
            }
        } else if (inList && lines[i].trim() === '') {
            lines[i-1] += '\n</ul>';
            inList = false;
        }
    }
    html = lines.join('\n');
    
    // Wrap paragraphs
    lines = html.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line !== '' && !line.startsWith('<') && line !== '---') {
            lines[i] = '<p style="margin-bottom: 24px;">' + line + '</p>';
        }
    }
    return lines.join('\n');
}

// Map files
if (fs.existsSync(articlesDir)) {
    const files = fs.readdirSync(articlesDir);
    for (const file of files) {
        if (file.endsWith('.md')) {
            const mdContent = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
            const slugMatch = mdContent.match(/^slug:\s*(.+)$/m);
            if (slugMatch) {
                const bodyContent = mdContent.replace(/^---[\s\S]*?---\n/, '').trim();
                slugToHtml[slugMatch[1].trim()] = markdownToWixHTML(bodyContent);
            }
        }
    }
}

// Build CSV
const planLines = content.split(/\r?\n/);
const serviceRows = [];

for (let line of planLines) {
    if (line.startsWith('|') && !line.startsWith('| ID |') && !line.startsWith('|----')) {
        let cols = line.split(/(?<!\\)\|/).slice(1, -1).map(c => c.trim());
        if (cols.length === 9) {
            let slug = cols[1];
            // Format column data (escaping quotes for CSV)
            cols = cols.map(c => c.includes(',') || c.includes('"') ? `"${c.replace(/"/g, '""')}"` : c);
            
            // Reorder to put Title first
            let title = cols[2]; 
            cols.splice(2, 1);
            cols.unshift(title);
            
            let rawSlug = slug.replace(/"/g, '');
            let bodyHtml = slugToHtml[rawSlug] ? `"${slugToHtml[rawSlug].replace(/"/g, '""')}"` : '';
            
            serviceRows.push(cols.join(',') + ',' + bodyHtml);
        }
    }
}

fs.writeFileSync('output_for_cms.csv', 'Title,ID,Slug,Meta Title,Meta Description,Primary KW,Secondary KWs,Location,Status,Body Content\n' + serviceRows.join('\n'), 'utf-8');
console.log('CSV Compiled.');
```
</details>

---

## 🛠️ 6. CMS-Specific Validation (`fix_slugs_validation.js`)

Every CMS has unique URL formatting rules (e.g., Wix dynamic page slug validation). Create a final sanitization script to ensure the CSV imports perfectly without routing errors.

**Example: Fixing Wix Slugs**
```javascript
const fs = require('fs');

const csvPath = 'output_for_cms.csv';
const lines = fs.readFileSync(csvPath, 'utf8').split('\n');

for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    // Wix requires exact paths for dynamic URL fields
    lines[i] = lines[i].replace(/,([a-z0-9-]+),/g, ',/services/$1,');
}

fs.writeFileSync(csvPath, lines.join('\n'), 'utf8');
console.log("Slugs fixed!");
```

---

## 🚀 The Workflow Summary
1. Plan keywords and create the `content-plan.md` matrix.
2. Define the exact formatting instructions in `ARTICLE-INSTRUCTIONS.md`.
3. Set up the local geography dictionaries and boilerplates in `generate_all_articles.js`.
4. Run `node generate_all_articles.js` to create the raw Markdown.
5. Review the Markdown to ensure quality.
6. Run `node compile_csv.js` to turn the Markdown into HTML and map it to the metadata.
7. Run `node fix_slugs_validation.js` to prep it for the CMS.
8. Import the final CSV into Wix/WordPress/Webflow.
