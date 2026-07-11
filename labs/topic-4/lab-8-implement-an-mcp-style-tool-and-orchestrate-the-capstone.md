# Lab 8: Implement an MCP-style tool and orchestrate the capstone

## Goal

Expose a safe project-status tool and coordinate verified parallel work.

## Prerequisites

- Completed previous lab
- Development environment verified
- No real secrets in prompts or repository

## Steps

1. Define a project_status tool contract with input schema, output schema and explicit errors.

2. Implement a local stdio server that reads test summaries and git status without executing arbitrary input.

3. Register the server in a project-scoped configuration using environment-variable placeholders.

4. Call the tool with valid input, missing input and malformed input; record structured results.

5. Ask separate agents to review UI, API, CI and security using bounded prompts.

6. Merge only evidence-backed changes and run the full verification pipeline.

7. Generate a release note containing features, test evidence, limitations and rollback steps.

8. Demonstrate the deployed TaskFlow flow: create, filter and update a task.


## Verification

The orchestrated release passes all gates and the tool cannot access paths outside the project.

## Evidence to submit

- Saved prompt
- Reviewed diff
- Command/test output
- Short reflection on one corrected agent assumption
