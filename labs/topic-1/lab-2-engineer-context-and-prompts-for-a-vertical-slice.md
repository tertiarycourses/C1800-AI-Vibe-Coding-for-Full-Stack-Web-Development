# Lab 2: Engineer context and prompts for a vertical slice

## Goal

Use goal, context, constraints and verification to generate a stable first slice.

## Prerequisites

- Completed previous lab
- Development environment verified
- No real secrets in prompts or repository

## Steps

1. Create prompts/vertical-slice.md with Goal, Context, Constraints, Deliverables and Verification headings.

2. Specify a React client, Node/Express API and SQLite persistence; require TypeScript throughout.

3. Add explicit non-goals: authentication, billing and real-time updates.

4. Ask the agent to identify assumptions and risks before implementation.

5. Generate the health endpoint and a frontend connectivity indicator.

6. Run lint, typecheck and tests; paste results into docs/checkpoints.md.

7. Start a fresh agent session using only repository context and verify it can continue accurately.


## Verification

GET /api/health returns 200 and the UI shows API Connected without hidden manual fixes.

## Evidence to submit

- Saved prompt
- Reviewed diff
- Command/test output
- Short reflection on one corrected agent assumption
