# Pepple Pros - SEO Content Instructions

## 1. Client Information
- **Business Name:** Pepple Pros
- **Phone:** (845) 603-2095
- **Email:** pepplepros@gmail.com
- **Service Area:** Hopewell Junction, NY & 50-mile radius (Hudson Valley)

## 2. Brand Voice
- Professional, reliable, and competent, yet neighborly.
- We treat every home with the respect it deserves, delivering precision results without the fluff.
- We value your schedule. Our team arrives on time and completes projects efficiently.

## 3. SEO Rules
- **Primary Keyword Density:** Ensure the primary keyword appears naturally (under 3% density).
- **Internal Linking:** Every page should link to the main `/contact` page and at least one other relevant service page.
- **Local Signals:** Emphasize the specific city and the greater Hudson Valley area. Mention local weather or housing styles if relevant.

## 4. Markdown Template (Frontmatter + Content)

This is the standard boilerplate that `generate_all_articles.js` uses to construct the pages programmatically. 

```markdown
---
id: {ID}
slug: {SLUG}
meta_title: {META_TITLE}
meta_description: {META_DESCRIPTION}
location: {LOCATION}
service: {SERVICE}
---

# {H1}

Living in {LOCATION} means dealing with {ENV_CONTEXT}. Whether you have a historic home or a modern build, Pepple Pros is your trusted local expert for **{PRIMARY_KW}**. 

We know the Hudson Valley. Our team provides {VALUE_PROP} for our neighbors in {LOCATION}.

## Our Services in {LOCATION}

We specialize in:
- {SECONDARY_KW_1}
- {SECONDARY_KW_2}
- {SECONDARY_KW_3}

### Why Choose Pepple Pros?
We treat every home with the respect it deserves, delivering precision results without the fluff. We value your schedule—arriving on time and completing projects efficiently.

## Ready to upgrade your home?

Contact Pepple Pros today for top-tier service in {LOCATION}.
- **Phone:** (845) 603-2095
- **Email:** pepplepros@gmail.com
```
