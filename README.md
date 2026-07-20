# Tiles Gallery

A tiles product catalog and browsing app built with **Next.js 16** (App Router) and **React 19**.

## Purpose

Browse, search, and discover tiles — ceramic, marble, granite, and more. Users can sign up, log in, view tile details, and manage their profile. The app showcases a modern stack with 3D visuals, animated UI, and social auth.

## Tech Stack

| Layer        | Technology |
|-------------|-----------|
| Framework   | Next.js 16 (App Router) + React 19 |
| Styling     | Tailwind CSS v4 + daisyUI v5 + HeroUI v3 |
| Auth        | better-auth (email/password + Google OAuth), MongoDB adapter |
| Data        | Remote JSON endpoint (read-only, no local DB for tiles) |
| 3D          | React Three Fiber + Drei + React Spring |
| UI          | react-hook-form, react-toastify, react-fast-marquee, react-icons, Gravity UI Icons, animate.css |

## How It Works

- **Home** (`/`): hero banner, marquee, featured tiles (first 8), interactive 3D sphere
- **All Tiles** (`/all-tiles`, auth-protected): full catalog with live search
- **Tile Detail** (`/tiles/[id]`): image, description, specs, price
- **Auth**: login/signup with email/password or Google — powered by better-auth
- **Profile** (`/my-profile`): view and edit user info
- Tile data is fetched from a remote `data.json` URL; auth data persists via MongoDB

## Getting Started

```bash
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # start production server
npm run lint      # ESLint (flat config, core-web-vitals)
```

## Environment

```env
BETTER_AUTH_SECRET=<secret>
BETTER_AUTH_URL=http://localhost:3000
MDB_URL=<mongodb-connection-string>
GOOGLE_CLIENT_ID=<google-oauth-client-id>
GOOGLE_CLIENT_SECRET=<google-oauth-client-secret>
```

A `.env` file is already present with working values.

## Notes

- Pure JSX — no TypeScript
- No test framework configured
