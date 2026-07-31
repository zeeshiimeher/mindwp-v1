# MindWP repository guidance

Start with [docs/README.md](./docs/README.md). It maps the active project-memory authorities and the smallest reading set for orientation, design, planning, implementation, or review.

Every MindWP page addresses a business owner deciding whether to buy — never a patient or a client's customer. [WRITING.md](./docs/WRITING.md) owns what follows from that.

## Source roles

- Read only the authorities that own the current decision.
- An explicitly supplied page plan owns that page's meaning and fixed boundaries. [DESIGN.md](./docs/DESIGN.md) owns durable visual quality, and the task prompt may add page-specific direction.
- Do not write page code in the same response that proposes a visual design, unless Zeeshan explicitly asks to plan and build together. Otherwise wait for explicit build authorisation naming the scope.
- Current source and fresh renders own implemented reality; report drift from the canonical documents rather than silently reconciling it.
- The execution skills are optional specialists, not a router or mandatory chain. Design is decided before it is built: `mindwp-design-eye` judges the render, and `mindwp-frontend-quality` handles technical repair and finalisation.

## Repository safety

- Inspect the worktree before editing and preserve unrelated user changes.
- Treat superseded material, including anything recovered from git history, as non-authoritative.
- Keep draft and variant routes out of navigation, sitemap, indexing, deployment, and publication unless release work is explicitly authorised.
- Use truthful proof. Keep enquiry data, credentials, founder details, and private implementation information out of public source and logs unless their exact use is approved.
- Use one meaningful semantic structure across widths unless the content itself genuinely differs.
- Do not create workspace memory files for this project.

## Reporting

Every report ends with:

- `What is done`
- `What is next`
