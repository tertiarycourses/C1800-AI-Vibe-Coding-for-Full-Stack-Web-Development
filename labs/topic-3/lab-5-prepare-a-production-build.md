# Lab 5: Prepare a production build

## Goal

Make configuration, logs, health checks and builds deployment-ready.

## Prerequisites

- Completed previous lab
- Development environment verified
- No real secrets in prompts or repository

## Steps

1. Create .env.example with names and safe placeholders only; keep .env ignored.

2. Validate required environment variables at application startup.

3. Generate production build commands for client and server and document their outputs.

4. Serve the built client and confirm API routing works in production mode.

5. Add structured request logs without tokens, passwords or personal data.

6. Add readiness and liveness checks and a graceful shutdown handler.

7. Run a clean install and production smoke test from a new temporary directory.


## Verification

A clean checkout builds and starts with documented commands and passes the smoke test.

## Evidence to submit

- Saved prompt
- Reviewed diff
- Command/test output
- Short reflection on one corrected agent assumption
