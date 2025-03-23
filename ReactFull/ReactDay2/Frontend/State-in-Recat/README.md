# React + Vite

This project is a React application bootstrapped with Vite. It includes a minimal setup for React development with hot module replacement (HMR) and ESLint configuration.

## Project Structure

Here is a detailed explanation of each file and its purpose:

### Root Files

- **`index.html`**:  
  The entry point of the application. It contains the root `<div>` element where the React app is mounted. It also includes the script to load the `src/main.jsx` file.

- **`package.json`**:  
  Defines the project metadata, dependencies, and scripts. Key scripts include:
  - `dev`: Starts the development server.
  - `build`: Builds the project for production.
  - `lint`: Runs ESLint to check for code quality.
  - `preview`: Previews the production build.

- **`vite.config.js`**:  
  Configuration file for Vite. It includes the React plugin for handling React-specific features.

- **`.gitignore`**:  
  Specifies files and directories to be ignored by Git, such as `node_modules`, `dist`, and editor-specific files.

- **`eslint.config.js`**:  
  Configures ESLint for the project. It includes rules for React, React Hooks, and general JavaScript linting.

### Public Directory

- **`public/vite.svg`**:  
  A static asset (Vite logo) used in the application. Files in the `public` directory are served as-is.

### `src` Directory

- **`src/main.jsx`**:  
  The main entry point for the React application. It renders the `App` component into the root `<div>` in `index.html`.

- **`src/App.jsx`**:  
  The root React component of the application. It imports and renders the `Counter` component.

- **`src/Counter.jsx`**:  
  A React component that implements a simple counter using the `useState` hook. It includes a button to increment the counter and displays the current count.

- **`src/index.css`**:  
  Global CSS styles for the application. It defines the base styles for elements like `body`, `a`, `button`, and more.

- **`src/App.css`**:  
  CSS styles specific to the `App` component. It includes styles for the root container, logo animations, and other UI elements.

- **`src/assets/react.svg`**:  
  A static asset (React logo) used in the application.

## How It Works

1. **Development Server**:  
   Run `npm run dev` to start the Vite development server. It provides fast HMR for React components.

2. **Application Flow**:  
   - The `index.html` file loads the `src/main.jsx` script.
   - `main.jsx` renders the `App` component into the root `<div>`.
   - The `App` component renders the `Counter` component.
   - The `Counter` component uses React's `useState` hook to manage and display a counter value.

3. **Styling**:  
   - Global styles are defined in `src/index.css`.
   - Component-specific styles are defined in `src/App.css`.

4. **Linting**:  
   Run `npm run lint` to check for code quality issues using ESLint.

5. **Building for Production**:  
   Run `npm run build` to generate a production-ready build in the `dist` directory.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend using TypeScript and enabling type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
