# Working in the library

How Claude works inside `/library/`. This file owns reading discipline and the working boundary. It
owns no design rule and no build rule — it only says where those live.

The repository root `CLAUDE.md` still applies to repository safety, authorisation and working
practice.

## Boundary

- **Work inside `/library/`.** Every file you create or edit lives here.
- **Search and inspect inside `/library/`.** Globs, greps and directory listings stop at this
  directory.
- **Do not inspect anything outside `/library/`.** Not the website's styles, components, pages or
  docs.
- **Do not edit anything outside `/library/`.**

There is no exception, because ordinary library work never needs an outside file. The MindWP tokens
and typography are **local snapshots** at `src/styles/foundation/`, and they are the authority for
everything built here.

An **explicitly authorised cross-repository foundation task** — including a foundation sync that
brings a snapshot forward — is a different kind of task and must be stated as its own task by
Zeeshan. It is never something a section build does along the way.

## What an ordinary build reads

1. this file;
2. [DESIGN.md](./DESIGN.md) — what a good library section is;
3. [BUILD-DEFAULTS.md](./BUILD-DEFAULTS.md) — the reusable build rules;
4. **one** brief file — the current `SEC-nnn` or `BATCH-nn` file in `planning/waves/`;
5. the implementation files that brief names.

Nothing else.

## What an ordinary build never reads

- `planning/reference/**` — research, longlist, selection method;
- `planning/BUILD-SELECTION.md`;
- `planning/TAXONOMY.md`;
- another batch's brief;
- another wave.

**No broad scans.** Do not glob or grep across `planning/` to gather context. If something a build
needs is missing from the reading set above, say so and stop — do not go looking for it.

### The build-status files

`DASHBOARD.md` and `FINDINGS.md` are **not standing build context and not build authorities**. They
are never read to decide how a component should be built — the brief decides that.

A build opens them only to write:

- `DASHBOARD.md` at task start and at task end, solely to update its own rows;
- `FINDINGS.md` at task end, solely to append its own entry.

## Build authority

**The current section or batch brief is the consolidated build authority.** It carries everything a
build needs: thesis, demo-content direction, every width, motion, semantics, risks, metadata and
review questions.

Ordinary build chats do not open the longlist. If a brief contains a genuine contradiction, or is
missing something the build cannot proceed without, **report it** — do not search historical planning
files for a better answer.

Precedence:

- `DESIGN.md` beats `BUILD-DEFAULTS.md`;
- a brief may depart from `BUILD-DEFAULTS.md` where it says so explicitly;
- record every departure and every compromise in the build report.

## When the gated files may be opened

Never for building. Only for:

| File                                       | Legitimate reasons                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `planning/reference/COMPONENT-LONGLIST.md` | Wave planning · reserve promotion · overlap review · concept revision · historical enquiry. |
| `planning/reference/RESEARCH.md`           | Checking a finding attributed to the research.                                              |
| `planning/reference/SHORTLIST-METHOD.md`   | Planning a wave · re-running a selection pass · deciding a promotion.                       |
| `planning/BUILD-SELECTION.md`              | Wave planning · post-wave selection review · a selected/reserve status change.              |
| `planning/TAXONOMY.md`                     | Revising the taxonomy · judging concept versus variant · adding a vocabulary value.         |

The longlist is read **by extraction**: pull the one entry you need by its `SEC-nnn` id. Do not read
the file.

## Chats

One chat per batch. An independently gated component gets its own chat, and its own brief file.
Never build a whole wave in one context.

## Updating the dashboard

A build chat may change **only**:

- its own rows in `DASHBOARD.md` from `planned` to `building`;
- its own rows in `DASHBOARD.md` from `building` to `review`;
- its own entries in `FINDINGS.md`.

`approved`, `revise` and `skipped` are set by Zeeshan, or by a review chat acting on his explicit
decision. A build never sets them, and never edits any other part of `planning/`.

## Captures

`screenshots/` is gitignored. Captures are review evidence, not commits.
