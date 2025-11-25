# KitaJobs

Full-stack job board and community platform for the Philippine tech ecosystem.

<!-- Badges -->

[![Status](https://img.shields.io/badge/status-active-brightgreen)]()
[![Frontend Version](https://img.shields.io/badge/frontend-v0.0.0-blue)]()
[![Backend Dependencies](https://img.shields.io/badge/backend-deps-up--to--date-lightgrey)]()

## Table of contents

- [What it does](#what-it-does)
- [Why it's useful](#why-its-useful)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Development workflow](#development-workflow)
- [Project structure & important files](#project-structure--important-files)
- [Where to get help](#where-to-get-help)
- [Maintainers & contributing](#maintainers--contributing)

## What it does

KitaJobs is a LinkedIn-style platform where employers, freelancers and job seekers can create profiles, post and browse job listings, and manage applications. The project includes:

- A React + Vite frontend (TypeScript)
- A Node.js + Express backend (TypeScript) with JWT authentication
- MongoDB for data persistence

API base path: `/api` (see `backend/src/server.ts`).

## Why it's useful

- Focused job marketplace for tech roles.
- Ready-to-run full-stack starter: auth, user profiles, job CRUD, and client UI.
- Modern stack (Vite, React, Tailwind, Zustand) that is easy to extend.

## Tech stack

- Frontend: React, Vite, TypeScript, Tailwind CSS, Zustand, Framer Motion
- Backend: Node.js, Express, TypeScript, Mongoose, JWT
- Database: MongoDB (Atlas or local)

## Getting started

### Prerequisites

- Node.js (v18+ recommended)
- npm (or yarn/pnpm)
- MongoDB (Atlas URI or local instance)

### Quick start (development)

1. Clone the repository

```bash
git clone <your-repo-url>
cd kita-jobs-app
```

2. Backend setup

```powershell
cd backend
npm install
# create a .env file with the following variables (example):
# MONGODB_URI=your-mongodb-connection-string
# JWT_SECRET=your-secret-key
# PORT=8000
npm run dev
```

Notes: the backend dev script uses `nodemon` with `tsx` so TypeScript runs directly during development. The compiled production server entry is `dist/server.js` after `npm run build`.

3. Frontend setup

```powershell
cd frontend
npm install
npm run dev
```

The frontend dev server runs via Vite (default port shown in terminal, often `5173`).

### Production build & run

```powershell
# Frontend: produce static assets
cd frontend
npm run build

# Backend: compile TypeScript and run built server
cd ../backend
npm run build
npm start
```

## Development workflow

- Use `npm run dev` in each of `frontend` and `backend` for iterative development.
- Linting: run `npm run lint` from `frontend`.
- When adding features, create a new branch, add tests (where applicable), and open a PR.

## Project structure & important files

- `frontend/` — React + Vite client
  - `src/main.tsx` — app entry (mounts `<App />`)
  - `src/App.tsx` — top-level routes and layout
- `backend/` — Express API
  - `src/server.ts` — server bootstrap and route registration
  - `src/db.ts` — MongoDB connection helper
  - `src/controllers/` — request handlers
  - `src/models/` — Mongoose models (`User`, `Job`)
  - `src/routes/` — express route definitions

## Where to get help

- Open an issue on the repository (Issues tab).
- For quick questions or reporting bugs, email: `rashidvisda@gmail.com`.

## Maintainers & contributing

- **Maintainer:** repository owner
- **Want to contribute?** See [CONTRIBUTING.md](CONTRIBUTING.md) for a short guide on how to file issues, open PRs, and coding conventions.

## Notes & next steps

- This README provides a focused developer onboarding. For deeper API docs or troubleshooting, add a `docs/` folder or a wiki and link it here.

---

If you'd like, I can also:

- add a minimal `CONTRIBUTING.md` (created alongside this update)
- add a CI workflow example or basic `LICENSE` file
