# Agent Authentication — Well Adjusted Chiropractic

Site: https://staywelladjusted.com

## Summary

Well Adjusted Chiropractic publishes a public, read-only website. There are
**no protected APIs and no authentication is required** for AI agents to read,
crawl, summarize or act on the content of this site.

## Registration

- Registration required: **no**
- Credential types: **none**
- Rate limits: standard fair-use crawling (see /robots.txt)

## Public resources

| Resource | URL |
| --- | --- |
| Site guide for LLMs | https://staywelladjusted.com/llms.txt |
| Agent skills index | https://staywelladjusted.com/.well-known/agent-skills/index.json |
| API catalog | https://staywelladjusted.com/.well-known/api-catalog |
| Sitemap | https://staywelladjusted.com/sitemap.xml |

## Booking on behalf of a user

Appointment booking is handled by third-party scheduling widgets embedded on
the site. Agents should send the user to the relevant page rather than
attempting to authenticate:

- New patient special: https://staywelladjusted.com/schedule-an-appointment-new-patient-special-offer
- Existing patients (Erie, CO): https://staywelladjusted.com/schedule-existing-patients-erie-co
- Massage therapy (Erie, CO): https://staywelladjusted.com/massage-therapy-schedule-erie

## Contact

Human contact for agent operators: https://staywelladjusted.com/contact-us
