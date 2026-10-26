# Humanity AI Circle V21 — Open Knowledge & Professional Journeys

## Visitor journeys
- Public visitor: Home -> Explore by profession -> Role FAQs -> Safe exercise -> Learn/Evidence. No login and no application.
- Question-first visitor: Home -> Explore -> Related evidence/learning -> Optional community.
- Community member: Community -> Join / Apply -> Email draft -> Applicant sends via their email client.
- Circle lead/mentor/partner: Join / Apply -> Select type -> Email draft -> Human review.

## Changes
- Global six-item navigation on legacy and new pages.
- Eleven role-based pages covering professionals, students, educators, small businesses, creators, leaders, HR, finance, healthcare, legal and general beginners.
- 44 substantive Q&A entries (4 per role), public without sign-up.
- Home, Explore, Learn, People, Community and job pages link to role hub.
- Common site footer and responsive styling.

## Production limitations
- Static-site application forms still open an email draft: **they do not store leads, confirm delivery, or provide CRM**. Integrate an authorized form backend before treating leads as captured.
- This is editorial educational content, not automatically updated role-specific legal, clinical or regulatory advice.
- No web-based dynamic AI answering is claimed. Public FAQ answers are curated and static.
- Existing external WhatsApp links remain; verify destinations before publishing.
- Run browser-level accessibility, usability, security, and performance testing on the deployed host.

## Preview
`python3 -m http.server 8000` then visit `http://localhost:8000/index.html`.

## Core URLs
`index.html`, `explore.html`, `professions.html`, `profession-professionals.html`, `learn.html`, `community.html`, `apply.html`.
