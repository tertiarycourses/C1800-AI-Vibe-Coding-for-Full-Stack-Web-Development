# Lab 6: Create CI/CD and release gates

## Goal

Automate install, lint, typecheck, test and build on GitHub Actions.

## Prerequisites

- Completed previous lab
- Development environment verified
- No real secrets in prompts or repository

## Steps

1. Prompt the agent for a pipeline threat and failure analysis before YAML generation.

2. Create .github/workflows/ci.yml using least-privilege permissions and pinned major action versions.

3. Add dependency caching keyed by the lockfile.

4. Create separate lint, typecheck, test and build steps with readable failure output.

5. Upload test reports or build artifacts only when useful; set retention limits.

6. Protect deployment behind successful CI and environment-specific secrets.

7. Validate YAML locally, push a feature branch and inspect the Actions run.

8. Introduce a controlled failing test, observe the gate, then revert it.


## Verification

The workflow blocks a deliberate defect and passes after the defect is corrected.

## Evidence to submit

- Saved prompt
- Reviewed diff
- Command/test output
- Short reflection on one corrected agent assumption
