# AI Vibe Coding for Full Stack Web Development — Learner Guide

**Course Code:** C1800

**Version:** 2.0

**Source repository:** https://github.com/tertiarycourses/C1800-AI-Vibe-Coding-for-Full-Stack-Web-Development

## How to use this guide

This guide is a working manual. Type the commands, save every prompt, inspect every diff, and keep evidence. Do not accept agent output merely because it looks plausible. Each lab follows the adult-learning rhythm: trainer demonstration, guided practice, independent challenge, reflection.

## The Agentic AI Loop

**Frame → Plan → Generate → Inspect → Verify → Correct → Commit.** The loop converts natural-language intent into controlled engineering work. Frame makes success observable. Plan exposes assumptions before code. Generate keeps changes small. Inspect applies human judgement. Verify produces repeatable evidence. Correct uses diagnosis instead of prompt roulette. Commit preserves a reversible checkpoint.

## Before You Start

Install Node.js 20 or later, Git, Docker Desktop, a modern browser, VS Code, and at least one supported agentic coding tool. Create a GitHub account and a cloud deployment account. Use only synthetic training data. Never paste keys, tokens, passwords, personal data or production source code into an unapproved AI service.

### Environment verification

```bash
node --version
npm --version
git --version
docker --version
gh auth status
```

Expected result: each command prints a version; GitHub CLI shows an authenticated account. If Docker is unavailable, complete container steps as a trainer demonstration and continue with local Node processes.

## Topic 01 — Vibe Coding Principles for Full Stack Development

### Why this topic matters

Vibe coding as an engineering workflow Agentic tools versus autocomplete Goal and context engineering Full-stack architecture and vertical slices Long-session memory and checkpoints. An adult practitioner must be able to explain the trade-off, demonstrate the workflow, diagnose predictable failure and transfer it to a new project.

### Key concepts

- **Vibe coding as an engineering workflow.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Agentic tools versus autocomplete.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Goal and context engineering.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Full-stack architecture and vertical slices.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Long-session memory and checkpoints.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

### Deep dive


Vibe Coding Principles for Full Stack Development is not a collection of isolated features. It is a decision system. Start with the user outcome, make boundaries explicit, preserve shared contracts, and use automation to reveal errors early. AI agents accelerate drafting and exploration, but responsibility for architecture, privacy, accessibility, security and release readiness remains with the human team.

Use a two-pass review. In the first pass, check whether the change solves the stated problem. In the second, examine failure behaviour: invalid data, unavailable dependencies, retries, concurrency, narrow screens, missing configuration and partial deployment. This separation prevents polished code from distracting you from a wrong solution.

### Lab 1.1 — Establish the Agentic Engineering Loop

**Outcome:** Create a visible seven-stage loop and use it to correct a deliberately vague request.

**Primary target:** `docs/agentic-loop.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Create a visible seven-stage loop and use it to correct a deliberately vague request.

CONTEXT
Relevant target: docs/agentic-loop.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Write the loop, improve a weak prompt, capture assumptions, and define evidence before code.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Create a visible seven-stage loop and use it to correct a deliberately vague request.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-1.1.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.1/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `docs/agentic-loop.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-1.1/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-1.1/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Write the loop, improve a weak prompt, capture assumptions, and define evidence before code. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-1.1/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `docs/agentic-loop.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-1.1/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- docs/agentic-loop.md` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-1.1/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.1/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-1.1/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-1.1/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-1.1): establish-the-agentic-engineering-loop`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-1.1/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Write the loop, improve a weak prompt, capture assumptions, and define evidence before code. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 1.2 — Set Up and Verify the Development Workbench

**Outcome:** Install and verify Node.js, Git, an editor, browser tools and one coding agent.

**Primary target:** `docs/environment-check.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Install and verify Node.js, Git, an editor, browser tools and one coding agent.

CONTEXT
Relevant target: docs/environment-check.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Record versions, run a diagnostic project, and resolve one predictable setup failure.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Install and verify Node.js, Git, an editor, browser tools and one coding agent.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-1.2.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.2/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `docs/environment-check.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-1.2/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-1.2/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Record versions, run a diagnostic project, and resolve one predictable setup failure. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-1.2/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `docs/environment-check.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-1.2/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- docs/environment-check.md` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-1.2/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.2/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-1.2/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-1.2/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-1.2): set-up-and-verify-the-development-workbench`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-1.2/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Record versions, run a diagnostic project, and resolve one predictable setup failure. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 1.3 — Compare Codex, Claude Code and Antigravity

**Outcome:** Run the same bounded repository-analysis task in available tools and compare evidence.

**Primary target:** `docs/tool-comparison.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Run the same bounded repository-analysis task in available tools and compare evidence.

CONTEXT
Relevant target: docs/tool-comparison.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Compare plan quality, file awareness, tool use, diff clarity and verification discipline.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Run the same bounded repository-analysis task in available tools and compare evidence.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-1.3.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.3/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `docs/tool-comparison.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-1.3/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-1.3/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Compare plan quality, file awareness, tool use, diff clarity and verification discipline. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-1.3/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `docs/tool-comparison.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-1.3/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- docs/tool-comparison.md` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-1.3/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.3/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-1.3/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-1.3/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-1.3): compare-codex-claude-code-and-antigravity`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-1.3/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Compare plan quality, file awareness, tool use, diff clarity and verification discipline. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 1.4 — Turn a Business Need into a Product Brief

**Outcome:** Convert a TaskFlow scenario into users, jobs, scope, non-goals and acceptance criteria.

**Primary target:** `PROJECT.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Convert a TaskFlow scenario into users, jobs, scope, non-goals and acceptance criteria.

CONTEXT
Relevant target: PROJECT.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Create a decision-ready brief that a fresh agent can interpret without chat history.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Convert a TaskFlow scenario into users, jobs, scope, non-goals and acceptance criteria.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-1.4.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.4/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `PROJECT.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-1.4/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-1.4/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Create a decision-ready brief that a fresh agent can interpret without chat history. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-1.4/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `PROJECT.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-1.4/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- PROJECT.md` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-1.4/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.4/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-1.4/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-1.4/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-1.4): turn-a-business-need-into-a-product-brief`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-1.4/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Create a decision-ready brief that a fresh agent can interpret without chat history. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 1.5 — Create Durable Repository Instructions

**Outcome:** Write AGENTS.md and project rules that guide agents without over-constraining implementation.

**Primary target:** `AGENTS.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Write AGENTS.md and project rules that guide agents without over-constraining implementation.

CONTEXT
Relevant target: AGENTS.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Specify commands, architecture, conventions, safety rules and definition of done.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Write AGENTS.md and project rules that guide agents without over-constraining implementation.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-1.5.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.5/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `AGENTS.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-1.5/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-1.5/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Specify commands, architecture, conventions, safety rules and definition of done. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-1.5/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `AGENTS.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-1.5/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- AGENTS.md` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-1.5/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.5/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-1.5/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-1.5/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-1.5): create-durable-repository-instructions`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-1.5/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Specify commands, architecture, conventions, safety rules and definition of done. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 1.6 — Architect and Scaffold a Full-Stack Vertical Slice

**Outcome:** Plan React, Express, SQLite and shared contracts; scaffold only after reviewing the plan.

**Primary target:** `apps/web + apps/api + packages/shared`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Plan React, Express, SQLite and shared contracts; scaffold only after reviewing the plan.

CONTEXT
Relevant target: apps/web + apps/api + packages/shared
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Create a runnable monorepo skeleton and a health-check slice with no hidden manual fixes.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Plan React, Express, SQLite and shared contracts; scaffold only after reviewing the plan.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-1.6.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.6/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `apps/web + apps/api + packages/shared`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-1.6/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-1.6/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Create a runnable monorepo skeleton and a health-check slice with no hidden manual fixes. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-1.6/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `apps/web + apps/api + packages/shared`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-1.6/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- apps/web` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-1.6/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-1.6/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-1.6/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-1.6/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-1.6): architect-and-scaffold-a-full-stack-vertical-slice`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-1.6/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Create a runnable monorepo skeleton and a health-check slice with no hidden manual fixes. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

## Topic 02 — Frontend & Backend Implementation with Agents

### Why this topic matters

Component and API boundaries Accessible responsive UI Typed contracts and validation Persistence and migrations Testing as executable context Debugging agent-generated defects. An adult practitioner must be able to explain the trade-off, demonstrate the workflow, diagnose predictable failure and transfer it to a new project.

### Key concepts

- **Component and API boundaries.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Accessible responsive UI.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Typed contracts and validation.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Persistence and migrations.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Testing as executable context.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Debugging agent-generated defects.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

### Deep dive


Frontend & Backend Implementation with Agents is not a collection of isolated features. It is a decision system. Start with the user outcome, make boundaries explicit, preserve shared contracts, and use automation to reveal errors early. AI agents accelerate drafting and exploration, but responsibility for architecture, privacy, accessibility, security and release readiness remains with the human team.

Use a two-pass review. In the first pass, check whether the change solves the stated problem. In the second, examine failure behaviour: invalid data, unavailable dependencies, retries, concurrency, narrow screens, missing configuration and partial deployment. This separation prevents polished code from distracting you from a wrong solution.

### Lab 2.1 — Design the TaskFlow UI System

**Outcome:** Translate the product brief into tokens, components, states and responsive wireframes.

**Primary target:** `apps/web/src/styles + docs/ui-system.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Translate the product brief into tokens, components, states and responsive wireframes.

CONTEXT
Relevant target: apps/web/src/styles + docs/ui-system.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Define accessible colour, spacing, typography and interaction states before component generation.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Translate the product brief into tokens, components, states and responsive wireframes.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.1.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.1/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `apps/web/src/styles + docs/ui-system.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.1/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.1/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Define accessible colour, spacing, typography and interaction states before component generation. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.1/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `apps/web/src/styles + docs/ui-system.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.1/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- apps/web/src/styles` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.1/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.1/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.1/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.1/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.1): design-the-taskflow-ui-system`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.1/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Define accessible colour, spacing, typography and interaction states before component generation. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 2.2 — Generate the Application Shell and Navigation

**Outcome:** Build a semantic responsive shell with skip link, header, navigation and main region.

**Primary target:** `apps/web/src/components/AppShell.tsx`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Build a semantic responsive shell with skip link, header, navigation and main region.

CONTEXT
Relevant target: apps/web/src/components/AppShell.tsx
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Inspect landmarks, tab order, focus styles and mobile layout.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Build a semantic responsive shell with skip link, header, navigation and main region.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.2.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.2/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `apps/web/src/components/AppShell.tsx`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.2/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.2/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Inspect landmarks, tab order, focus styles and mobile layout. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.2/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `apps/web/src/components/AppShell.tsx`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.2/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- apps/web/src/components/AppShell.tsx` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.2/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.2/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.2/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.2/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.2): generate-the-application-shell-and-navigation`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.2/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Inspect landmarks, tab order, focus styles and mobile layout. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 2.3 — Build Task Cards, Lists and Empty States

**Outcome:** Create typed presentational components for loading, empty, populated and error states.

**Primary target:** `apps/web/src/components/tasks`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Create typed presentational components for loading, empty, populated and error states.

CONTEXT
Relevant target: apps/web/src/components/tasks
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Use stable keys, clear status semantics and component-level examples.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Create typed presentational components for loading, empty, populated and error states.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.3.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.3/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `apps/web/src/components/tasks`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.3/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.3/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Use stable keys, clear status semantics and component-level examples. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.3/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `apps/web/src/components/tasks`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.3/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- apps/web/src/components/tasks` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.3/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.3/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.3/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.3/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.3): build-task-cards-lists-and-empty-states`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.3/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Use stable keys, clear status semantics and component-level examples. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 2.4 — Build a Controlled Task Form

**Outcome:** Implement accessible controlled inputs, client validation and submission feedback.

**Primary target:** `apps/web/src/components/TaskForm.tsx`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Implement accessible controlled inputs, client validation and submission feedback.

CONTEXT
Relevant target: apps/web/src/components/TaskForm.tsx
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Handle labels, errors, disabled state, focus recovery and double-submit prevention.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Implement accessible controlled inputs, client validation and submission feedback.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.4.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.4/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `apps/web/src/components/TaskForm.tsx`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.4/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.4/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Handle labels, errors, disabled state, focus recovery and double-submit prevention. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.4/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `apps/web/src/components/TaskForm.tsx`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.4/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- apps/web/src/components/TaskForm.tsx` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.4/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.4/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.4/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.4/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.4): build-a-controlled-task-form`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.4/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Handle labels, errors, disabled state, focus recovery and double-submit prevention. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 2.5 — Model Shared TypeScript Contracts

**Outcome:** Define Task, CreateTaskInput, TaskStatus and API result types once for both layers.

**Primary target:** `packages/shared/src/task.ts`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Define Task, CreateTaskInput, TaskStatus and API result types once for both layers.

CONTEXT
Relevant target: packages/shared/src/task.ts
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Remove duplicated shapes and verify client/server compilation against shared contracts.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Define Task, CreateTaskInput, TaskStatus and API result types once for both layers.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.5.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.5/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `packages/shared/src/task.ts`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.5/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.5/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Remove duplicated shapes and verify client/server compilation against shared contracts. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.5/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `packages/shared/src/task.ts`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.5/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- packages/shared/src/task.ts` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.5/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.5/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.5/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.5/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.5): model-shared-typescript-contracts`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.5/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Remove duplicated shapes and verify client/server compilation against shared contracts. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 2.6 — Create the Express API Structure

**Outcome:** Generate app, routes, controllers, services and middleware with explicit boundaries.

**Primary target:** `apps/api/src`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Generate app, routes, controllers, services and middleware with explicit boundaries.

CONTEXT
Relevant target: apps/api/src
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Implement health and task routes without placing business logic in route handlers.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Generate app, routes, controllers, services and middleware with explicit boundaries.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.6.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.6/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `apps/api/src`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.6/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.6/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Implement health and task routes without placing business logic in route handlers. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.6/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `apps/api/src`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.6/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- apps/api/src` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.6/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.6/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.6/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.6/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.6): create-the-express-api-structure`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.6/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Implement health and task routes without placing business logic in route handlers. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 2.7 — Add Runtime Validation and Safe Errors

**Outcome:** Validate untrusted requests and return consistent errors without leaking internals.

**Primary target:** `apps/api/src/middleware + schemas`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Validate untrusted requests and return consistent errors without leaking internals.

CONTEXT
Relevant target: apps/api/src/middleware + schemas
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Test malformed JSON, blank titles, invalid status and unknown records.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Validate untrusted requests and return consistent errors without leaking internals.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.7.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.7/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `apps/api/src/middleware + schemas`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.7/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.7/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Test malformed JSON, blank titles, invalid status and unknown records. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.7/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `apps/api/src/middleware + schemas`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.7/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- apps/api/src/middleware` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.7/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.7/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.7/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.7/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.7): add-runtime-validation-and-safe-errors`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.7/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Test malformed JSON, blank titles, invalid status and unknown records. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 2.8 — Add SQLite Migrations and Repository Logic

**Outcome:** Create schema, migration, seed and repository functions with parameterised queries.

**Primary target:** `apps/api/src/db`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Create schema, migration, seed and repository functions with parameterised queries.

CONTEXT
Relevant target: apps/api/src/db
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Prove clean migration, deterministic seed, CRUD persistence and SQL-injection resistance.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Create schema, migration, seed and repository functions with parameterised queries.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.8.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.8/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `apps/api/src/db`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.8/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.8/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Prove clean migration, deterministic seed, CRUD persistence and SQL-injection resistance. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.8/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `apps/api/src/db`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.8/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- apps/api/src/db` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.8/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.8/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.8/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.8/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.8): add-sqlite-migrations-and-repository-logic`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.8/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Prove clean migration, deterministic seed, CRUD persistence and SQL-injection resistance. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 2.9 — Connect the React Client to the API

**Outcome:** Replace fixtures with a typed API client and resilient loading/error behaviour.

**Primary target:** `apps/web/src/lib/apiClient.ts`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Replace fixtures with a typed API client and resilient loading/error behaviour.

CONTEXT
Relevant target: apps/web/src/lib/apiClient.ts
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Exercise create, read and update across the browser, API and database.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Replace fixtures with a typed API client and resilient loading/error behaviour.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.9.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.9/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `apps/web/src/lib/apiClient.ts`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.9/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.9/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Exercise create, read and update across the browser, API and database. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.9/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `apps/web/src/lib/apiClient.ts`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.9/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- apps/web/src/lib/apiClient.ts` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.9/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.9/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.9/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.9/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.9): connect-the-react-client-to-the-api`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.9/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Exercise create, read and update across the browser, API and database. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 2.10 — Generate Unit and Integration Tests

**Outcome:** Use tests as executable context for components, services and HTTP endpoints.

**Primary target:** `apps/web/src/**/*.test.tsx + apps/api/test`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Use tests as executable context for components, services and HTTP endpoints.

CONTEXT
Relevant target: apps/web/src/**/*.test.tsx + apps/api/test
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Cover happy paths, boundaries and failures; ensure tests are isolated and deterministic.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Use tests as executable context for components, services and HTTP endpoints.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.10.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.10/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `apps/web/src/**/*.test.tsx + apps/api/test`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.10/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.10/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Cover happy paths, boundaries and failures; ensure tests are isolated and deterministic. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.10/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `apps/web/src/**/*.test.tsx + apps/api/test`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.10/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- apps/web/src/**/*.test.tsx` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.10/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.10/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.10/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.10/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.10): generate-unit-and-integration-tests`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.10/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Cover happy paths, boundaries and failures; ensure tests are isolated and deterministic. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 2.11 — Debug an Agent-Generated Cross-Layer Defect

**Outcome:** Trace a status mismatch from UI symptom through network, validation and persistence.

**Primary target:** `docs/debug-report.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Trace a status mismatch from UI symptom through network, validation and persistence.

CONTEXT
Relevant target: docs/debug-report.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Form hypotheses, collect evidence, make the smallest fix and add a regression test.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Trace a status mismatch from UI symptom through network, validation and persistence.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-2.11.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.11/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `docs/debug-report.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-2.11/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-2.11/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Form hypotheses, collect evidence, make the smallest fix and add a regression test. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-2.11/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `docs/debug-report.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-2.11/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- docs/debug-report.md` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-2.11/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-2.11/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-2.11/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-2.11/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-2.11): debug-an-agent-generated-cross-layer-defect`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-2.11/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Form hypotheses, collect evidence, make the smallest fix and add a regression test. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

## Topic 03 — Deployment to the Cloud & CI/CD Pipelines

### Why this topic matters

Production configuration Repeatable builds Containers and health checks CI quality gates Preview and production deployment Observability and rollback. An adult practitioner must be able to explain the trade-off, demonstrate the workflow, diagnose predictable failure and transfer it to a new project.

### Key concepts

- **Production configuration.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Repeatable builds.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Containers and health checks.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **CI quality gates.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Preview and production deployment.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Observability and rollback.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

### Deep dive


Deployment to the Cloud & CI/CD Pipelines is not a collection of isolated features. It is a decision system. Start with the user outcome, make boundaries explicit, preserve shared contracts, and use automation to reveal errors early. AI agents accelerate drafting and exploration, but responsibility for architecture, privacy, accessibility, security and release readiness remains with the human team.

Use a two-pass review. In the first pass, check whether the change solves the stated problem. In the second, examine failure behaviour: invalid data, unavailable dependencies, retries, concurrency, narrow screens, missing configuration and partial deployment. This separation prevents polished code from distracting you from a wrong solution.

### Lab 3.1 — Harden Configuration and Secret Handling

**Outcome:** Validate environment variables, create safe examples and prevent secret exposure.

**Primary target:** `.env.example + apps/api/src/config.ts`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Validate environment variables, create safe examples and prevent secret exposure.

CONTEXT
Relevant target: .env.example + apps/api/src/config.ts
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Fail fast with helpful messages while keeping credentials out of prompts, logs and Git.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Validate environment variables, create safe examples and prevent secret exposure.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-3.1.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.1/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `.env.example + apps/api/src/config.ts`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-3.1/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-3.1/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Fail fast with helpful messages while keeping credentials out of prompts, logs and Git. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-3.1/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `.env.example + apps/api/src/config.ts`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-3.1/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- .env.example` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-3.1/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.1/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-3.1/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-3.1/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-3.1): harden-configuration-and-secret-handling`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-3.1/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Fail fast with helpful messages while keeping credentials out of prompts, logs and Git. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

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

### Lab 3.3 — Containerise the Full-Stack Application

**Outcome:** Generate a multi-stage Dockerfile, health check and minimal runtime image.

**Primary target:** `Dockerfile + .dockerignore`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Generate a multi-stage Dockerfile, health check and minimal runtime image.

CONTEXT
Relevant target: Dockerfile + .dockerignore
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Build, run, inspect, stop and rebuild without copying secrets or development clutter.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Generate a multi-stage Dockerfile, health check and minimal runtime image.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-3.3.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.3/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `Dockerfile + .dockerignore`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-3.3/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-3.3/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Build, run, inspect, stop and rebuild without copying secrets or development clutter. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-3.3/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `Dockerfile + .dockerignore`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-3.3/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- Dockerfile` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-3.3/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.3/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-3.3/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-3.3/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-3.3): containerise-the-full-stack-application`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-3.3/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Build, run, inspect, stop and rebuild without copying secrets or development clutter. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 3.4 — Build a GitHub Actions CI Pipeline

**Outcome:** Create least-privilege lint, typecheck, test and build gates with caching.

**Primary target:** `.github/workflows/ci.yml`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Create least-privilege lint, typecheck, test and build gates with caching.

CONTEXT
Relevant target: .github/workflows/ci.yml
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Validate YAML, observe a passing run and preserve readable failure evidence.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Create least-privilege lint, typecheck, test and build gates with caching.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-3.4.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.4/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `.github/workflows/ci.yml`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-3.4/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-3.4/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Validate YAML, observe a passing run and preserve readable failure evidence. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-3.4/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `.github/workflows/ci.yml`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-3.4/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- .github/workflows/ci.yml` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-3.4/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.4/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-3.4/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-3.4/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-3.4): build-a-github-actions-ci-pipeline`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-3.4/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Validate YAML, observe a passing run and preserve readable failure evidence. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 3.5 — Prove the Release Gate with Failure Injection

**Outcome:** Introduce controlled lint, type and test failures and confirm CI blocks each one.

**Primary target:** `docs/ci-failure-lab.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Introduce controlled lint, type and test failures and confirm CI blocks each one.

CONTEXT
Relevant target: docs/ci-failure-lab.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Distinguish product defects from pipeline defects and revert cleanly after evidence.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Introduce controlled lint, type and test failures and confirm CI blocks each one.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-3.5.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.5/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `docs/ci-failure-lab.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-3.5/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-3.5/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Distinguish product defects from pipeline defects and revert cleanly after evidence. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-3.5/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `docs/ci-failure-lab.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-3.5/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- docs/ci-failure-lab.md` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-3.5/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.5/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-3.5/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-3.5/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-3.5): prove-the-release-gate-with-failure-injection`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-3.5/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Distinguish product defects from pipeline defects and revert cleanly after evidence. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 3.6 — Deploy a Preview and Production Release

**Outcome:** Configure a cloud target, environment variables, migrations and gated deployment.

**Primary target:** `deployment config + release URL`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Configure a cloud target, environment variables, migrations and gated deployment.

CONTEXT
Relevant target: deployment config + release URL
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Verify health, UI/API connectivity, persistence and environment isolation.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Configure a cloud target, environment variables, migrations and gated deployment.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-3.6.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.6/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `deployment config + release URL`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-3.6/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-3.6/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Verify health, UI/API connectivity, persistence and environment isolation. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-3.6/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `deployment config + release URL`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-3.6/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- deployment config` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-3.6/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.6/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-3.6/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-3.6/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-3.6): deploy-a-preview-and-production-release`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-3.6/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Verify health, UI/API connectivity, persistence and environment isolation. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 3.7 — Add Observability, Release Notes and Rollback

**Outcome:** Add structured logs, correlation IDs, health endpoints and a rollback runbook.

**Primary target:** `docs/releases + docs/rollback.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Add structured logs, correlation IDs, health endpoints and a rollback runbook.

CONTEXT
Relevant target: docs/releases + docs/rollback.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Detect a simulated failure, identify the release, and execute a reversible rollback decision.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Add structured logs, correlation IDs, health endpoints and a rollback runbook.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-3.7.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.7/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `docs/releases + docs/rollback.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-3.7/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-3.7/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Detect a simulated failure, identify the release, and execute a reversible rollback decision. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-3.7/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `docs/releases + docs/rollback.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-3.7/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- docs/releases` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-3.7/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-3.7/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-3.7/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-3.7/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-3.7): add-observability-release-notes-and-rollback`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-3.7/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Detect a simulated failure, identify the release, and execute a reversible rollback decision. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

## Topic 04 — Agent Skills, Subagents & MCP Implementation

### Why this topic matters

Reusable skills and trigger design Commands and lifecycle hooks Bounded subagent delegation Model Context Protocol tools Security boundaries Orchestrated release engineering. An adult practitioner must be able to explain the trade-off, demonstrate the workflow, diagnose predictable failure and transfer it to a new project.

### Key concepts

- **Reusable skills and trigger design.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Commands and lifecycle hooks.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Bounded subagent delegation.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Model Context Protocol tools.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Security boundaries.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

- **Orchestrated release engineering.** Connect the concept to an observable engineering decision; ask what evidence would prove the decision correct.

### Deep dive


Agent Skills, Subagents & MCP Implementation is not a collection of isolated features. It is a decision system. Start with the user outcome, make boundaries explicit, preserve shared contracts, and use automation to reveal errors early. AI agents accelerate drafting and exploration, but responsibility for architecture, privacy, accessibility, security and release readiness remains with the human team.

Use a two-pass review. In the first pass, check whether the change solves the stated problem. In the second, examine failure behaviour: invalid data, unavailable dependencies, retries, concurrency, narrow screens, missing configuration and partial deployment. This separation prevents polished code from distracting you from a wrong solution.

### Lab 4.1 — Create a Non-WSQ Route-Generator Skill

**Outcome:** Package a repeatable typed-route workflow with concise triggers and validation.

**Primary target:** `.codex/skills/non-wsq-route-generator`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Package a repeatable typed-route workflow with concise triggers and validation.

CONTEXT
Relevant target: .codex/skills/non-wsq-route-generator
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Create, validate and invoke the skill on one new endpoint.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Package a repeatable typed-route workflow with concise triggers and validation.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-4.1.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.1/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `.codex/skills/non-wsq-route-generator`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-4.1/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-4.1/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Create, validate and invoke the skill on one new endpoint. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-4.1/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `.codex/skills/non-wsq-route-generator`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-4.1/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- .codex/skills/non-wsq-route-generator` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-4.1/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.1/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-4.1/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-4.1/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-4.1): create-a-non-wsq-route-generator-skill`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-4.1/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Create, validate and invoke the skill on one new endpoint. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 4.2 — Create Commands and Quality Hooks

**Outcome:** Add project commands plus pre/post hooks that enforce scope and verification.

**Primary target:** `.claude/commands + .claude/hooks`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Add project commands plus pre/post hooks that enforce scope and verification.

CONTEXT
Relevant target: .claude/commands + .claude/hooks
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Reject prohibited programme content and incomplete lab artifacts without touching WSQ tooling.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Add project commands plus pre/post hooks that enforce scope and verification.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-4.2.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.2/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `.claude/commands + .claude/hooks`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-4.2/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-4.2/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Reject prohibited programme content and incomplete lab artifacts without touching WSQ tooling. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-4.2/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `.claude/commands + .claude/hooks`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-4.2/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- .claude/commands` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-4.2/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.2/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-4.2/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-4.2/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-4.2): create-commands-and-quality-hooks`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-4.2/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Reject prohibited programme content and incomplete lab artifacts without touching WSQ tooling. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 4.3 — Design Bounded Review and Test Subagents

**Outcome:** Define frontend-review, API-test and security-review roles with explicit outputs.

**Primary target:** `.claude/agents/non-wsq-*`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Define frontend-review, API-test and security-review roles with explicit outputs.

CONTEXT
Relevant target: .claude/agents/non-wsq-*
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Delegate independent tasks, compare findings and keep integration decisions central.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Define frontend-review, API-test and security-review roles with explicit outputs.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-4.3.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.3/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `.claude/agents/non-wsq-*`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-4.3/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-4.3/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Delegate independent tasks, compare findings and keep integration decisions central. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-4.3/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `.claude/agents/non-wsq-*`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-4.3/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- .claude/agents/non-wsq-*` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-4.3/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.3/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-4.3/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-4.3/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-4.3): design-bounded-review-and-test-subagents`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-4.3/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Delegate independent tasks, compare findings and keep integration decisions central. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 4.4 — Build a Local MCP Project-Status Server

**Outcome:** Expose typed read-only tools for Git status, test summaries and release readiness.

**Primary target:** `tools/project-status-mcp`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Expose typed read-only tools for Git status, test summaries and release readiness.

CONTEXT
Relevant target: tools/project-status-mcp
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Implement stdio transport, schemas, structured errors and path containment.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Expose typed read-only tools for Git status, test summaries and release readiness.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-4.4.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.4/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `tools/project-status-mcp`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-4.4/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-4.4/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Implement stdio transport, schemas, structured errors and path containment. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-4.4/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `tools/project-status-mcp`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-4.4/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- tools/project-status-mcp` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-4.4/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.4/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-4.4/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-4.4/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-4.4): build-a-local-mcp-project-status-server`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-4.4/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Implement stdio transport, schemas, structured errors and path containment. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 4.5 — Test MCP Tools and Security Boundaries

**Outcome:** Exercise valid, invalid and adversarial inputs without allowing arbitrary execution.

**Primary target:** `tools/project-status-mcp/test`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Exercise valid, invalid and adversarial inputs without allowing arbitrary execution.

CONTEXT
Relevant target: tools/project-status-mcp/test
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Prove schema validation, project-root containment, output limits and safe error messages.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Exercise valid, invalid and adversarial inputs without allowing arbitrary execution.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-4.5.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.5/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `tools/project-status-mcp/test`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-4.5/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-4.5/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Prove schema validation, project-root containment, output limits and safe error messages. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-4.5/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `tools/project-status-mcp/test`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-4.5/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- tools/project-status-mcp/test` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-4.5/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.5/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-4.5/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-4.5/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-4.5): test-mcp-tools-and-security-boundaries`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-4.5/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Prove schema validation, project-root containment, output limits and safe error messages. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

### Lab 4.6 — Orchestrate the TaskFlow Capstone Release

**Outcome:** Coordinate specialised reviews through the agentic loop and ship a verified release.

**Primary target:** `docs/capstone-release.md`

**Estimated time:** 25–40 minutes

**Learning mode:** trainer demonstration → guided pair work → independent boundary challenge

#### Starting checkpoint

Open the previous lab checkpoint. Confirm the application starts and the last lab verification passes. If it does not, stop and restore that checkpoint before adding new work.

#### Reference prompt

```text
You are working on TaskFlow, a training full-stack application.

GOAL
Coordinate specialised reviews through the agentic loop and ship a verified release.

CONTEXT
Relevant target: docs/capstone-release.md
Current checkpoint: verified previous lab

CONSTRAINTS
- Propose a plan before editing.
- Keep the change within the named target.
- Preserve TypeScript strictness, accessibility and safe error handling.
- Do not add credentials, broad dependencies or unrelated refactors.

DELIVERABLES
- Implementation for: Reconcile findings, run all gates, demonstrate TaskFlow and publish evidence-backed release notes.
- Focused tests and documentation updates

VERIFICATION
List exact commands and expected observable behaviour. Report assumptions and remaining risks.
```

#### Step-by-step procedure

**Step 1 — Frame**

Read the scenario and restate the outcome in one sentence: “Coordinate specialised reviews through the agentic loop and ship a verified release.” Identify the learner-visible success condition and write it under Goal in `prompts/lab-4.6.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.6/step-1`. Write one sentence explaining what the evidence proves.

**Step 2 — Inspect the starting state**

Run `git status --short`, inventory the relevant files, and open the current checkpoint. Confirm that the intended change is limited to `docs/capstone-release.md`. If unrelated changes exist, record them and do not overwrite them.

> Evidence: save the prompt or command output under `evidence/lab-4.6/step-2`. Write one sentence explaining what the evidence proves.

**Step 3 — Plan**

Ask the coding agent for a numbered implementation plan. Require named files, data flow, risks, and verification commands. Do not permit edits yet. Compare the proposal with the architecture and remove unnecessary changes.

> Evidence: save the prompt or command output under `evidence/lab-4.6/step-3`. Write one sentence explaining what the evidence proves.

**Step 4 — Create the prompt contract**

Write Goal, Context, Constraints, Deliverables and Verification sections. Include the requirement: Reconcile findings, run all gates, demonstrate TaskFlow and publish evidence-backed release notes. Add explicit non-goals so the agent cannot silently expand scope.

> Evidence: save the prompt or command output under `evidence/lab-4.6/step-4`. Write one sentence explaining what the evidence proves.

**Step 5 — Generate a small increment**

Authorise only the first coherent change in `docs/capstone-release.md`. Ask the agent to explain each file before editing it. Keep the diff small enough to review in under five minutes.

> Evidence: save the prompt or command output under `evidence/lab-4.6/step-5`. Write one sentence explaining what the evidence proves.

**Step 6 — Inspect the diff**

Run `git diff -- docs/capstone-release.md` where applicable. Check correctness, naming, accessibility/security, error handling, duplicated logic and unexpected dependencies. Reject code you cannot explain.

> Evidence: save the prompt or command output under `evidence/lab-4.6/step-6`. Write one sentence explaining what the evidence proves.

**Step 7 — Verify**

Run the lab-specific command plus `npm run lint`, `npm run typecheck` and the narrowest relevant test. Capture the command, exit status and meaningful output in `docs/checkpoints.md`.

> Evidence: save the prompt or command output under `evidence/lab-4.6/step-7`. Write one sentence explaining what the evidence proves.

**Step 8 — Correct**

If verification fails, give the agent the exact error, observed behaviour and relevant file—not a guess. Ask for two hypotheses, choose one test, and apply the smallest evidence-backed correction.

> Evidence: save the prompt or command output under `evidence/lab-4.6/step-8`. Write one sentence explaining what the evidence proves.

**Step 9 — Challenge**

Change one boundary condition (empty input, network failure, unknown ID, narrow viewport or missing configuration). Predict the behaviour before running it, then add or update a regression test.

> Evidence: save the prompt or command output under `evidence/lab-4.6/step-9`. Write one sentence explaining what the evidence proves.

**Step 10 — Commit the checkpoint**

Confirm `git diff --check` and a clean secret scan. Commit the verified increment with a precise message such as `feat(lab-4.6): orchestrate-the-taskflow-capstone-release`. Record one assumption corrected during the lab.

> Evidence: save the prompt or command output under `evidence/lab-4.6/step-10`. Write one sentence explaining what the evidence proves.

#### Expected result

Reconcile findings, run all gates, demonstrate TaskFlow and publish evidence-backed release notes. The repository remains understandable to a fresh agent, relevant checks pass, and no unrelated files change.

#### Troubleshooting and recovery

- **The agent edits too many files:** stop the run, keep the evidence, restore only agent-created changes, name the permitted files, and restart at Plan.
- **A command is missing:** inspect `package.json` before inventing a replacement; add the script only if it is part of the agreed deliverable.
- **The test passes but the feature fails:** verify that the test reaches the real boundary and is not mocking the behaviour under investigation.
- **The error changes after every prompt:** stop prompt iteration. Reproduce once, minimise the case, form two hypotheses and collect discriminating evidence.

#### Independent challenge

Repeat the verification with a changed boundary condition. Do not ask the agent for the answer first. Write your prediction, run the experiment, then use the discrepancy to improve the implementation or test.

#### Reflection

1. Which assumption had the highest risk? 2. What evidence increased confidence most? 3. What should be preserved in project context? 4. What would you explain differently to a colleague?

## Appendix A — Prompt Review Checklist

Before sending: Is the goal observable? Is context sufficient but bounded? Are constraints meaningful? Are deliverables named? Are verification commands independent of the agent? Are secrets and personal data excluded?

## Appendix B — AI-Generated Code Review Checklist

Check scope, behaviour, types, error paths, accessibility, security, tests, dependency necessity, configuration, logs, performance, readability and rollback. Trace data from user input to storage and back.

## Appendix C — Troubleshooting Decision Tree

Reproduce → minimise → classify layer → gather evidence → state two hypotheses → run one discriminating test → apply smallest fix → add regression test → rerun full gate.

## Appendix D — Glossary

**Agentic loop:** controlled cycle from intent to verified checkpoint. **Context engineering:** deliberate selection of instructions and evidence. **Vertical slice:** thin end-to-end user value. **Contract:** shared interface between components. **Release gate:** automated condition for promotion. **Skill:** reusable workflow knowledge. **Subagent:** bounded delegated agent task. **MCP:** Model Context Protocol for typed tools and context.
