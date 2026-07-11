# Lab 7: Create reusable skills and bounded subagents

## Goal

Package repeatable routing, security and test workflows without overlapping WSQ tooling.

## Prerequisites

- Completed previous lab
- Development environment verified
- No real secrets in prompts or repository

## Steps

1. Create non-wsq-route-generator with a clear trigger description and minimal instructions.

2. Create non-wsq-security-review that reports file, line, severity and remediation.

3. Define non-wsq-frontend-reviewer and non-wsq-api-tester agent roles with read/write boundaries.

4. Create non-wsq-courseware-qa command and pre/post hooks that reject prohibited programme terms.

5. Run the skill validator and correct metadata or naming errors.

6. Delegate frontend review and API test generation as independent bounded tasks.

7. Review diffs, reconcile conflicts centrally and record decisions.


## Verification

Every custom artifact begins non-wsq-, passes validation and does not alter WSQ files.

## Evidence to submit

- Saved prompt
- Reviewed diff
- Command/test output
- Short reflection on one corrected agent assumption
