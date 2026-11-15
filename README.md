# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

```
my-portfolio-web
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  └─ icons.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ hero.png
│  │  ├─ react.svg
│  │  └─ vite.svg
│  ├─ index.css
│  └─ main.tsx
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
```
my-portfolio-web
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ cases
│  │  ├─ aaa.png
│  │  ├─ aqua.svg
│  │  ├─ beh.png
│  │  ├─ crypto.svg
│  │  └─ priv.svg
│  ├─ copy.svg
│  ├─ cursor.svg
│  ├─ deeplink.svg
│  ├─ downloadcours.svg
│  ├─ downscrollcoursor.svg
│  ├─ example.svg
│  ├─ favicon.svg
│  ├─ icons.svg
│  ├─ lock.svg
│  ├─ opencase.svg
│  ├─ pr2.svg
│  ├─ pr4.svg
│  └─ Лушина_А_Р_ui_ux.pdf
├─ README.md
├─ src
│  ├─ App.module.css
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ 0016.jpg
│  │  ├─ a.jpg
│  │  ├─ cases.svg
│  │  ├─ contact.svg
│  │  ├─ cv.svg
│  │  ├─ getintouch.svg
│  │  ├─ noncom.svg
│  │  └─ pp.svg
│  ├─ components
│  │  ├─ About
│  │  │  ├─ About.module.css
│  │  │  └─ About.tsx
│  │  ├─ CaseCard
│  │  │  ├─ CaseCard.module.css
│  │  │  └─ CaseCard.tsx
│  │  ├─ CaseImageViewer
│  │  │  ├─ CaseImageViewer.module.css
│  │  │  └─ CaseImageViewer.tsx
│  │  ├─ Contacts
│  │  │  ├─ Contacts.module.css
│  │  │  └─ Contacts.tsx
│  │  ├─ Cursor
│  │  │  ├─ Cursor.module.css
│  │  │  └─ Cursor.tsx
│  │  ├─ Header
│  │  │  ├─ Header.module.css
│  │  │  └─ Header.tsx
│  │  ├─ Hero
│  │  │  ├─ Hero.module.css
│  │  │  └─ Hero.tsx
│  │  ├─ Modal
│  │  │  ├─ Modal.module.css
│  │  │  └─ Modal.tsx
│  │  ├─ Reveal
│  │  │  ├─ Reveal.module.css
│  │  │  └─ Reveal.tsx
│  │  ├─ Square
│  │  │  ├─ Square.module.css
│  │  │  └─ Square.tsx
│  │  └─ Timeline
│  │     ├─ Timeline.module.css
│  │     └─ Timeline.tsx
│  ├─ hooks
│  │  └─ useScrollReveal.ts
│  ├─ index.css
│  └─ main.tsx
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```