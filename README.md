# MindWP

The Next.js website for MindWP, a smart-website service for established service businesses and specialist clinics.

Read `AGENTS.md` before working in this repository. It routes agents through the current authorities and workflow.

## Commands

```bash
pnpm dev
pnpm check
pnpm build
pnpm test
```

Useful workflow helpers:

```bash
# Export a restartable context packet for a fresh design session.
pnpm context:page -- home --profile design --output /tmp/mindwp-home-context.md

# Capture the complete desktop draft and all sections at 1640px.
pnpm capture:route -- --desktop --sections / /tmp/mindwp-home-desktop-draft

# Capture any local route at the default responsive matrix.
pnpm capture:route -- / /tmp/mindwp-home-review

# Add comparison widths and reduced-motion captures.
pnpm capture:route -- --full / /tmp/mindwp-home-review-full

# Keep the existing homepage-specific filename wrapper when useful.
pnpm capture:home -- --full http://localhost:3000/ /tmp/mindwp-home-review

# Validate the four focused repository skills.
pnpm check:skills
```

Context profiles are `planning`, `design`, `finish`, and `audit`. Generated context and screenshot evidence must stay outside the repository.

`_dev-reference/current-site/` is an isolated old-site copy available through `pnpm dev-ref`; it is not active source.
