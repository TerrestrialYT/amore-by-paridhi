/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * NOTE — Architecture:
 * This project uses static HTML entry points (index.html, about.html) rather
 * than a single-page React app. The React / Vite setup exists solely so that
 * Vite processes src/index.css (Tailwind CSS v4) and injects it into the HTML
 * pages via the <script type="module" src="/src/main.tsx"> tag.
 *
 * App.tsx intentionally renders nothing — do not add UI here.
 */
export default function App() {
  return null;
}
