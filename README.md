# Vite React Boilerplate

A modern, production-ready React boilerplate built with Vite, TypeScript, and Tailwind CSS, featuring a feature-based folder structure and comprehensive tooling setup.

## Tech Stack

### Core Dependencies

- **React** (^19.1.1) - Latest React with concurrent features
- **React DOM** (^19.1.1) - React rendering library
- **TypeScript** (~5.9.3) - Type-safe JavaScript
- **Vite** (^7.1.7) - Next-generation frontend build tool

### Routing

- **React Router DOM** (^7.9.5) - Declarative routing for React

### State Management

- **Zustand** (^5.0.8) - Lightweight state management
- **TanStack Query** (^5.90.6) - Powerful data synchronization for React

### Styling

- **Tailwind CSS** (^4.1.16) - Utility-first CSS framework
- **@tailwindcss/vite** (^4.1.16) - Vite plugin for Tailwind CSS
- **PostCSS** (^8.5.6) - CSS transformation tool
- **Autoprefixer** (^10.4.21) - PostCSS plugin to parse CSS and add vendor prefixes
- **tw-animate-css** (^1.4.0) - Additional Tailwind animations

### UI Components

- **Radix UI** - Accessible component primitives:
  - @radix-ui/react-avatar (^1.1.10)
  - @radix-ui/react-dropdown-menu (^2.1.16)
  - @radix-ui/react-label (^2.1.7)
  - @radix-ui/react-slot (^1.2.3)
- **Lucide React** (^0.552.0) - Beautiful icon library
- **class-variance-authority** (^0.7.1) - Component variant management
- **clsx** (^2.1.1) - Utility for constructing className strings conditionally
- **tailwind-merge** (^3.3.1) - Merge Tailwind CSS classes without style conflicts

### HTTP Client

- **Axios** (^1.13.1) - Promise-based HTTP client

### Development Dependencies

- **ESLint** (^9.39.0) - JavaScript/TypeScript linter
- **TypeScript ESLint** (^8.45.0) - ESLint rules for TypeScript
- **ESLint Plugins**:
  - eslint-plugin-react (^7.37.5)
  - eslint-plugin-react-hooks (^5.2.0)
  - eslint-plugin-react-refresh (^0.4.22)
- **@vitejs/plugin-react** (^5.0.4) - Official Vite plugin for React
- **Type Definitions**:
  - @types/node (^24.10.0)
  - @types/react (^19.1.16)
  - @types/react-dom (^19.1.9)
  - @types/react-router-dom (^5.3.3)
- **@eslint/js** (^9.36.0) - ESLint's JavaScript configuration
- **globals** (^16.4.0) - Global variables for ESLint

## Project Structure

```
src/
├── features/                    # Organization by features/modules
│   ├── errors/                 # Error pages feature
│   │   ├── components/        # Error-specific components
│   │   │   └── ErrorIllustration.tsx
│   │   ├── pages/             # Error pages
│   │   │   ├── NotFound.tsx   # 404 page
│   │   │   ├── Unauthorized.tsx  # 401 page
│   │   │   ├── Forbidden.tsx     # 403 page
│   │   │   └── ServerError.tsx   # 500 page
│   │   └── types/
│   │       └── error.types.ts
│   ├── auth/                   # Authentication module
│   │   ├── components/        # Auth-specific components
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── hooks/             # Custom auth hooks
│   │   │   └── useAuth.ts
│   │   ├── services/          # API logic for auth
│   │   │   └── authService.ts
│   │   ├── store/             # Zustand store specific to auth
│   │   │   └── authStore.ts
│   │   ├── types/              # Auth-specific types
│   │   │   └── auth.types.ts
│   │   └── pages/             # Auth pages
│   │       ├── Login.tsx
│   │       └── Register.tsx
│   ├── dashboard/              # Dashboard module
│   │   ├── components/
│   │   │   ├── DashboardCard.tsx
│   │   │   └── StatWidget.tsx
│   │   ├── hooks/
│   │   │   └── useDashboardData.ts
│   │   ├── services/
│   │   │   └── dashboardService.ts
│   │   ├── types/
│   │   │   └── dashboard.types.ts
│   │   └── pages/
│   │       └── Dashboard.tsx
│   └── users/                  # Users module
│       ├── components/
│       │   └── UserCard.tsx
│       ├── services/
│       │   └── userService.ts
│       ├── types/
│       │   └── user.types.ts
│       └── pages/
│           └── Users.tsx
├── components/                  # Globally shared components
│   ├── common/                 # Generic reusable components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   └── layout/                 # Structure/layout components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Sidebar.tsx
│       └── MainLayout.tsx
├── services/                    # Global services and API configuration
│   └── api.ts                  # Axios/fetch configuration
├── store/                       # Global Zustand stores
│   ├── index.ts                # Exports all stores
│   └── appStore.ts             # Global application store (theme, config)
├── hooks/                       # Global custom hooks
│   ├── useFetch.ts
│   └── useDebounce.ts
├── types/                       # Global/shared types
│   ├── index.ts                # Exports all types
│   └── common.types.ts         # Common types (ApiResponse, etc)
├── utils/                       # Utility functions
│   ├── formatters.ts           # Data formatting (date, currency)
│   ├── validators.ts           # Custom validations
│   └── helpers.ts              # General helper functions
├── constants/                   # Application constants
│   ├── index.ts
│   ├── routes.ts               # Application routes
│   └── api.constants.ts        # API URLs and endpoints
├── assets/                      # Static files
│   ├── images/
│   ├── icons/
│   └── fonts/
├── styles/                      # Global styles
│   ├── global.css
│   └── variables.css           # CSS variables (colors, sizes)
├── routes/                      # Route configuration
│   └── AppRoutes.tsx           # Definition of all routes
├── App.tsx                      # Main application component
├── main.tsx                     # Application entry point
└── vite-env.d.ts               # Vite types (auto-generated)
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the development server at `http://localhost:3000`

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

### Preview

```bash
npm run preview
```

Preview the production build locally.

### Lint

```bash
npm run lint
```

Run ESLint to check code quality.

## Features

- Feature-based folder structure for better organization and scalability
- TypeScript for type safety
- Tailwind CSS for rapid UI development
- Zustand for lightweight state management
- TanStack Query for server state management
- React Router for navigation
- Axios for HTTP requests
- Comprehensive ESLint configuration
- Path aliases configured (`@/*` maps to `./src/*`)
- Vite for fast development and optimized builds

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8000/api
```

Variables must be prefixed with `VITE_` to be exposed to the client.

## License

MIT
