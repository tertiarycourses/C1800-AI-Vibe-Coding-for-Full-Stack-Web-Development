### Lab 3.2 — Create and Test Production Builds

**Outcome:** Build client and server from a clean checkout and run a production smoke test.

**Primary target:** `dist outputs + docs/production-runbook.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Build client and server from a clean checkout and run a production smoke test.

CONTEXT
Relevant target: dist outputs + docs/production-runbook.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Document exact commands, artifacts, runtime assumptions and recovery steps.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Build client and server from a clean checkout and run a production smoke test.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-3.2.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.2/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `dist outputs + docs/production-runbook.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-3.2/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-3.2/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Document exact commands, artifacts, runtime assumptions and recovery steps. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-3.2/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `dist outputs + docs/production-runbook.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-3.2/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- dist outputs` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-3.2/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.2/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-3.2/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-3.2/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-3.2): create-and-test-production-builds`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-3.2/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Document exact commands, artifacts, runtime assumptions and recovery steps. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?
