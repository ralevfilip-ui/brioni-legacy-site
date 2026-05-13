# AGENTS.md — brioni-legacy-site

## Stack

Vite 5 / React 18 / TypeScript 5.8 / Tailwind CSS 3 + shadcn/ui / React Router 6 / TanStack React Query 5

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Dev server on **port 8080**, host `::`, HMR overlay off |
| `npm run build` | Production build → `dist/` |
| `npm run lint` | ESLint flat config |
| `npm test` | Vitest run (jsdom) |
| `npm run test:watch` | Vitest watch |
| `npm run preview` | Vite preview |

## Architecture

- **Entry**: `src/main.tsx` → `App.tsx` (BrowserRouter, QueryClientProvider, TooltipProvider, Toaster, Sonner)
- **Path alias**: `@` → `./src` (Vite, Vitest, tsconfig all configured)
- **shadcn/ui**: `components.json` at root; components live in `@/components/ui/`; utils in `@/lib/utils.ts` (`cn()` using `clsx` + `tailwind-merge`)
- **Routing**: React Router v6 in `App.tsx`. New routes go **above** the catch-all `<Route path="*" element={<NotFound />} />`.
- **Reservation form** (`ReservationModal.tsx`) → opens `mailto:brionipark@yahoo.com` with pre-filled details (no backend)
- **Google Fonts**: Playfair Display + Inter loaded via `@import` in `src/index.css` (not in `index.html`)
- **CI**: `.github/workflows/deploy.yml` builds on push to `main` and deploys to GitHub Pages. Uses `404.html` trick for SPA routing.

## Testing

- **Unit**: Vitest + jsdom, globals enabled, setup at `src/test/setup.ts` (mocks `matchMedia`). Test files: `src/**/*.{test,spec}.{ts,tsx}`

## Codebase conventions

- **TypeScript is lenient**: `strict: false`, `strictNullChecks: false`, `noImplicitAny: false`, `noUnusedLocals: false`, `noUnusedParameters: false`, `skipLibCheck: true`
- **`no-unused-vars` ESLint rule is OFF**
- **Dark mode only**: Tailwind `darkMode: ["class"]`, but the default theme is dark (no light mode toggle). Root CSS vars define a dark palette with `--background: 0 0% 4%`
- **Language**: Macedonian (Macedonian Cyrillic). HTML `lang="mk"`. Content and metadata are all in Macedonian.
- **No Prettier config** — only ESLint for code quality
