# Lab 4: State and controls

C1800 · LO2 · Toggle status and derive the open count from state.

## Starting project

This folder is standalone. The React scripts, package manifest, fixture, test and (for Labs 8–10) Express API are all included. The mock data uses invented task records.

## Procedure

1. Open labs/lab-04-state-and-controls and inspect mock-data/tasks.json.
2. Run `npm install` and `npm run dev`; open the local Vite URL.
3. Locate the React root, App component, state, event handler and derived task count.
4. Implement the lab objective: Toggle status and derive the open count from state.
5. In src/App.jsx toggle t-101 and confirm openCount changes from two to one. Explain why the count is derived from tasks rather than stored separately. Repeat after adding a task.
6. Run `npm test` and `npm run build`. Fix any failed assertion or build error.
7. Resize to 375 px and desktop width. Confirm controls remain usable and no horizontal scroll appears.
8. Ask an AI assistant for one bounded improvement; compare its diff with the acceptance checks before accepting it.
9. Record the UI screenshot, command output and one design or security trade-off in your evidence log.

## Acceptance evidence

- Fixture test and Vite build pass.
- A task can be added, toggled and searched; empty title is rejected.
- At 375 px, cards wrap and controls stay visible.
- Learner explains the input boundary, ownership, verification signal and one AI suggestion they rejected.
