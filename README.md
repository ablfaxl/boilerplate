

# Next.js Boilerplate with Playwright Testing

This project is a boilerplate setup for a Next.js application, including Playwright-based end-to-end testing, Storybook for component documentation, and Ant Design for UI components. It also integrates tools like Jest for unit testing and Prettier for code formatting.

## Getting Started

To get started, clone this repository and install the dependencies using PNPM (recommended for faster installs).

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

After installing dependencies, you can start the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app in action.

### 3. Run Playwright E2E Tests

To run end-to-end tests using Playwright, use:

```bash
pnpm e2e
```

To run the tests with the Playwright UI (interactive mode):

```bash
pnpm e2e:ui
```

### 4. Storybook for UI Components

You can also run Storybook for component documentation and development:

```bash
pnpm storybook
```

Visit [http://localhost:6006](http://localhost:6006) to view the Storybook interface.

---

### **Key Technologies**

- **Next.js** - React framework for building optimized web applications.
- **Playwright** - End-to-end testing framework for automating browser interactions.
- **Ant Design** - React UI framework for fast development of modern interfaces.
- **Storybook** - Component-driven development environment for React components.
- **Jest & Testing Library** - Unit testing tools for React components.

---

### **Scripts**

- `pnpm dev` - Runs the Next.js development server.
- `pnpm build` - Builds the application for production.
- `pnpm start` - Starts the Next.js application in production mode.
- `pnpm test` - Runs unit tests with Jest.
- `pnpm e2e` - Runs Playwright end-to-end tests.
- `pnpm storybook` - Starts Storybook UI for component documentation.

---

### **Contributing**

Feel free to fork and submit pull requests. We follow a feature-branch workflow for merging changes.

---

### **Senior-Level README**

# Advanced Next.js Boilerplate with Playwright and Ant Design

This project is an advanced Next.js boilerplate application, designed for production-ready setups. It includes comprehensive testing with Playwright, UI documentation with Storybook, and a structured development environment using Ant Design components. The goal is to set up a scalable, high-performance app with full testing coverage.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [PNPM](https://pnpm.io/) - Fast, disk space efficient package manager.

## Setup

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/ablfaxl/boilerplate.git
cd boilerplate
```

### 2. Install Dependencies

We recommend using **PNPM** as your package manager for faster and more efficient installs:

```bash
pnpm install
```

### 3. Run Development Server

Once the dependencies are installed, you can start the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

---

## Testing

This project uses Playwright for end-to-end (E2E) tests and Jest for unit tests.

### 1. Run E2E Tests with Playwright

To run end-to-end tests:

```bash
pnpm e2e
```

For interactive testing (using the Playwright UI):

```bash
pnpm e2e:ui
```

### 2. Run Unit Tests with Jest

Unit tests are written with Jest and can be executed with:

```bash
pnpm test
```

To run tests in watch mode:

```bash
pnpm test:watch
```

---

## Storybook Integration

We use **Storybook** for isolated UI development and component documentation. To start Storybook:

```bash
pnpm storybook
```

Access Storybook at [http://localhost:6006](http://localhost:6006) for viewing and interacting with the UI components.

---

## Production Build

Once development is complete, build the app for production:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

---

### **Project Structure**

- `app/` - Contains all pages, components, and utility functions.
- `tests/` - Playwright and Jest tests for the application.
- `storybook/` - Storybook configuration and stories.
- `public/` - Static assets and images.
- `styles/` - Global styles (TailwindCSS, less).

---

### **Contributing Guidelines**

We follow a strict GitFlow branching model. Please fork the repository and submit pull requests to the `develop` branch. Make sure all tests pass before submitting your changes.

---

### **Dependencies**

- **Next.js** - React framework for server-side rendering and static site generation.
- **Playwright** - End-to-end testing framework for modern web apps.
- **Ant Design** - Design system for React with an extensive library of UI components.
- **Storybook** - Component development environment for building UI components in isolation.
- **Jest** - Testing framework for unit and integration testing.
- **Prettier** & **ESLint** - Code formatting and linting tools.

---
