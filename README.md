# Rumah Gerak Platform

A MEVN application for coordinating a volunteer network. The project combines registration, activity reporting, field locations, issue reports, content publishing, and administrative views.

## What it does

- Registers volunteers and volunteer teams, with QR-related verification flows.
- Tracks volunteer activities and field reports with uploaded media.
- Maintains location-based information for posts and campaign materials.
- Publishes articles, galleries, vision and mission content, and public feedback.
- Provides account-based access for administrative workflows.

## Stack

MongoDB, Express, Node.js, Vue 3, Vue Router, Vuex, Tailwind CSS, and JWT-based authentication.

## Project structure

- `routes/` and `model/` — backend API and MongoDB models.
- `frontend/src/views/` — public and administrative views.
- `frontend/src/services/` — router, store, and API clients.
- `uploads/` — local user-uploaded files; excluded from this public snapshot and ignored by Git.

## Run locally

Copy `.env.example` to an untracked `.env` file and set a local MongoDB connection, fresh `JWT_SECRET`, and an encryption key. Then:

```bash
npm install
cd frontend && npm install && cd ..
npm run dev
```

## Portfolio note

This is a clean portfolio snapshot with a new Git history. Environment values and user-uploaded files from the development repository are not included. It is not a hosted public demo. The MIT license and attribution for the original MEVN authentication scaffold are retained.
