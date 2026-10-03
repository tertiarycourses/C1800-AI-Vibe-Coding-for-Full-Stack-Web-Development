# Lab 8: Express API

C1800 · LO4 · Request tasks and create a resource with correct HTTP status.

## Starting project

This folder is standalone. The React scripts, package manifest, fixture, test and (for Labs 8–10) Express API are all included. The mock data uses invented task records.

## Procedure

1. Open labs/lab-08-express-api and inspect mock-data/tasks.json.
2. Run `npm install` and `npm run dev`; open the local Vite URL.
3. Locate the React root, App component, state, event handler and derived task count.
4. In a second terminal, run `npm run api`; use curl on GET /api/tasks and POST /api/tasks with JSON. Confirm 200, 201 and 400 responses.
5. Implement the lab objective: Request tasks and create a resource with correct HTTP status.
6. Start npm run api. Use curl http://localhost:3001/api/tasks, then curl -X POST -H "Content-Type: application/json" -d "{\"title\":\"Review API\"}" http://localhost:3001/api/tasks. Compare 200, 201 and 400 cases.
7. Run `npm test` and `npm run build`. Fix any failed assertion or build error.
8. Resize to 375 px and desktop width. Confirm controls remain usable and no horizontal scroll appears.
9. Ask an AI assistant for one bounded improvement; compare its diff with the acceptance checks before accepting it.
10. Record the UI screenshot, command output and one design or security trade-off in your evidence log.

## Acceptance evidence

- Fixture test and Vite build pass.
- A task can be added, toggled and searched; empty title is rejected.
- At 375 px, cards wrap and controls stay visible.
- Learner explains the input boundary, ownership, verification signal and one AI suggestion they rejected.
- API GET returns tasks, valid POST returns 201, invalid POST returns 400.
