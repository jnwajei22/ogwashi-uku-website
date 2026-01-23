Ogwashi-Uku USA Association Website

Official website for the Ogwashi-Uku USA Association — chapters, events, announcements, impact, and member resources.

Tech Stack

Next.js (App Router)

TypeScript

React

Tailwind CSS (v3)

Requirements

Node.js 18+ (recommended)

npm

Getting Started
Install dependencies

npm install

Run the development server

npm run dev

Open: http://localhost:3000

Build & Run (Production)
Build

npm run build

Start

npm start

Project Structure (High-Level)

src/app/ — routes (App Router)

src/components/ — shared UI + site components

src/contexts/ — client contexts (where applicable)

public/ — static assets

Environment Variables

This project does not require environment variables for basic operation.

If/when you add services (email, auth, database, payments), store secrets in .env.local and never commit them.

Deployment

Works great on Vercel (recommended):

Push to main

Import repo in Vercel

Build command: npm run build

Output: Next.js default

License

MIT — see LICENSE.