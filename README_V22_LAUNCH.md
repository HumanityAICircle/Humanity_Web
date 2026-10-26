# Humanity AI Circle V22 — Founding 50 launch candidate

## Purpose
Honest zero-member launch site: public knowledge remains free, first session date is deliberately TBD, founding interest collection is optional, and WhatsApp is optional.

## Before launch (mandatory)
1. Create your free Tally form at https://tally.so/ (or Google Forms at https://forms.google.com). Suggested fields: name, email, profession/interest, biggest AI question, opt-in to event updates. Include explicit privacy notice and consent.
2. For Tally, connect Google Sheets and enable self-notifications in its settings. Official free plan supports unlimited submissions within fair use. Link: https://tally.so/pricing . Note that custom notification capabilities may require a paid plan.
3. Paste the PUBLISHED public form URL into `scripts/v22-config.js` under `formUrl` (do not paste the editing/admin URL).
4. Verify that the existing WhatsApp invite URL in `scripts/v22-config.js` points to the correct **Community** and is still valid. If not, replace it or set it to an empty string; always explain WhatsApp group privacy.
5. Verify `humanityaicircle@gmail.com` inbox access and its monitored status.
6. Update Privacy page to reflect the actual chosen form vendor, retention, opt-out/contact, and WhatsApp behavior. Do not promise a specific cadence or confirmation without a tested provider workflow.
7. Test desktop/mobile, form submission, email notification, Sheets row creation, WhatsApp invite, and navigation using a staging site before public launch.

## Where content is
- `index.html`: original V21 homepage plus transparent founding invitation.
- `founding.html`: primary founding invitation.
- `gathering.html`: clear event TBD placeholder.
- `interest.html`: interest intake entry; external free form when configured, otherwise opens an email draft (requires the visitor to send manually).
- `professions.html`: open Q&A access; no gate.
- `scripts/v22-config.js`: single configuration file for form URL, WhatsApp invite, and contact email.

## How to test on Mac
```bash
unzip HUMANITY_AI_CIRCLE_V22_FOUNDING50_LAUNCH.zip -d hac-v22
cd hac-v22
python3 -m http.server 8000
```
Browse http://localhost:8000/index.html and pages `founding.html`, `gathering.html`, `interest.html`, `professions.html`.

## What is not done
- No Tally/Google Form was created inside your own account, no live integration was authenticated, and no automatic email campaign is set up.
- Site has no verified event date, speaker list, event registrations, member counts, or confirmed past events.
- Static checks are not substitutes for deployed cross-browser testing.
