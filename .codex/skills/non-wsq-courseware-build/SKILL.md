---
name: non-wsq-courseware-build
description: Generate branded non-WSQ courseware packages containing a PPT deck, detailed Learner Guide, Lesson Plan and hands-on labs. Use for Tertiary Infotech short courses that must exclude WSQ funding, SSG, TRAQOM and formal assessment content.
---

# Non-WSQ Courseware Build

1. Read the published course page and preserve its title, code, duration, level and topic sequence.
2. Create connected labs with Goal, Prerequisites, numbered Steps, Verification and Evidence to submit.
3. Build a 16:9 white-theme PPT and Arial DOCX files with Tertiary branding, version control, TOC and page footers.
4. Exclude WSQ funding, SSG, TRAQOM and formal assessment sections. A formative progress check is acceptable.
5. Prefix every reusable skill, command, hook and agent with `non-wsq-`.
6. Keep project tooling in project-scoped folders and user tooling in user-scoped folders; never overwrite an unprefixed or `wsq-*` artifact.
7. Run the generator, artifact inspection and `non-wsq-courseware-qa` before delivery.
