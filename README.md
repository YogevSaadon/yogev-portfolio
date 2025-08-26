# Yogev Portfolio

A modern, responsive portfolio website built with React and Vite.

## CRITICAL DEVELOPMENT RULE

**BEFORE MAKING ANY CHANGES:**
1. **UNDERSTAND THE FULL PROJECT** - Read through all relevant files and components
2. **MAP THE DEPENDENCIES** - Understand how CSS, components, and themes interact
3. **CHECK EXISTING PATTERNS** - Look at how similar functionality is implemented
4. **IDENTIFY ROOT CAUSES** - Don't make surface-level fixes without understanding why issues exist
5. **TEST HOLISTICALLY** - Verify changes work across the entire project, not just isolated components

**NEVER make changes without first understanding the complete context and architecture.**

---

## COMPLETE PROJECT ANALYSIS

### Project Architecture Overview

**Technology Stack:**
- React 19 + Vite 6.2.0
- Modern CSS with CSS Modules + CSS Variables
- Lucide React for icons
- React 19 native head management for SEO
- Performance monitoring and lazy loading

**Directory Structure:**
```
src/
├── main.jsx                 # Entry point
├── App.jsx                  # Root component with providers
├── index.css               # Legacy CSS (minimal)
├── App.css                 # Legacy CSS (minimal)
├── styles/                 # NEW CSS ARCHITECTURE
│   ├── variables.css       # Core design tokens & theme variables
│   ├── base.css           # Typography, resets, global styles
│   ├── components.css     # Reusable component patterns
│   ├── responsive.css     # Responsive design utilities
│   ├── accessibility.css  # A11y improvements
│   ├── animations.css     # Animation utilities
│   └── themes.css         # Alternative theme system (unused?)
├── components/
│   ├── common/            # Shared utilities
│   ├── layout/            # Layout components
│   ├── Hero/              # Landing section
│   ├── Skills/            # Skills showcase
│   ├── Projects/          # Projects section
│   ├── Education/         # Education section
│   └── Contact/           # Contact section
├── context/
│   └── ThemeContext.jsx   # Theme state management
├── hooks/                 # Custom React hooks
└── utils/                 # Utility functions
```

### Theme System Architecture

**CRITICAL: DUAL CSS VARIABLE SYSTEMS EXIST**

**System 1: New Architecture (Primary)**
- Location: `src/styles/variables.css`
- Core tokens: `--color-orange`, `--color-blue`, `--color-dark-bg`, etc.
- Semantic tokens: `--bg-primary`, `--text-primary`, etc.
- Component tokens: `--bubble-gradient-start`, `--line-color`, etc.
- Legacy aliases: `--primary`, `--secondary`, `--text`, etc.

**System 2: Alternative System**
- Location: `src/styles/themes.css`
- Uses different variable names: `--color-primary`, `--color-bg-primary`, etc.
- Status: UNCLEAR if used or conflicting

**Theme Switching:**
- Managed by `ThemeContext.jsx`
- Sets `data-theme="dark"` or `data-theme="light"` on document root
- Components use `[data-theme="dark"]` selectors for dark mode overrides

**Color Scheme:**
- **Light Mode**: Orange primary (#D97706), cream backgrounds (#FDF6E3)
- **Dark Mode**: Blue primary (#40E0D0), dark blue backgrounds (#111827)

### Component Dependencies

**CSS Import Strategy:**
```
App.jsx imports:
  variables.css (first - defines tokens)
  base.css (typography, resets)
  components.css (reusable patterns)
  responsive.css
  accessibility.css
  animations.css

Individual components import:
  [ComponentName].module.css (scoped styles)
```

**Theme Usage:**
- Only `ThemeToggle.jsx` directly uses `useTheme()` hook
- All other components rely on CSS variables that change via `[data-theme]` selectors
- Each component has own dark mode overrides in its module CSS

### Known Issues & Architectural Problems

**CSS Conflicts:**
1. **Dual Variable Systems**: `variables.css` vs `themes.css` may conflict
2. **Legacy Variable Aliases**: Added to fix broken components, creates redundancy
3. **Component Isolation**: Each component has separate dark mode rules
4. **Specificity Issues**: Dark mode overrides may not always take precedence

**Theme Inconsistencies:**
1. **ThemeToggle Component**: Has its own variable system in `ThemeToggle.css`
2. **Skills Component**: Dark mode overrides work, light mode issues persist
3. **Mixed Approaches**: Some use CSS variables, others use hard-coded colors

**Performance Concerns:**
1. **Multiple CSS Files**: 7+ CSS files loaded globally
2. **Duplicate Rules**: Legacy aliases create redundant CSS
3. **Unused Code**: `themes.css` purpose unclear

### Critical Development Guidelines

**Before Making CSS Changes:**
1. **Identify which variable system** the component uses
2. **Check for existing dark mode overrides** in component CSS
3. **Verify variable definition** in `variables.css`
4. **Test both light and dark modes** immediately
5. **Check for specificity conflicts** with other rules

**Before Making Component Changes:**
1. **Map all CSS dependencies** (global + module styles)
2. **Identify theme integration points**
3. **Check for custom hooks usage**
4. **Verify lazy loading impact**

**CSS Variable Debugging:**
- Use browser DevTools to check computed values
- Search for variable usage across all CSS files
- Check `[data-theme]` attribute is set correctly on root element

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.