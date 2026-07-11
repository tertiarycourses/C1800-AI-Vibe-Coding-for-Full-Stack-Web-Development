# Lab 3: Generate and refine the frontend

## Goal

Build an accessible responsive task dashboard through small agent-reviewed increments.

## Prerequisites

- Completed previous lab
- Development environment verified
- No real secrets in prompts or repository

## Steps

1. Prompt for a component map before code: AppShell, TaskForm, TaskList, TaskCard and StatusFilter.

2. Generate semantic HTML and keyboard-accessible controls; reject div-only interaction patterns.

3. Create typed Task and TaskStatus contracts in shared/types.ts.

4. Implement loading, empty, populated and error states using fixture data.

5. Add responsive CSS for 375 px and 1280 px widths.

6. Ask a review agent to inspect accessibility, state coverage and component boundaries.

7. Run frontend tests and manually check tab order and visible focus.


## Verification

Users can add and filter fixture tasks at mobile and desktop widths using keyboard controls.

## Evidence to submit

- Saved prompt
- Reviewed diff
- Command/test output
- Short reflection on one corrected agent assumption
