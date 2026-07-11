# AI Vibe Coding for Full Stack Web Development

**Course Code:** C1800

**Document:** Learner Guide and Step-by-Step Lab Manual

## Course overview

Build the TaskFlow capstone through eight verified labs. Use the prompt contract: Goal, Context, Constraints, Deliverables, Verification.

## Topic 1: Vibe Coding Principles for Full Stack Development

### Lab 1: Create an agent-ready project scaffold

**Goal:** Turn a product brief into a bounded, inspectable full-stack repository.

**Steps:**

1. Create a TaskFlow repository with frontend, backend, shared, tests and docs folders.

2. Write PROJECT.md with users, problem, scope, non-goals and acceptance criteria.

3. Write AGENTS.md with commands, coding conventions, safety constraints and definition of done.

4. Ask an AI coding agent to propose a file plan before writing code; approve only in-scope files.

5. Create a vertical-slice backlog: health endpoint, task list, create task and status update.

6. Run a repository inventory and record the baseline in docs/checkpoints.md.


**Test it:** The agent can explain the architecture and no generated file sits outside the agreed plan.

### Lab 2: Engineer context and prompts for a vertical slice

**Goal:** Use goal, context, constraints and verification to generate a stable first slice.

**Steps:**

1. Create prompts/vertical-slice.md with Goal, Context, Constraints, Deliverables and Verification headings.

2. Specify a React client, Node/Express API and SQLite persistence; require TypeScript throughout.

3. Add explicit non-goals: authentication, billing and real-time updates.

4. Ask the agent to identify assumptions and risks before implementation.

5. Generate the health endpoint and a frontend connectivity indicator.

6. Run lint, typecheck and tests; paste results into docs/checkpoints.md.

7. Start a fresh agent session using only repository context and verify it can continue accurately.


**Test it:** GET /api/health returns 200 and the UI shows API Connected without hidden manual fixes.

## Topic 2: Frontend & Backend Implementation with Agents

### Lab 3: Generate and refine the frontend

**Goal:** Build an accessible responsive task dashboard through small agent-reviewed increments.

**Steps:**

1. Prompt for a component map before code: AppShell, TaskForm, TaskList, TaskCard and StatusFilter.

2. Generate semantic HTML and keyboard-accessible controls; reject div-only interaction patterns.

3. Create typed Task and TaskStatus contracts in shared/types.ts.

4. Implement loading, empty, populated and error states using fixture data.

5. Add responsive CSS for 375 px and 1280 px widths.

6. Ask a review agent to inspect accessibility, state coverage and component boundaries.

7. Run frontend tests and manually check tab order and visible focus.


**Test it:** Users can add and filter fixture tasks at mobile and desktop widths using keyboard controls.

### Lab 4: Build the API, database and integration tests

**Goal:** Implement validated routes and persistence behind the typed interface.

**Steps:**

1. Design the tasks table: id, title, description, status, created_at and updated_at.

2. Generate a migration and deterministic seed script; inspect SQL before execution.

3. Implement GET /api/tasks, POST /api/tasks and PATCH /api/tasks/:id/status.

4. Add schema validation and consistent {error:{code,message,details}} responses.

5. Keep route, service and repository responsibilities separate.

6. Connect the frontend through a typed apiClient module and remove fixtures.

7. Generate integration tests for success, invalid input and missing record cases.

8. Run the complete test suite twice: clean database and seeded database.


**Test it:** The browser creates and updates persisted tasks; all integration tests pass independently.

## Topic 3: Deployment to the Cloud & CI/CD Pipelines

### Lab 5: Prepare a production build

**Goal:** Make configuration, logs, health checks and builds deployment-ready.

**Steps:**

1. Create .env.example with names and safe placeholders only; keep .env ignored.

2. Validate required environment variables at application startup.

3. Generate production build commands for client and server and document their outputs.

4. Serve the built client and confirm API routing works in production mode.

5. Add structured request logs without tokens, passwords or personal data.

6. Add readiness and liveness checks and a graceful shutdown handler.

7. Run a clean install and production smoke test from a new temporary directory.


**Test it:** A clean checkout builds and starts with documented commands and passes the smoke test.

### Lab 6: Create CI/CD and release gates

**Goal:** Automate install, lint, typecheck, test and build on GitHub Actions.

**Steps:**

1. Prompt the agent for a pipeline threat and failure analysis before YAML generation.

2. Create .github/workflows/ci.yml using least-privilege permissions and pinned major action versions.

3. Add dependency caching keyed by the lockfile.

4. Create separate lint, typecheck, test and build steps with readable failure output.

5. Upload test reports or build artifacts only when useful; set retention limits.

6. Protect deployment behind successful CI and environment-specific secrets.

7. Validate YAML locally, push a feature branch and inspect the Actions run.

8. Introduce a controlled failing test, observe the gate, then revert it.


**Test it:** The workflow blocks a deliberate defect and passes after the defect is corrected.

## Topic 4: Agent Skills, Subagents & MCP Implementation

### Lab 7: Create reusable skills and bounded subagents

**Goal:** Package repeatable routing, security and test workflows without overlapping WSQ tooling.

**Steps:**

1. Create non-wsq-route-generator with a clear trigger description and minimal instructions.

2. Create non-wsq-security-review that reports file, line, severity and remediation.

3. Define non-wsq-frontend-reviewer and non-wsq-api-tester agent roles with read/write boundaries.

4. Create non-wsq-courseware-qa command and pre/post hooks that reject prohibited programme terms.

5. Run the skill validator and correct metadata or naming errors.

6. Delegate frontend review and API test generation as independent bounded tasks.

7. Review diffs, reconcile conflicts centrally and record decisions.


**Test it:** Every custom artifact begins non-wsq-, passes validation and does not alter WSQ files.

### Lab 8: Implement an MCP-style tool and orchestrate the capstone

**Goal:** Expose a safe project-status tool and coordinate verified parallel work.

**Steps:**

1. Define a project_status tool contract with input schema, output schema and explicit errors.

2. Implement a local stdio server that reads test summaries and git status without executing arbitrary input.

3. Register the server in a project-scoped configuration using environment-variable placeholders.

4. Call the tool with valid input, missing input and malformed input; record structured results.

5. Ask separate agents to review UI, API, CI and security using bounded prompts.

6. Merge only evidence-backed changes and run the full verification pipeline.

7. Generate a release note containing features, test evidence, limitations and rollback steps.

8. Demonstrate the deployed TaskFlow flow: create, filter and update a task.


**Test it:** The orchestrated release passes all gates and the tool cannot access paths outside the project.
