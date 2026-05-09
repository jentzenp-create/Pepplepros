import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentPlanPath = path.join(__dirname, 'content-plan.md');
const contentPlan = fs.readFileSync(contentPlanPath, 'utf-8');

// We are outputting directly into the Vite project's src directory for easy dynamic routing
const articlesDir = path.join(__dirname, 'src', 'content', 'service-pages');
const contentSrcDir = path.join(__dirname, 'src', 'content');

if (!fs.existsSync(contentSrcDir)) {
    fs.mkdirSync(contentSrcDir, { recursive: true });
}
if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
}

// Local Context Variables for programmatic variation
const cityContexts = {
    'Poughkeepsie': { env: 'distinct seasonal changes near the Hudson River', valueProp: 'reliable, high-quality contracting' },
    'Beacon': { env: 'the unique charm of historic and modern homes', valueProp: 'modern solutions' },
    'Hopewell Junction': { env: 'the everyday wear and tear of a bustling household', valueProp: 'professional, reliable timing' },
    'default': { env: 'seasonal weather changes in the Hudson Valley', valueProp: 'precision results without the fluff' }
};

function getCityContext(city) {
    for (const key in cityContexts) {
        if (city.includes(key)) return cityContexts[key];
    }
    return cityContexts['default'];
}

const planLines = contentPlan.split(/\r?\n/);
let currentService = null;
const allPagesJson = [];

for (let line of planLines) {
    line = line.trim();
    if (line.startsWith('### ') && line.includes('Pages')) {
        currentService = line.replace('### ', '').replace(' Pages', '');
    }
    
    // Parse table rows
    if (currentService && line.startsWith('|') && !line.startsWith('| ID |') && !line.startsWith('|----')) {
        let cols = line.split(/(?<!\\)\|/);
        cols = cols.slice(1, -1).map(col => col.trim());
        
        if (cols.length === 9) {
            let [id, slug, h1, metaT, metaD, primaryKW, secondaryKWs, city, status] = cols;
            let filename = slug.replace('/', '') + '.md';
            let filePath = path.join(articlesDir, filename);
            
            let context = getCityContext(city);
            let kws = secondaryKWs.split(',').map(k => k.trim());
            let kw1 = kws[0] || primaryKW;
            let kw2 = kws[1] || 'professional service';
            let kw3 = kws[2] || 'expert craftsmanship';

            let bodyContent = `
# ${h1}

Living in ${city} means dealing with ${context.env}. Whether you have a historic home or a modern build, Pepple Pros is your trusted local expert for **${primaryKW}**. 

We know the Hudson Valley. Our team provides ${context.valueProp} for our neighbors in ${city}.

## Our Services in ${city}

We specialize in:
- ${kw1}
- ${kw2}
- ${kw3}

### Why Choose Pepple Pros?
We treat every home with the respect it deserves, delivering precision results without the fluff. We value your schedule—arriving on time and completing projects efficiently.

## Ready to upgrade your home?

Contact Pepple Pros today for top-tier service in ${city}.
- **Phone:** (845) 603-2095
- **Email:** pepplepros@gmail.com
`.trim();

            let template = `---
id: ${id}
slug: ${slug}
meta_title: ${metaT}
meta_description: ${metaD}
location: ${city}
service: ${currentService}
---

${bodyContent}
`;
            
            // Output Markdown File
            fs.writeFileSync(filePath, template, 'utf-8');
            
            // Collect JSON data for Vite to easily map routes
            allPagesJson.push({
                id, 
                slug, 
                h1, 
                metaTitle: metaT, 
                metaDescription: metaD, 
                primaryKW, 
                city, 
                service: currentService,
                content: bodyContent
            });
        }
    }
}

// Generate a JSON file for Vite to import dynamically (this is often much easier than parsing 100 MD files in Vite)
fs.writeFileSync(path.join(contentSrcDir, 'service-pages.json'), JSON.stringify(allPagesJson, null, 2), 'utf-8');

console.log(`Generation complete. Created ${allPagesJson.length} markdown files and compiled service-pages.json for Vite.`);
