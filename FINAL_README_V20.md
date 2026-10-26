# Humanity AI Circle — V20 human-led community website

## Strategic thesis (locked)
AI is moving fast. Humans need to move together.

Invitation: Don't figure out AI alone.
Principle: Humans guide AI. AI empowers humans.

## What's new
- Dedicated `apply.html` application page for community members, volunteer Circle leads, knowledge contributors and partners.
- Homepage CTA and nav entry to apply. Existing community, story and question-first content retained.
- Conditional lead-specific question, required consent, browser validation, email draft creation.
- No invented testimonials, fake events or implied application success.

## IMPORTANT: How lead creation works today
This is a static GitHub Pages site. The application form opens a **prefilled mailto draft** addressed to `humanityaicircle@gmail.com`. Applicant must click **Send in their own email client**. The site does not save submissions and cannot claim leads were collected. Some browsers/devices have no configured mail client; direct email fallback is displayed. Email is suitable for launch testing, not high-volume lead processing.

Suggested lead status pipeline: NEW -> REVIEWING -> CONTACTED -> ACCEPTED / WAITLISTED / DECLINED -> ONBOARDED.

## For automated lead collection (must configure separately)
Recommended approach: privacy-reviewed hosted form (Google Forms, Tally, or Formspree) with verified admin destination + spam protection + consent + retention policy. Replace the email flow only after connecting and testing a real endpoint. Do not put API secrets in GitHub Pages JavaScript. For an owned backend: POST /api/applications, validate server-side, CAPTCHA/rate-limit, create lead in a restricted database, send acknowledgement only after durable write, restrict dashboard access and define deletion process.

## Publishing
Unzip, upload the **contents** (not the zip) to the GitHub Pages repository root and deploy as before. Check `index.html`, `apply.html`, `scripts/applications.js`, `v20-applications.css` are present.

## QA scope
Static HTML link integrity, presence of scripts and CSS, semantic form configuration, and JS syntax checked. Live browser E2E and real email-client delivery not verified.
