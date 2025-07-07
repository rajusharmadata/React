# React Practice Project

A modern React application built with Vite, showcasing various React concepts and components. This project includes a tour booking system and a counter application.

## Features

1. **Tour Booking System**
   - Grid-based tour display using TailwindCSS
   - Interactive tour cards with details
   - Like/Interest functionality for tours
   - Responsive design for all screen sizes

2. **Counter Application**
   - Increment/Decrement functionality
   - Reset button to reset count
   - State management using React hooks
   - User-friendly interface

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Styling**: TailwindCSS 4.1.11
- **UI Components**: React Icons
- **State Management**: React Hooks (useState)
- **Development Tools**: ESLint for code quality

## Project Structure

```
src/
├── App.jsx         # Main application component
├── App.css         # Global styles
├── assets/         # Static assets
├── components/     # React components
│   ├── Button.jsx  # Reusable button component
│   ├── Card.jsx    # Tour card component
│   ├── CounterApp.jsx  # Counter application component
│   ├── Newproduct.jsx  # Product display component
│   ├── Tours.jsx   # Tour booking system component
│   └── data.js     # Tour data
├── index.css       # Base styles
└── main.jsx        # Entry point
```

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## Styling

The project uses TailwindCSS for styling, providing a modern and responsive design. The styling is organized in:

- `index.css` - Base Tailwind directives
- `App.css` - Global application styles
- Component-specific styling using Tailwind classes

## State Management

The application uses React's built-in `useState` hook for state management, demonstrated in both the CounterApp and Tours components.

## Responsive Design

The application is fully responsive and works across all device sizes thanks to TailwindCSS's responsive utilities and grid system.

## Future Improvements

1. Add TypeScript support for better type safety
2. Implement unit tests using Jest
3. Add loading states and error handling
4. Implement local storage for persistent state
5. Add more interactive features to the tour booking system

## License

This project is for educational purposes and can be used freely for learning React development.

---

Created by Raju Sharma
