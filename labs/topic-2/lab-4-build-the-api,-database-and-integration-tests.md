# Lab 4: Build the API, database and integration tests

## Goal

Implement validated routes and persistence behind the typed interface.

## Prerequisites

- Completed previous lab
- Development environment verified
- No real secrets in prompts or repository

## Steps

1. Design the tasks table: id, title, description, status, created_at and updated_at.

2. Generate a migration and deterministic seed script; inspect SQL before execution.

3. Implement GET /api/tasks, POST /api/tasks and PATCH /api/tasks/:id/status.

4. Add schema validation and consistent {error:{code,message,details}} responses.

5. Keep route, service and repository responsibilities separate.

6. Connect the frontend through a typed apiClient module and remove fixtures.

7. Generate integration tests for success, invalid input and missing record cases.

8. Run the complete test suite twice: clean database and seeded database.


## Verification

The browser creates and updates persisted tasks; all integration tests pass independently.

## Evidence to submit

- Saved prompt
- Reviewed diff
- Command/test output
- Short reflection on one corrected agent assumption
