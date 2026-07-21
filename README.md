# MindWP

The Next.js website for MindWP, a website-led partner for independent clinics and specialist service businesses.

Read [AGENTS.md](./AGENTS.md) for repository safety and [docs/README.md](./docs/README.md) for the project-memory map and task-sensitive reading routes.

## Requirements and installation

- Node.js 20 or newer
- pnpm 11

```bash
pnpm install
pnpm dev
```

## Checks and builds

```bash
pnpm typecheck
pnpm lint
pnpm check:skills
pnpm check:tools
pnpm check
pnpm build
pnpm test
```

`pnpm check:copy` remains available as a focused legacy public-source scan, but it is not part of the aggregate gate.

## Context export

The exporter writes a derived, non-authoritative context to stdout by default:

```bash
pnpm context:export -- orientation
pnpm context:export -- orientation --engineering --output /tmp/mindwp-orientation.md
```

Build a focused context by supplying only what the task needs:

```bash
pnpm context:export -- focused \
  --page-plan /tmp/supplied-page-plan.md \
  --repository \
  --engineering \
  --skill mindwp-design-build \
  --output /tmp/mindwp-page-context.md
```

Use `--strategy` only for an unresolved commercial question. Select zero, one, or both of `mindwp-design-build` and `mindwp-frontend-quality`. Existing output requires `--overwrite`; repository destinations and symlinked output are refused.

The exporter does not infer skill dependencies or repository state. Add `--repository`, `--engineering`, and the relevant skill explicitly when the receiving conversation needs them; current route source and renders remain separate implementation evidence.

## Route capture

Capture evidence outside the repository while a local server is running:

```bash
pnpm capture:route -- /route /tmp/mindwp-route-review
pnpm capture:route -- --full /route /tmp/mindwp-route-risk-review
pnpm capture:route -- --section proof /route /tmp/mindwp-proof-review
```

Capture modes are capabilities, not mandatory design packets. Choose widths, states, and sections according to the actual review risk.
